<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.model;

<#assign datetimeS = 0>
<#list table.columns as column>
<@htm_css_js column=column function="datetime" theT=datetimeS>
import java.util.Date  ;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
<#assign datetimeS = 1>
</@htm_css_js>
</#list>
/**
 * @function ${table.columns[0].columnAlias}表
 * @author cheng.G.Y
 * @date ${table.columns[0].nowDate}
 * @latitude 1.0
 */
public class ${className} extends BaseEntity {
	
	
	//字段 START
	<#list table.columns as column>
	@JsonProperty("${column.columnName}")
	private ${java_p(column)} ${column.columnNameLower}; //${htm_notes(column)} <#if (column.pk)>（主键）</#if>
	</#list>
	//字段 END
	

	<#list table.columns as column>
	@JsonIgnore
	public ${java_p(column)} get${column.columnName}() {
		return ${column.columnNameLower};
	}
	
	public void set${column.columnName}(${java_p(column)} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
	</#list>

}
