<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.trafficlight.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.ritu.trafficlight.entity.${className};
import com.ritu.trafficlight.entity.User;
import com.ritu.trafficlight.utils.EntityDao;
/**
 * @function ${table.columns[0].columnAlias}JPA持久层
 * @author cheng.G.Y
 * @date ${table.columns[0].nowDate}
 * @latitude 1.0
 */
public interface ${className}Dao extends PagingAndSortingRepository<${className}, <#list table.columns as column><#if (column.pk)>${java_p(column)}</#if></#list>>, EntityDao<${className},<#list table.columns as column><#if (column.pk)>${java_p(column)}</#if></#list>>{
	
	<#list table.columns as column>
	 <#if !column.pk>
	 <@java_my column=column function="sm">
	 @Query( "select count (*) from ${className} u where u.${column.columnNameLower} = ?1")
	 public  Long  countBy${column.columnName}(String ${column.columnNameLower});//同名检测
	 </@java_my>
	 </#if>
	</#list>
	
	<#list table.columns as column>
	<#if (column.pk)>
	public ${className} findBy${column.columnNameLower?cap_first}(${java_p(column)} ${column.columnNameLower});//根据ID查找
	
//	public Page<${className}> findByIdIn(List<Long> ids, Pageable pageRequest);
	</#if>
	</#list>
	
	<#list table.columns as column>
	<#if (column.pk)>
//	@Query( "select* from ${className} u where u.${column.columnNameLower?cap_first} = ?1")
//	public ${className} findById(${java_p(column)} id);//根据ID查找
	</#if>
	</#list>
}
