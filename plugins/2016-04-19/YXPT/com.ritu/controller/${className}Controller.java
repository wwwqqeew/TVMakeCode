package com.ritu.controller;
<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ritu.service.${className}Service;

@Controller
@RequestMapping("/${classNameLower}")
public class ${className}Controller {

	private ${className}Service ${classNameLower}Service;
	
	@Autowired
	public void set${className}Service(${className}Service ${classNameLower}Service) {
		this.${classNameLower}Service =${classNameLower}Service;
	}


	

}
