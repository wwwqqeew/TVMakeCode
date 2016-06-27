<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.trafficlight.service.modules;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.ritu.trafficlight.entity.${className};
import com.ritu.trafficlight.entity.${className}Vo;
import com.ritu.trafficlight.entity.Direction;
import com.ritu.trafficlight.entity.Link;
import com.ritu.trafficlight.entity.VdictTurn;
import com.ritu.trafficlight.repository.${className}Dao;
import com.ritu.trafficlight.repository.${className}ImplDao;
import com.ritu.trafficlight.utils.PageSetting;

/**
 * @function ${table.columns[0].columnAlias}业务层
 * @author 陈国元
 * @date ${table.columns[0].nowDate}
 * @latitude 1.0
 */
@Component
@Transactional(readOnly = true)
public class ${className}Service {

	private ${className}Dao ${classNameLower}Dao;//JPA持久层对象
	private AAADao aaaDao;//JPA持久层对象
	
	/**
	 * 获取所有对象
	 * @return Iterable 对象列表
	 */
	public Iterable<${className}> findAll() {
		return ${classNameLower}Dao.findAll();
	}
	
	/**
	 * 数据转存
	 * 
	 */
	@CacheEvict(value = "cache", allEntries = true)
	@Transactional(readOnly = false)
	public void turnData(){
		List<AAA> ListAAA = new ArrayList<AAA>();
		List<${className}> List${className} = new ArrayList<${className}>();
		List${className} = (List<${className}>) ${classNameLower}Dao.findAll();
		for (${className} ${classNameLower} : List${className}) {
			ListAAA.add(this.turnToOther(${classNameLower}));
		}
		aaaDao.save(ListAAA);
//		System.out.println(ListDirection);
	}

	/**
	 * 对象转换
	 * @param ${classNameLower} 即将转换的对象
	 * @return 转换后的对象
	 */
	public AAA turnToOther(${className} ${classNameLower}){
		AAA AAA = new AAA();
		<#list table.columns as column>
		AAA.set${column.columnName}(${classNameLower}.get${column.columnName}());
		</#list>
		
		return AAA;
	}
	
	@Autowired
	public void set${className}Dao(${className}Dao ${classNameLower}Dao) {
		this.${classNameLower}Dao = ${classNameLower}Dao;
	}
	
	@Autowired
	public void setAAADao(AAADao aaaDao) {
		this.aaaDao = aaaDao;
	}
	
}
