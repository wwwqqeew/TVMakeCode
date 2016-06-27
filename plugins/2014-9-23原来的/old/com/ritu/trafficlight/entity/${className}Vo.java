<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.trafficlight.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
<#assign datetimeS = 0>
<#list table.columns as column>
<@htm_css_js column=column function="datetime" theT=datetimeS>
import java.util.Date  ;
<#assign datetimeS = 1>
</@htm_css_js>
</#list>
public class ${className}Vo {
	<#list table.columns as column>
	  <#if column.isNotIdOrVersionField>
	  	<#if column.isDateTimeColumn||column.isNumberColumn> <#--时间或者数字结尾-->
	  	<#assign my_used=0>
	  	<@java_my column=column function="_id"><#--数字形式，并且是_ID结尾的，则显示ID显示，否带最大值-->
  	private ${java_p(column)} ${column.columnNameLower};
	  	<#assign my_used=1>
	  	</@java_my>
	  		<#if my_used == 1>
	  		<#else>
	private ${java_p(column)} ${column.columnNameLower};
	private ${java_p(column)} ${column.columnNameLower}_max;
	  		</#if>
		<#elseif column.isStringColumn> <#--字符串结尾-->
	private ${java_p(column)} ${column.columnNameLower};
		<#else>
	private ${java_p(column)} ${column.columnNameLower};
		</#if>
	 </#if>
	</#list>
	private int page;
	
	/**getAndSet**/
	<#list table.columns as column>
	  <#if column.isNotIdOrVersionField>
	  	<#if column.isDateTimeColumn||column.isNumberColumn> <#--时间或者数字结尾-->
	  	<#assign my_used=0>
	  	<@java_my column=column function="_id">
	public ${java_p(column)} get${column.columnName}() {
		return ${column.columnNameLower};
	}

	public void set${column.columnName}(${java_p(column)} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
	  	<#assign my_used=1>
	  	</@java_my>
	  		<#if column.isDateTimeColumn><#--时间的getset-->
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+08:00")
	public ${java_p(column)} get${column.columnName}() {
		return ${column.columnNameLower};
	}
	
	public void set${column.columnName}(${java_p(column)} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+08:00")
	public ${java_p(column)} get${column.columnName}_max() {
		return ${column.columnNameLower}_max;
	}
	
	public void set${column.columnName}_max(${java_p(column)} ${column.columnNameLower}_max) {
		this.${column.columnNameLower}_max = ${column.columnNameLower}_max;
	}
	  		<#elseif column.isNumberColumn><#--数字getset-->
	  		
	public ${java_p(column)} get${column.columnName}() {
		return ${column.columnNameLower};
	}
	
	public void set${column.columnName}(${java_p(column)} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
	
	public ${java_p(column)} get${column.columnName}_max() {
		return ${column.columnNameLower}_max;
	}
	
	public void set${column.columnName}_max(${java_p(column)} ${column.columnNameLower}_max) {
		this.${column.columnNameLower}_max = ${column.columnNameLower}_max;
	}
			<#else>
	  		</#if>
		<#elseif column.isStringColumn> <#--字符串结尾-->
	public ${java_p(column)} get${column.columnName}() {
		return ${column.columnNameLower};
	}
	
	public void set${column.columnName}(${java_p(column)} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
		<#else><#--其他结尾-->
	public ${java_p(column)} get${column.columnName}() {
		return ${column.columnNameLower};
	}
	
	public void set${column.columnName}(${java_p(column)} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
		</#if>
	 </#if>
	</#list>
	
	public int getPage() {
		return page;
	}
	
	public void setPage(int page) {
		this.page = page;
	}
}
