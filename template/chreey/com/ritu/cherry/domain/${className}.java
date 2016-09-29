<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.cherry.domain;


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

/**
 * ${table.columns[0].columnAlias}
 * @author 
 * @version 1.0
 * @param <T>
 * @param <T>
 */
@Entity
@Table(name = "cherry_${classNameLower}")
public class ${className} extends BaseEntity{

	public ${className}(){
		this.setCreateTime(new Date());
	}
	private static final long serialVersionUID = 1L;


	//字段 START
	<#list table.columns as column>
	<#if column.pk>
	//private long id;
	<#else>
	<#if !isforeignKey(column)>
	private ${java_p(column)} ${column.columnNameLower}; //${htm_notes(column)} <#if (column.pk)>（主键）</#if>
	<#else>
	//
	</#if>
	</#if>
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
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	public ${java_p(column)} get${column.columnName}() {
//		return ${column.columnNameLower};
//	}
//
//	public void set${column.columnName}(${java_p(column)} ${column.columnNameLower}) {
//		this.${column.columnNameLower} = ${column.columnNameLower};
//	}
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
		
		@JsonIgnore
		@OneToMany(targetEntity = com.ritu.nanning.entity.${fkPojoClass}.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "${classNameLower}")
		@Fetch(FetchMode.SELECT)
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
		
//		@Transient
//		public String get${fkPojoClass}Name() {
//			return (${fkPojoClassVar} == null ? "" : ${fkPojoClassVar}.getName());
//		}
//
//		public void set${fkPojoClass}Name(String demoName) {
//			this.${fkPojoClassVar}Name = ${fkPojoClassVar}Name;
//		}
		
		public void set${fkPojoClass}(${fkPojoClass} ${fkPojoClassVar}){
			this.${fkPojoClassVar} = ${fkPojoClassVar};
		}
		
		//@ManyToOne(cascade = {}, fetch = FetchType.LAZY)
		<#list foreignKey.parentColumns?values as fkColumn>
		//@JoinColumn(name = "${fkColumn}",nullable = false, insertable = false, updatable = false)
		@ManyToOne(optional = false, fetch = FetchType.EAGER)
		@JoinColumn(name = "${fkPojoClass?uncap_first}Id")
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
		private Set <${fkPojoClass}> ${fkPojoClassVar}s = new HashSet<${fkPojoClass}>(0);
	</#list>
	</#macro>

	<#macro generateJavaManyToOneColumns>
	<#list table.importedKeys.associatedTables?values as foreignKey>
	<#assign fkSqlTable = foreignKey.sqlTable>
	<#assign fkTable    = fkSqlTable.className>
	<#assign fkPojoClass = fkSqlTable.className>
	<#assign fkPojoClassVar = fkPojoClass?uncap_first>
//		private String ${fkPojoClassVar}Name;//外键名称
		private ${fkPojoClass} ${fkPojoClassVar};
	</#list>
	</#macro>
		

}
