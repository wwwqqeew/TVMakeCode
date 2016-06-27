package cn.org.rapid_framework.generator;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

import cn.org.rapid_framework.generator.provider.java.model.pp;

public class T {  
    public static void main(String[] args) throws Exception {  
    	pp p= new pp(); 
    	p.setPname("anme");
    	p.setPtype("Str");
    	p.setPvalue("ddd");
        getProperty(p);  
    	System.out.println(pp.class.newInstance());
    }  
    /** 
     * 获得一个对象各个属性的字节流 
     */  
    @SuppressWarnings("unchecked")  
    public static void getProperty(Object entityName) throws Exception {  
        Class c = entityName.getClass();  
        Field field[] = c.getDeclaredFields();  
        for (Field f : field) {  
            Object v = invokeMethod(entityName, f.getName(), null);  
            System.out.println(f.getName() + "\t" + v + "\t" + f.getType().getSimpleName());  
        }  
    }  
    /** 
     * 获得对象属性的值 
     */  
    @SuppressWarnings("unchecked")  
    private static Object invokeMethod(Object owner, String methodName,  
            Object[] args) throws Exception {  
        Class ownerClass = owner.getClass();  
        methodName = methodName.substring(0, 1).toUpperCase()  
                + methodName.substring(1);  
        Method method = null;  
        try {  
            method = ownerClass.getMethod("get" + methodName);  
        } catch (SecurityException e) {  
        } catch (NoSuchMethodException e) {  
            return " can't find 'get" + methodName + "' method";  
        }  
        return method.invoke(owner);  
    }  
}  
