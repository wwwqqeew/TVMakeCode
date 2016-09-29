<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.cherry.repository;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.ritu.cherry.domain.${className};
import com.ritu.cherry.domain.vo.${className}Vo;
import com.ritu.cherry.util.base.BaseRepository;


/**
 * ${table.columns[0].columnAlias}
 * @author 
 * @version 1.0
 */
@Mapper
@Repository
public interface ${className}Repository extends BaseRepository<${className},${className}Vo, Long>{
	

}
