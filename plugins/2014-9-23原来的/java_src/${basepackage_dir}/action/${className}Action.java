<#include "/custom.include">
<#include "/java_copyright.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
//package ${basepackage}.action;
package ${basepackage}.action;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import cn.org.rapid_framework.beanutils.BeanUtils;

import com.opensymphony.xwork2.Preparable;
import com.opensymphony.xwork2.ModelDriven;

<#include "/java_imports.include">

public class ${className}Action extends BaseStruts2Action implements Preparable,ModelDriven{
	//默认多列排序,example: username desc,createTime asc
	protected static final String DEFAULT_SORT_COLUMNS = null; 
	
	//forward paths
	protected static final String LIST_JSP= "${jspFileBasePath}/list.jsp";
	protected static final String CREATE_JSP = "${jspFileBasePath}/create.jsp";
	protected static final String EDIT_JSP = "${jspFileBasePath}/edit.jsp";
	protected static final String SHOW_JSP = "${jspFileBasePath}/show.jsp";
	//redirect paths,startWith: !
	protected static final String LIST_ACTION = "!${actionBasePath}/list.${actionExtension}";
	
	private ${className}Manager ${classNameLower}Manager;
	//private BasedataManager basedataManager;//基础数据总类
	//基础数据类
	<#list table.columns as column>
	<#if !column.htmlHidden>
		<#if column.size == 46||column.size == 45||column.size == 44>
	private ${column.columnName}codeManager ${column.columnNameLower}codeManager;
		</#if>
	</#if>
	</#list>
	
	private ${className} ${classNameLower};
	<#list table.compositeIdColumns as column>
	${column.javaType} id = null;
	</#list>
	private String[] items;
	//基础数据LIST
	<#list table.columns as column>
	<#if !column.htmlHidden>
		<#if column.size == 46||column.size == 45||column.size == 44>
	private List ${column.columnNameLower}List;
		</#if>
	</#if>
	</#list>

	public void prepare() throws Exception {
		if (isNullOrEmptyString(id)) {
			${classNameLower} = new ${className}();
		} else {
			${classNameLower} = (${className})${classNameLower}Manager.getById(id);
		}
		basedata();//刷新基础数据列表
	}

	/** 增加setXXXX()方法,spring就可以通过autowire自动设置对象属性,注意大小写 */
	public void set${className}Manager(${className}Manager manager) {
		this.${classNameLower}Manager = manager;
	}	

	//基础数据类SET方法
	<#list table.columns as column>
	<#if !column.htmlHidden>
		<#if column.size == 46||column.size == 45||column.size == 44>
	public void set${column.columnName}codeManager(${column.columnName}codeManager ${column.columnNameLower}codeManager) {
		this.${column.columnNameLower}codeManager = ${column.columnNameLower}codeManager;
	}
		</#if>
	</#if>
	</#list>
	
	public Object getModel() {
		return ${classNameLower};
	}
	
	<#list table.compositeIdColumns as column>
	public void set${column.columnName}(${column.javaType} val) {
		this.id = val;
	}
	</#list>	

	public void setItems(String[] items) {
		this.items = items;
	}
	//基础数据List的GET方法
	<#list table.columns as column>
	<#if !column.htmlHidden>
		<#if column.size == 46||column.size == 45||column.size == 44>
	public List get${column.columnName}List() {
		return this.${column.columnNameLower}List;
	}
		</#if>
	</#if>
	</#list>
	
	/** 执行搜索 */
	public String list() {
		PageRequest<Map> pageRequest = newPageRequest(DEFAULT_SORT_COLUMNS);
		//pageRequest.getFilters().put("key",value);     //add custom filter
		
		Page page = ${classNameLower}Manager.findByPageRequest(pageRequest);
		savePage(page,pageRequest);
		return LIST_JSP;
	}
	
	/** 查看对象*/
	public String show() {
		return SHOW_JSP;
	}
	
	/** 进入新增页面*/
	public String create() {
		return CREATE_JSP;
	}
	
	/** 保存新增对象 */
	public String save() {
		${classNameLower}Manager.save(${classNameLower});
		return LIST_ACTION;
	}
	
	/**进入更新页面*/
	public String edit() {
		return EDIT_JSP;
	}
	
	/**保存更新对象*/
	public String update() {
		${classNameLower}Manager.update(this.${classNameLower});
		return LIST_ACTION;
	}
	
	/**删除对象*/
	public String delete() {
		for(int i = 0; i < items.length; i++) {
			Hashtable params = HttpUtils.parseQueryString(items[i]);
			<#if table.compositeId>
			${className}Id id = (${className}Id)copyProperties(${className}Id.class,params);
			<#else>
				<#list table.compositeIdColumns as column>
			${column.javaType} id = new ${column.javaType}((String)params.get("${column.columnNameLower}"));
				</#list>
			</#if>
			${classNameLower}Manager.removeById(id);
		}
		return LIST_ACTION;
	}

	/**基础数据列表*/
	public void basedata() {
		//刷新基础数据LIST
		<#list table.columns as column>
		<#if !column.htmlHidden>
			<#if column.size == 46||column.size == 45||column.size == 44>
		${column.columnNameLower}List = ${column.columnNameLower}codeManager.findAll();
			</#if>
		</#if>
		</#list>
	}

}
