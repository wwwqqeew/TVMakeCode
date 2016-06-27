package cn.org.rapid_framework.generator.util;

import java.beans.BeanInfo;
import java.beans.IntrospectionException;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

import net.sf.json.JSONArray;

/**
 * 基础帮助者？
 * @author rocent
 *
 */
public class BeanHelper {
	/**
	 * @see #org.apache.commons.beanutils.BeanUtils.BeanUtils.describe(obj)
	 */ 
	public static Map describe(Object obj) {
		if (obj instanceof Map)//测试它左边的对象是否是它右边的类的实例
			return (Map) obj;

		Map map = new HashMap();
		PropertyDescriptor[] descriptors = getPropertyDescriptors(obj.getClass());//返回类的各种属性
		for(int i = 0; i < descriptors.length; i++ ) {
			String name = descriptors[i].getName();
//			System.out.println("name:"+name);
            Method readMethod = descriptors[i].getReadMethod();
//            System.out.println("readMethod:"+readMethod);
			if (readMethod != null) {
				try {
					map.put(name, readMethod.invoke(obj, new Object[]{}));//对带有指定参数的指定对象调用由此 Method 对象表示的底层方法。
					if("declaredFields".equals(name)){
						//JSONArray objf = JSONArray.fromObject(readMethod.invoke(obj, new Object[]{}));
						//infoMap = readMethod.invoke(obj, new Object[]{});
						//System.out.println("11111:"+name+"         "+objf.toString());
//						readMethod.invoke(obj, new Object[]{})888888
					}
					//JSONArray objf = JSONArray.fromObject(readMethod.invoke(obj, new Object[]{}));
//					System.out.println("11111:"+name+"         "+readMethod.invoke(obj, new Object[]{}).toString());
				}catch(Exception e){
					GLogger.warn("error get property value,name:"+name+" on bean:"+obj,e);
				}
            }
		}
		return map;
	}

	public static PropertyDescriptor[] getPropertyDescriptors(Class beanClass) {
		BeanInfo beanInfo = null;
		try {
			beanInfo = Introspector.getBeanInfo(beanClass);
		} catch (IntrospectionException e) {
			return (new PropertyDescriptor[0]);
		}
		PropertyDescriptor[] descriptors = beanInfo.getPropertyDescriptors();
		if (descriptors == null) {
			descriptors = new PropertyDescriptor[0];
		}
		return descriptors;
	}
}
