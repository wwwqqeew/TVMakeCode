<#include "/macro.include"/>
<#include "/java_copyright.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first> 
package ${basepackage}.model;

import javax.annotation.Resource;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;

import com.createwealth.service.inter.UserServiceInter;
import com.opensymphony.xwork2.ActionSupport;

<#include "/java_imports.include">

public class ${className}Action extends ActionSupport {
	private static final long serialVersionUID = 1L;
	<#list table.columns as column>
	private ${column.javaType} ${column.columnNameLower};  //${column.columnAlias}
	</#list>
	
	@Resource
	private ${className}ServiceInter ${table.sqlName}Service;
	
	@Override
	public String execute() throws Exception {
		try {
			// 初始化页面数据
			
			return "-suc";
		} catch (Exception e) {
			e.printStackTrace();
			return "-fail";
		}
	}
	
	<@generateJavaColumns/>
	<#macro generateJavaColumns>
		<#list table.columns as column>
		public void set${column.columnName}(${column.javaType} ${column.columnNameLower}) {
			this.${column.columnNameLower} = ${column.columnNameLower};
		}
		
		public ${column.javaType} get${column.columnName}() {
			return this.${column.columnNameLower};
		}
		</#list>
	</#macro>
}