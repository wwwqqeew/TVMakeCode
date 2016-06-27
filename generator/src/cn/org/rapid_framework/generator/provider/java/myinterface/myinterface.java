package cn.org.rapid_framework.generator.provider.java.myinterface;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

public class myinterface {

	/**
	 * 类属性字段注释
	 * @author CGY
	 *
	 */
	@Target(ElementType.FIELD)
	@Retention(RetentionPolicy.RUNTIME)
	@Documented
	public @interface classProvider {
	    /**
	     * 属性长度
	     * @return
	     */
	    public int size() default 0;
	    
	    /**
	     * 属性注释
	     * @return
	     */
	    public String remark() default "";
	    
	}
}
