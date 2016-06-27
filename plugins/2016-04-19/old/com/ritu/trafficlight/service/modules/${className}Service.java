<#include "/custom.include">
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.trafficlight.service.modules;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.ritu.trafficlight.entity.${className};
import com.ritu.trafficlight.entity.${className}Vo;
import com.ritu.trafficlight.repository.${className}Dao;
import com.ritu.trafficlight.repository.${className}ImplDao;
import com.ritu.trafficlight.utils.PageSetting;

@Component
@Transactional(readOnly = true)
public class ${className}Service {

	private ${className}Dao ${classNameLower}Dao;

	private ${className}ImplDao ${classNameLower}ImplDao;
	
	@CacheEvict(value = "cache", allEntries = true)
	@Transactional(readOnly = false)
	public void add(${className} ${classNameLower}) {
		${classNameLower}Dao.save(${classNameLower});
	}
	
	<#list table.columns as column>
	 <#if !column.pk>
	 <@java_my column=column function="sm">
	public  boolean  countBy${column.columnName}(String ${column.columnNameLower}){
		return ${classNameLower}Dao.countBy${column.columnName}(${column.columnNameLower})==0l?true:false;
	}
	 </@java_my>
	 </#if>
	</#list>

	@Transactional(readOnly = false)
	public void delete(Long id) {
		${classNameLower}Dao.delete(id);
	}
	
	public Iterable<${className}> findAll() {
		return ${classNameLower}Dao.findAll();
	}
	
	public Page<${className}> findAll(int page, String... fields) {
		return ${classNameLower}Dao.findAll(new PageSetting(page, 10, fields));
	}
	
	@Cacheable(value = "cache", key = "'${classNameLower}'+#id")
	public ${className} findById(Long id) {
		return ${classNameLower}Dao.findById(id);
	}

	public Page<${className}> findById(List<Long> ids) {
		return ${classNameLower}Dao.findByIdIn(ids, new PageSetting(1, 20, false));
	}

	public List<${className}> findByPropertysList (int page,${className}Vo ${classNameLower}Vo){
		return ${classNameLower}ImplDao.searchByProperty(${classNameLower}Vo, 10, page, true);	
	}
	
	public int findByPropertysCount (int page,${className}Vo ${classNameLower}Vo){
		return ${classNameLower}ImplDao.getCount(${classNameLower}Vo, 10, page, true);	
	}

	
	@CacheEvict(value = "cache", allEntries = true)
	@Transactional(readOnly = false)
	public void update(${className} ${classNameLower}) {
		${classNameLower}Dao.save(${classNameLower});
	}

	@Autowired
	public void set${className}Dao(${className}Dao ${classNameLower}Dao) {
		this.${classNameLower}Dao = ${classNameLower}Dao;
	}
	
	@Autowired
	public void set${className}ImplDao(${className}ImplDao ${classNameLower}ImplDao) {
		this.${classNameLower}ImplDao = ${classNameLower}ImplDao;
	}
}
