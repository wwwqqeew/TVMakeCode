package cn.org.rapid_framework.generator.provider.java.model;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import cn.org.rapid_framework.generator.provider.java.myinterface.myinterface.classProvider;
import cn.org.rapid_framework.generator.util.ActionScriptDataTypesUtils;

public class JavaClass {
	private Class clazz;
List<pp> otable = new ArrayList();

	
	public List<pp> getOtable() {
		return otable;
	}
	public void setOtable(List<pp> otable) {
		this.otable = otable;
	}
	
	public JavaClass(Class clazz) {
		otable = new ArrayList();
		setOtable(otable);
		try {
			System.out.println("[CLASSName]"+clazz.getName());
			setOtable(getProperty(clazz.newInstance()));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		};
		this.clazz = clazz;
	}


	 /** 
     * 获得一个对象各个属性的字节流 
     */  
    @SuppressWarnings("unchecked")  
    public List<pp> getProperty(Object entityName) throws Exception {  
        Class c = entityName.getClass();  
        Field field[] = c.getDeclaredFields();  
        pp p= new pp();
		List<pp> list = new ArrayList();
        for (Field f : field) {  
            Object v = invokeMethod(entityName, f.getName(), null);  
            p.setPname(f.getName());
            p.setPtype(f.getType().getSimpleName());
            p.setPvalue(v);
            if(f.isAnnotationPresent(classProvider.class)){
            	classProvider cprovide= (classProvider) f.getAnnotation(classProvider.class);
            	p.setSize(cprovide.size());
            	p.setRemark(cprovide.remark());
            }
            list.add(p);
            System.out.println("[JAVACLASS]"+f.getName() + "\t" + v + "\t" + f.getType()+"\t"+p.getSize()+"\t"+p.getRemark());  
            p= new pp();
        }  
        return list;
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
	
	public String getClassName() {
		return this.clazz.getSimpleName();
	}
	
	public String getPackageName() {
		return clazz.getPackage().getName();
	}
	
	public String getSuperclassName() {
		return clazz.getSuperclass() != null ? clazz.getSuperclass().getName() : null;
	}
	
	public List<JavaMethod> getMethods() {
		Method[] methods = clazz.getDeclaredMethods();
		List result = new ArrayList();
		for(Method m : methods) {
			result.add(new JavaMethod(m,this));
		}
		return result;
	}
	
	public List getProperties() throws Exception {
		List result = new ArrayList();
		BeanInfo beanInfo = Introspector.getBeanInfo(clazz);
		PropertyDescriptor[] pds = beanInfo.getPropertyDescriptors();
		for(PropertyDescriptor pd : pds) {
			result.add(new JavaProperty(pd,this));
		}
		return result;
	}
	
	public List<JavaField> getFields() {
		Field[] fields = clazz.getDeclaredFields();
		List result = new ArrayList();
		for(Field f : fields) {
			result.add(new JavaField(f,this));
		}
		return result;
	}
	
	public String getPackagePath(){
		return getPackageName().replace(".", "/");
	}
	
	public String getParentPackageName() {
		return getPackageName().substring(0,getPackageName().lastIndexOf("."));
	}

	public String getParentPackagePath() {
		return getParentPackageName().replace(".", "/");
	}
	
	public String getAsType() {
		return ActionScriptDataTypesUtils.getPreferredAsType(clazz.getName());
	}
	
	public String getJavaType() {
		return clazz.getName();
	}
	
	public String toString() {
		return "JavaClass:"+clazz.getName();
	}
}
