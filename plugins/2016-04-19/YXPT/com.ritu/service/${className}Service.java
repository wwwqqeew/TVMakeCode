package com.ritu.service;
<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ritu.dao.${className}Dao;
import com.ritu.model.${className};


@Service
public class ${className}Service  {

	
	private ${className}Dao ${classNameLower}Dao;

	@Autowired
	public void set${className}Dao(${className}Dao ${classNameLower}Dao) {
		this.${classNameLower}Dao =${classNameLower}Dao;
	}

}
