<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#include "/java_util.include">
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
import com.ritu.trafficlight.utils.base.EntityImplDao;
import com.ritu.trafficlight.utils.base.BaseService;
import com.ritu.trafficlight.utils.base.EntityDao;
import com.ritu.trafficlight.utils.PageSetting;

/**
 * @function ${table.columns[0].columnAlias}业务层
 * @author cheng.G.Y
 * @date ${table.columns[0].nowDate}
 * @latitude 1.0
 */
@Component
@Transactional(readOnly = true)
public class ${className}Service extends BaseService<${className},<@getTablePkType/>>{

	private ${className}Dao ${classNameLower}Dao;//JPA持久层对象

	private EntityImplDao ${classNameLower}ImplDao;//持久层对象
	
	@Override
	protected EntityDao getEntityDao() {
		return this.${classNameLower}Dao;
	}
	@Override
	protected PagingAndSortingRepository getPASRDao() {
		// TODO Auto-generated method stub
		return this.${classNameLower}Dao;
	}
	@Override
	protected EntityImplDao getEntityImplDao() {
		// TODO Auto-generated method stub
		return ${classNameLower}ImplDao;
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

	@Autowired
	public void set${className}Dao(${className}Dao ${classNameLower}Dao) {
		this.${classNameLower}Dao = ${classNameLower}Dao;
	}
	
	@Autowired
	public void set${className}ImplDao(EntityImplDao ${classNameLower}ImplDao) {
		this.${classNameLower}ImplDao = ${classNameLower}ImplDao;
	}
}
