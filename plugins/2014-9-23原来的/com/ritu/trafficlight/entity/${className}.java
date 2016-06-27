<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.trafficlight.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name = "trff_${classNameLower}")
public class ${className} extends BaseEntity2 {
	
	<#if table.compositeId>
<#else>
	//字段 START
	<#list table.columns as column>
	<#--<#if (!column.pk) && (column.columnNameLower!="remark")>-->
	private ${java_p(column)} ${column.columnNameLower}; //${htm_notes(column)} <#if (column.pk)>（主键）</#if>
	<#--</#if>-->
	</#list>
	//字段 END
	
	//外键 相关 START
	<@generateJavaOneToManyColumns/>
	<@generateJavaManyToOneColumns/>
	//外键 相关 END
	
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
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
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
	
	<#--</#if>-->
	</#if>
	</#list>
	<@generateJavaOneToMany/>
	<@generateJavaManyToOne/>
	
	<#macro generateJavaOneToMany>
	<#list table.exportedKeys.associatedTables?values as foreignKey>
	<#assign fkSqlTable = foreignKey.sqlTable>
	<#assign fkTable    = fkSqlTable.className>
	<#assign fkPojoClass = fkSqlTable.className>
	<#assign fkPojoClassVar = fkPojoClass?uncap_first>
	
	public void set${fkPojoClass}s(Set<${fkPojoClass}> ${fkPojoClassVar}){
		this.${fkPojoClassVar}s = ${fkPojoClassVar};
	}
	
	@OneToMany(cascade = { CascadeType.MERGE }, fetch = FetchType.LAZY, mappedBy = "${classNameLower}")
	public Set<${fkPojoClass}> get${fkPojoClass}s() {
		return ${fkPojoClassVar}s;
	}
	</#list>
</#macro>

<#macro generateJavaManyToOne>
	<#list table.importedKeys.associatedTables?values as foreignKey>
	<#assign fkSqlTable = foreignKey.sqlTable>
	<#assign fkTable    = fkSqlTable.className>
	<#assign fkPojoClass = fkSqlTable.className>
	<#assign fkPojoClassVar = fkPojoClass?uncap_first>
	
	public void set${fkPojoClass}(${fkPojoClass} ${fkPojoClassVar}){
		this.${fkPojoClassVar} = ${fkPojoClassVar};
	}
	
	@ManyToOne(cascade = {}, fetch = FetchType.LAZY)
	<#list foreignKey.parentColumns?values as fkColumn>
	@JoinColumn(name = "${fkColumn}",nullable = false, insertable = false, updatable = false)
    </#list>
	public ${fkPojoClass} get${fkPojoClass}() {
		return ${fkPojoClassVar};
	}
	</#list>
</#macro>

<#macro generateJavaOneToManyColumns>
<#list table.exportedKeys.associatedTables?values as foreignKey>
<#assign fkSqlTable = foreignKey.sqlTable>
<#assign fkTable    = fkSqlTable.className>
<#assign fkPojoClass = fkSqlTable.className>
<#assign fkPojoClassVar = fkPojoClass?uncap_first>
	private List<${fkPojoClassVar}> ${fkPojoClassVar}s ;
</#list>
</#macro>

<#macro generateJavaManyToOneColumns>
<#list table.importedKeys.associatedTables?values as foreignKey>
<#assign fkSqlTable = foreignKey.sqlTable>
<#assign fkTable    = fkSqlTable.className>
<#assign fkPojoClass = fkSqlTable.className>
<#assign fkPojoClassVar = fkPojoClass?uncap_first>
	private ${fkPojoClass} ${fkPojoClassVar};
</#list>
</#macro>
	
</#if>
}
