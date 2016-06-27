<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.trafficlight.repository;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.ritu.trafficlight.entity.${className};
import com.ritu.trafficlight.entity.${className}Vo;
import com.ritu.trafficlight.entity.UserVo;

/**
 * @function ${table.columns[0].columnAlias}持久层
 * @author cheng.G.Y
 * @date ${table.columns[0].nowDate}
 * @latitude 1.0
 */
@Repository
public class ${className}ImplDao {

	@PersistenceContext
	private EntityManager em;

	private Query createQuery(String hql) {
		return em.createQuery(hql);
	}
	/**
	 * 获取总数
	 * @param ${className}Vo 与界面交互的${className}类
	 * @param pageSize 每页项目数
	 * @param page 页数
	 * @param isAsc 排序
	 * @return 总页数
	 */
	public int getCount(${className}Vo ${classNameLower}Vo, int pageSize, int page, boolean isAsc) {
		Query query = createQuery(getHql(isAsc,${classNameLower}Vo));
		setParameters(query,${classNameLower}Vo);
		return ((query.getResultList().size() -1 )/pageSize + 1);//页数计算及返回
	}
	
	/**
	 * 生成HQL
	 * @param isAsc 排序
	 * @param ${className}Vo (与界面交互的${className}类)
	 * @return HQL语句
	 */
	private String getHql(boolean isAsc,${className}Vo ${classNameLower}Vo) {
		StringBuilder hql = new StringBuilder("FROM ${className} AS o WHERE 1 =1 ");
		<#list table.columns as column>
		  <#if column.isNotIdOrVersionField>
		  	<#if column.isDateTimeColumn||column.isNumberColumn>
		  	<#assign my_used=0>
		  	<@java_my column=column function="_id">
		  	if(${classNameLower}Vo.get${column.columnName}() != null )
				hql.append("And o.${column.columnNameLower} = :${column.columnNameLower} ");
		  	<#assign my_used=1>
		  	</@java_my>
		  	<#if my_used == 1>
		  	<#else>
		  	if(${classNameLower}Vo.get${column.columnName}() != null ){
		  		hql.append("And o.${column.columnNameLower} >= :${column.columnNameLower} ");
		  	}if( ${classNameLower}Vo.get${column.columnName}_max() != null){
		  		hql.append("And o.${column.columnNameLower} <= :${column.columnNameLower}_max ");
		  	}
		  	</#if>
			<#elseif column.isStringColumn>
			if(${classNameLower}Vo.get${column.columnName}() != null && ${classNameLower}Vo.get${column.columnName}() != "")
				hql.append("And o.${column.columnNameLower} like :${column.columnNameLower} ");
			<#else>
			if(${classNameLower}Vo.get${column.columnName}() != null)
				hql.append("And o.${column.columnNameLower} = :${column.columnNameLower} ");
			</#if>
		 </#if>
		</#list>
		hql.append("ORDER BY o.id "+(isAsc == true ? "ASC": "DESC"));
		return hql.toString();
	}

	/**
	 * 根据属性查询
	 * @param ${className}Vo (与界面交互的${className}类)
	 * @param pageSize 每页项目数
	 * @param page 页数
	 * @param isAsc 排序
	 * return 分页后的对象列表
	 */
	@SuppressWarnings("unchecked")
	public List<${className}> searchByProperty(${className}Vo ${classNameLower}Vo, int pageSize, int page, boolean isAsc) {
		Query query = createQuery(getHql(isAsc,${classNameLower}Vo));
		setParameters(query,${classNameLower}Vo);
		query.setFirstResult(pageSize * (page - 1));
		query.setMaxResults(pageSize);
		return query.getResultList();
	}
	
	/**
	 * 参数设置
	 * @param Query Query对象
	 * @param ${className}Vo (与界面交互的${className}类)
	 */
	private void setParameters(Query query,${className}Vo ${classNameLower}Vo) {
		<#list table.columns as column>
		  <#if column.isNotIdOrVersionField>
		  	<#if column.isDateTimeColumn||column.isNumberColumn>
		  	<#assign my_used=0>
		  	<@java_my column=column function="_id">
		  	if(${classNameLower}Vo.get${column.columnName}() != null )
		  		query.setParameter("${column.columnNameLower}", ${classNameLower}Vo.get${column.columnName}());
		  	<#assign my_used=1>
		  	</@java_my>
		  	<#if my_used == 1>
		  	<#else>
		  	if(${classNameLower}Vo.get${column.columnName}() != null){
		  		query.setParameter("${column.columnNameLower}", ${classNameLower}Vo.get${column.columnName}());
		  	}if( ${classNameLower}Vo.get${column.columnName}_max() != null){
				query.setParameter("${column.columnNameLower}_max", ${classNameLower}Vo.get${column.columnName}_max());
		  	}
		  	</#if>
			<#elseif column.isStringColumn>
			if(${classNameLower}Vo.get${column.columnName}() != null && ${classNameLower}Vo.get${column.columnName}() != "")
				query.setParameter("${column.columnNameLower}", "%" + ${classNameLower}Vo.get${column.columnName}() + "%");
			<#else>
			if(${classNameLower}Vo.get${column.columnName}() != null)
				query.setParameter("${column.columnNameLower}", ${classNameLower}Vo.get${column.columnName}());
			</#if>
		 </#if>
		</#list>
	}
	
}
