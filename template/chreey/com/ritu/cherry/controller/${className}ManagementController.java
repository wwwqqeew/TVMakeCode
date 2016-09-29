<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.cherry.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ritu.cherry.domain.BaseEntity;
import com.ritu.cherry.domain.${className};
import com.ritu.cherry.domain.vo.${className}Vo;
import com.ritu.cherry.service.impl.${className}ServiceImpl;
import com.ritu.cherry.util.base.BaseControl;
import com.ritu.cherry.util.base.BaseEntityVo;
import com.ritu.cherry.util.base.BaseService;
import com.ritu.cherry.util.base.BaseTableDto;

@RestController
@RequestMapping(value = "/${classNameLower}managerment")
public class ${className}ManagementController extends BaseControl<${className},${className}Vo,Long>{

	@Autowired
	private ${className}ServiceImpl ${classNameLower}ServiceImpl;


		@Override
		protected BaseService getEntityService() {
			// TODO Auto-generated method stub
			return ${classNameLower}ServiceImpl;
		}



		@Override
		protected BaseEntityVo getBaseEntityVo() {
			// TODO Auto-generated method stub
			return new ${className}Vo();
		}

}
