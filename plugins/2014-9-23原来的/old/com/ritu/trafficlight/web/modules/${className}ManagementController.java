<#include "/custom.include">
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.trafficlight.web.modules;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ritu.trafficlight.entity.${className};
import com.ritu.trafficlight.entity.${className}Vo;
import com.ritu.trafficlight.service.modules.${className}Service;
import com.ritu.trafficlight.utils.JsonBuilder;

@Controller
@RequestMapping(value = "/${classNameLower}management")
public class ${className}ManagementController {
	
	private ${className}Service ${classNameLower}Service;

	@Autowired
	public void set${className}Service(${className}Service ${classNameLower}Service) {
		this.${classNameLower}Service = ${classNameLower}Service;
	}

	@RequestMapping(method = RequestMethod.POST)
	public String html(Model model) {
		return "/modules/${className}Management";
	}

	@ResponseBody
	@RequestMapping(value = "delete", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
	public String delete(@RequestParam(value = "id", required = false) Long id) {
		${classNameLower}Service.delete(id);
		return JsonBuilder.toJson(true);
	}

	@ResponseBody
	@RequestMapping(value = "deleteByIdList", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
	public String deleteByIds(
			@RequestParam(value = "idList", required = false) String idList) {
		String[] theIds = idList.split(",");
		for (String x : theIds) {
			${classNameLower}Service.delete(Long.valueOf(x.trim()));
		}
		return JsonBuilder.toJson(true);
	}
	
	@ResponseBody
	@RequestMapping(value = "findByPropertys", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
	public String findByNumberAndLoginNameAndRole_id(@RequestBody ${className}Vo ${classNameLower}Vo) {
		
		return JsonBuilder.toJson(true,${classNameLower}Service.findByPropertysList(${classNameLower}Vo.getPage(), ${classNameLower}Vo),${classNameLower}Vo.getPage(),${classNameLower}Service.findByPropertysCount(${classNameLower}Vo.getPage(), ${classNameLower}Vo));
	}
	
	@ResponseBody
	@RequestMapping(value = "search", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
	public String search(
			@RequestParam(value = "page", required = false) int page) {
		Page<${className}> results = ${classNameLower}Service.findAll(page);
		return JsonBuilder.toJson(true, results.getContent(), page,
				results.getTotalPages());
	}
}
