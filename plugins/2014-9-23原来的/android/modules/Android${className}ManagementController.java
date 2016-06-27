<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
package com.ritu.trafficlight.android.modules;

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

/**
 * @function android${table.columns[0].columnAlias}控制层
 * @author cheng.G.Y
 * @date ${table.columns[0].nowDate}
 * @latitude 1.0
 */
@Controller
@RequestMapping(value = "/android${classNameLower}management")
public class Android${className}ManagementController {
	
	private ${className}Service ${classNameLower}Service;//业务层对象

	@Autowired
	public void set${className}Service(${className}Service ${classNameLower}Service) {
		this.${classNameLower}Service = ${classNameLower}Service;
	}


	/**
	 * 根据ID删除
	 * @param id ID
	 * @return 删除结果
	 */
	@ResponseBody
	@RequestMapping(value = "delete",  produces = "text/html;charset=UTF-8")
	public String delete(@RequestParam(value = "id", required = false) Long id) {
		${classNameLower}Service.delete(id);
		return JsonBuilder.toJson(true);
	}

	/**
	 * 根据ID列表删除
	 * @param idList ID列表 (String)
	 * @return 删除结果
	 */
	@ResponseBody
	@RequestMapping(value = "deleteByIdList",  produces = "text/html;charset=UTF-8")
	public String deleteByIds(
			@RequestParam(value = "idList", required = false) String idList) {
		String[] theIds = idList.split(",");
		for (String x : theIds) {
			${classNameLower}Service.delete(Long.valueOf(x.trim()));
		}
		return JsonBuilder.toJson(true);
	}
	
	/**
	 * 根据页面类属性查询（多属性查询）
	 * @return 查询结果（Page对象列表）
	 */
	@ResponseBody
	@RequestMapping(value = "findByPropertys",  produces = "text/html;charset=UTF-8")
	public String findByNumberAndLoginNameAndRole_id(@RequestBody ${className}Vo ${classNameLower}Vo) {
		
		return JsonBuilder.toJson(true,${classNameLower}Service.findByPropertysList(${classNameLower}Vo.getPage(), ${classNameLower}Vo),${classNameLower}Vo.getPage(),${classNameLower}Service.findByPropertysCount(${classNameLower}Vo.getPage(), ${classNameLower}Vo));
	}
	
	/**
	 * 根据页码查询对象列表
	 * @param page 页码
	 * @return 查询结果(Page对象列表)
	 */
	@ResponseBody
	@RequestMapping(value = "search",  produces = "text/html;charset=UTF-8")
	public String search(
			@RequestParam(value = "page", required = false) int page) {
		Page<${className}> results = ${classNameLower}Service.findAll(page);
		return JsonBuilder.toJson(true, results.getContent(), page,
				results.getTotalPages());
	}
	
	/**
	 * 更新
	 * @param ${classNameLower} 要更新的对象
	 * @return 更新结果
	 */
	@ResponseBody
	@RequestMapping(value = "update",  produces = "text/html;charset=UTF-8")
	public String update(@RequestBody ${className} ${classNameLower}) {
		${classNameLower}Service.update(${classNameLower});
		return JsonBuilder.toJson(true);
	}

	/**
	 * 根据ID查找 
	 * @param id ID
	 * @return 查找结果
	 */
	@ResponseBody
	@RequestMapping(value = "findOneById",  produces = "text/html;charset=UTF-8")
	public String findOneById(@RequestParam(value = "id", required = false) Long id) {
		return JsonBuilder.toJson(true, ${classNameLower}Service.findById(id));
	}

	/**
	 * 保存对象
	 * @param ${classNameLower} 要保存的对象
	 * @return 保存结果
	 */
	@ResponseBody
	@RequestMapping(value = "newone",  produces = "text/html;charset=UTF-8")
	public String newone(@RequestBody ${className} ${classNameLower}) {
		${classNameLower}Service.add(${classNameLower});
		return JsonBuilder.toJson(true);
	}
}
