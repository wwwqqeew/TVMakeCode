<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#include "/java_util.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.trafficlight.web.modules;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ritu.trafficlight.entity.${className};
import com.ritu.trafficlight.entity.Test;
import com.ritu.trafficlight.entity.User;
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
	 /**
	  * 同名检测
	  * @param ${column.columnNameLower} 要检测的名字
	  * @return 检测结果
	  */
	@ResponseBody
	@RequestMapping(value = "checkname", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
	public String countBy${column.columnName}(@RequestParam(value = "${column.columnNameLower}", required = false) String ${column.columnNameLower}) {
		return JsonBuilder.toJson(true,${classNameLower}Service.countBy${column.columnName}(${column.columnNameLower}));
	}
	 </@java_my>
	 </#if>
	</#list>
	
	/**
	 * 更新
	 * @param ${classNameLower} 要更新的对象
	 * @return 更新结果
	 */
	@ResponseBody
	@RequestMapping(value = "update", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
	public String update(@RequestBody ${className} ${classNameLower}) {
		${classNameLower}Service.update(${classNameLower});
		return JsonBuilder.toJson(true);
	}

	/**
	 * 根据ID查找 
	 * @param id ID
	 * @return 查找结果
	 */
	@RequestMapping(value = "findOneById", method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
	public String findOneById(@RequestParam(value = "id", required = false) <@getTablePkType/> id,ModelMap model) {
		${className} ${classNameLower} = new ${className}();
		${classNameLower} = ${classNameLower}Service.findById(id);
		model.addAttribute("${classNameLower}",${classNameLower});
		return "/modules/Edit${className}";
	}
	
	/**
	 * 保存对象
	 * @param ${classNameLower} 要保存的对象
	 * @return 保存结果
	 */
	@ResponseBody
	@RequestMapping(value = "newone", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
	public String newone(@RequestBody ${className} ${classNameLower}) {
		${classNameLower}Service.add(${classNameLower});
		return JsonBuilder.toJson(true);
	}
	
	/**
	 * 显示信息界面
	 * @param User.id 
	 * @return 结果
	 */
	@RequestMapping(value = "show")
	public String show(@RequestParam("id")  <@getTablePkType/> id,ModelMap model) {
		${className} ${classNameLower} = ${classNameLower}Service.findById(id);;
		model.addAttribute("${classNameLower}",${classNameLower});
		return "/modules/Show${className}";
	}
	@Autowired
	public void set${className}Service(${className}Service ${classNameLower}Service) {
		this.${classNameLower}Service = ${classNameLower}Service;
	}
}
