<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.cherry.domain.vo;


import java.beans.Transient;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ritu.cherry.util.base.BaseEntityVo;
import com.ritu.cherry.util.base.BaseInterfaceVo;

/**
 * ${table.columns[0].columnAlias}
 * @author 
 * @version 1.0
 * @param <T>
 * @param <T>
 */
public class ${className}Vo extends BaseEntityVo  implements BaseInterfaceVo{

	private static final long serialVersionUID = 1L;


	//字段 START
	<#list table.columns as column>
	<#if column.pk>
	<#else>
	<#if !isforeignKey(column)>
	private ${java_p(column)} ${column.columnNameLower}; //${htm_notes(column)} <#if (column.pk)>（主键）</#if>
	<#else>
	//
	</#if>
	</#if>
	</#list>
	//字段 END
	
	//getAndSet
	<#list table.columns as column>
	<#--<#if !column.pk && (column.columnNameLower!="remark")>-->
	<#if column.isDateTimeColumn>
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+08:00")
	public ${java_p(column)} get${column.columnName}() {
		return ${column.columnNameLower};
	}
	
	public void set${column.columnName}(${java_p(column)} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
	<#elseif column.pk>

	<#else>
	<#if !isforeignKey(column)>
	public ${java_p(column)} get${column.columnName}() {
		return ${column.columnNameLower};
	}
	
	public void set${column.columnName}(${java_p(column)} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
	</#if>

	<#--</#if>-->
	</#if>
	</#list>

		

}
