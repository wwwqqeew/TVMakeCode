<#include "/custom.include">
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.trafficlight.web.modules;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ritu.trafficlight.entity.${className};
import com.ritu.trafficlight.service.modules.${className}Service;
import com.ritu.trafficlight.utils.JsonBuilder;

@Controller
@RequestMapping(value = "/edit${classNameLower}")
public class Edit${className}Controller {
	
	private ${className}Service ${classNameLower}Service;

	@RequestMapping(method = RequestMethod.POST)
	public String html(Model model) {
		return "/modules/Edit${className}";
	}

	@RequestMapping(method = RequestMethod.GET)
	public String htmlGet(Model model) {
		return "/modules/Edit${className}";
	}

	<#list table.columns as column>
	 <#if !column.pk>
	 <@java_my column=column function="sm">
	@ResponseBody
	@RequestMapping(value = "checkname", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
	public String countBy${column.columnName}(@RequestParam(value = "${column.columnNameLower}", required = false) String ${column.columnNameLower}) {
		return JsonBuilder.toJson(true,${classNameLower}Service.countBy${column.columnName}(${column.columnNameLower}));
	}
	 </@java_my>
	 </#if>
	</#list>
	
	@ResponseBody
	@RequestMapping(value = "update", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
	public String update(@RequestBody ${className} ${classNameLower}) {
		${classNameLower}Service.update(${classNameLower});
		return JsonBuilder.toJson(true);
	}

	@ResponseBody
	@RequestMapping(value = "findOneById", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
	public String findOneById(@RequestParam(value = "id", required = false) Long id) {
		${className} ${classNameLower} = new ${className}();
		${classNameLower} = ${classNameLower}Service.findById(id);
		return JsonBuilder.toJson(true, ${classNameLower});
	}

	@ResponseBody
	@RequestMapping(value = "newone", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
	public String newone(@RequestBody ${className} ${classNameLower}) {
		${classNameLower}Service.add(${classNameLower});
		return JsonBuilder.toJson(true);
	}
	
	@Autowired
	public void set${className}Service(${className}Service ${classNameLower}Service) {
		this.${classNameLower}Service = ${classNameLower}Service;
	}
}
