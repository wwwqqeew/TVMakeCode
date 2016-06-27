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
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.ritu.trafficlight.entity.${className};
import com.ritu.trafficlight.entity.${className}Vo;
import com.ritu.trafficlight.entity.User;
import com.ritu.trafficlight.repository.${className}Dao;
import com.ritu.trafficlight.repository.${className}ImplDao;
import com.ritu.trafficlight.service.modules.BaseService;
import com.ritu.trafficlight.utils.EntityDao;
import com.ritu.trafficlight.utils.PageSetting;

/**
 * @function ${table.columns[0].columnAlias}业务层
 * @author cheng.G.Y
 * @date ${table.columns[0].nowDate}
 * @latitude 1.0
 */
@Component
@Transactional(readOnly = true)
public class ${className}Service extends BaseService<${className},<#list table.columns as column><#if (column.pk)>${java_p(column)}</#if></#list>>{

	private ${className}Dao ${classNameLower}Dao;//JPA持久层对象

	private ${className}ImplDao ${classNameLower}ImplDao;//持久层对象
	
	@Override
	protected EntityDao getEntityDao() {
		return this.${classNameLower}Dao;
	}
	@Override
	protected PagingAndSortingRepository getPASRDao() {
		// TODO Auto-generated method stub
		return this.${classNameLower}Dao;
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


	@Autowired
	public void set${className}Dao(${className}Dao ${classNameLower}Dao) {
		this.${classNameLower}Dao = ${classNameLower}Dao;
	}
	
	@Autowired
	public void set${className}ImplDao(${className}ImplDao ${classNameLower}ImplDao) {
		this.${classNameLower}ImplDao = ${classNameLower}ImplDao;
	}
}
