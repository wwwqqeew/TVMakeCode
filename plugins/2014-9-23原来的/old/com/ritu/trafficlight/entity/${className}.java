<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.trafficlight.entity;

import javax.persistence.Entity;
import javax.persistence.Table;
<#assign datetimeS = 0>
<#list table.columns as column>
<@htm_css_js column=column function="datetime" theT=datetimeS>
import java.util.Date  ;
import com.fasterxml.jackson.annotation.JsonFormat;
<#assign datetimeS = 1>
</@htm_css_js>
</#list>
/**
 * @function ${table.columns[0].columnAlias}表
 * @author cheng.G.Y
 * @date ${table.columns[0].nowDate}
 * @latitude 1.0
 */
@Entity
@Table(name = "ritu_trafficlight_${classNameLower}")
public class ${className} extends BaseEntity {
	
	<#if table.compositeId>
	${table.compositeId} 
<#else>
	//columns START
	<#list table.columns as column>
	<#if (!column.pk) && (column.columnNameLower!="remark")>
	private ${java_p(column)} ${column.columnNameLower}; //${htm_notes(column)}
	</#if>
	</#list>
	//columns END
	
	//getAndSet
	<#list table.columns as column>
	<#if !column.pk && (column.columnNameLower!="remark")>
	<#if column.isDateTimeColumn>
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+08:00")
	public ${java_p(column)} get${column.columnName}() {
		return ${column.columnNameLower};
	}
	
	public void set${column.columnName}(${java_p(column)} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
	
	<#else>
	public ${java_p(column)} get${column.columnName}() {
		return ${column.columnNameLower};
	}
	
	public void set${column.columnName}(${java_p(column)} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
	
	</#if>
	</#if>
	</#list>
	
</#if>
}
