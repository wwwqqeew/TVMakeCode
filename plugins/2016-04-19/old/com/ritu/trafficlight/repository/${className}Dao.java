<#include "/custom.include">
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

public interface ${className}Dao extends PagingAndSortingRepository<${className}, Long>{
	
	<#list table.columns as column>
	 <#if !column.pk>
	 <@java_my column=column function="sm">
	 @Query( "select count (*) from ${className} u where u.${column.columnNameLower} = ?1")
	 public  Long  countBy${column.columnName}(String ${column.columnNameLower});
	 </@java_my>
	 </#if>
	</#list>
	
	public ${className} findById(Long id);
	
	public Page<${className}> findByIdIn(List<Long> ids, Pageable pageRequest);
	
}
