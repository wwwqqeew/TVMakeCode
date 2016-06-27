<#include "/custom.include">
<#include "/macro.include"/>
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

/**
 * @function ${table.columns[0].columnAlias}业务层
 * @author cheng.G.Y
 * @date ${table.columns[0].nowDate}
 * @latitude 1.0
 */
@Component
@Transactional(readOnly = true)
public class ${className}Service {

	private ${className}Dao ${classNameLower}Dao;//JPA持久层对象

	private ${className}ImplDao ${classNameLower}ImplDao;//持久层对象
	
	/**
	 * 添加${className}
	 * @param ${classNameLower} 对象
	 * 
	 */
	@CacheEvict(value = "cache", allEntries = true)
	@Transactional(readOnly = false)
	public void add(${className} ${classNameLower}) {
		${classNameLower}Dao.save(${classNameLower});
	}
	
	<#list table.columns as column>
	 <#if !column.pk>
	 <@java_my column=column function="sm">
	/**
	 * 同名检测
	 * @param 要检测的参数
	 * return true 
	 */
	public  boolean  countBy${column.columnName}(String ${column.columnNameLower}){
		return ${classNameLower}Dao.countBy${column.columnName}(${column.columnNameLower})==0l?true:false;
	}
	 </@java_my>
	 </#if>
	</#list>

	/**
	 * 根据ID删除对象
	 * @param id
	 */
	@Transactional(readOnly = false)
	public void delete(<#list table.columns as column><#if (column.pk)>${java_p(column)}</#if></#list> id) {
		${classNameLower}Dao.delete(id);
	}
	
	/**
	 * 获取所有对象
	 * @return Iterable 对象列表
	 */
	public Iterable<${className}> findAll() {
		return ${classNameLower}Dao.findAll();
	}
	
	/**
	 * 根据页面查找
	 * @param page 当前页码
	 * @param fields 排序
	 * @return 获取的对象列表
	 */
	public Page<${className}> findAll(int page, String... fields) {
		return ${classNameLower}Dao.findAll(new PageSetting(page, 10, fields));
	}
	
	/**
	 * 根据ID查找对象
	 * @param id ID
	 * @return 查找到的对象
	 */
	@Cacheable(value = "cache", key = "'${classNameLower}'+#id")
	public ${className} findById(<#list table.columns as column><#if (column.pk)>${java_p(column)}</#if></#list> id) {
		return ${classNameLower}Dao.findById(id);
	}

	/**
	 * 根据ID列表查找
	 * @param ids ID列表
	 * @return 获取的对象列表
	 */
	public Page<${className}> findById(List<<#list table.columns as column><#if (column.pk)>${java_p(column)}</#if></#list>> ids) {
		return ${classNameLower}Dao.findByIdIn(ids, new PageSetting(1, 20, false));
	}

	/**
	 * 根据页面和对象属性获取对象列表
	 * @param page 页码
	 * @param ${classNameLower}Vo 带参数的页面类
	 * @return 获取的对象列表
	 */
	public List<${className}> findByPropertysList (int page,${className}Vo ${classNameLower}Vo){
		return ${classNameLower}ImplDao.searchByProperty(${classNameLower}Vo, 10, page, true);	
	}
	
	/**
	 * 根据页面和对象属性获取对象总数
	 * @param page 页码
	 * @param ${classNameLower}Vo 带参数的页面类
	 * @return 对象总数
	 */
	public int findByPropertysCount (int page,${className}Vo ${classNameLower}Vo){
		return ${classNameLower}ImplDao.getCount(${classNameLower}Vo, 10, page, true);	
	}

	/**
	 * 根据对象更新
	 * @param ${classNameLower} 要更新的对象
	 */
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
