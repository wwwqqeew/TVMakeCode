<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.cherry.service.impl;

import org.com.rlid.utils.json.JsonBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.ritu.cherry.domain.BaseEntity;
import com.ritu.cherry.domain.${className};
import com.ritu.cherry.domain.vo.${className}Vo;
import com.ritu.cherry.repository.${className}Repository;
import com.ritu.cherry.util.base.BaseEntityVo;
import com.ritu.cherry.util.base.BaseRepository;
import com.ritu.cherry.util.base.BaseService;
import com.ritu.cherry.util.base.BaseTableDto;

/**
 * ${table.columns[0].columnAlias}业务层实现类
 */
@Service
//@Transactional
public class ${className}ServiceImpl  extends BaseService<${className},${className}Vo,String> {

	@Autowired
	private ${className}Repository ${classNameLower}Repository;


	@Override
	protected BaseRepository getRepository() {
		return ${classNameLower}Repository;
	}
	
	
}
