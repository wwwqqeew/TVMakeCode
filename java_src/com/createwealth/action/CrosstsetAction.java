//package com.createwealth.action;
package com.createwealth.action;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import cn.org.rapid_framework.beanutils.BeanUtils;

import com.opensymphony.xwork2.Preparable;
import com.opensymphony.xwork2.ModelDriven;

import java.util.*;

import javacommon.base.*;
import javacommon.util.*;

import cn.org.rapid_framework.util.*;
import cn.org.rapid_framework.web.util.*;
import cn.org.rapid_framework.page.*;
import cn.org.rapid_framework.page.impl.*;

import com.createwealth.model.*;
import com.createwealth.dao.*;
import com.createwealth.service.*;

 


public class CrosstsetAction extends BaseStruts2Action implements Preparable,ModelDriven{
	//默认多列排序,example: username desc,createTime asc
	protected static final String DEFAULT_SORT_COLUMNS = null; 
	
	//forward paths
	protected static final String LIST_JSP= "/Crosstset/list.jsp";
	protected static final String CREATE_JSP = "/Crosstset/create.jsp";
	protected static final String EDIT_JSP = "/Crosstset/edit.jsp";
	protected static final String SHOW_JSP = "/Crosstset/show.jsp";
	//redirect paths,startWith: !
	protected static final String LIST_ACTION = "!/Crosstset/list.do";
	
	private CrosstsetManager crosstsetManager;
	//private BasedataManager basedataManager;//基础数据总类
	//基础数据类
	
	private Crosstset crosstset;
	java.lang.Integer id = null;
	private String[] items;
	//基础数据LIST

	public void prepare() throws Exception {
		if (isNullOrEmptyString(id)) {
			crosstset = new Crosstset();
		} else {
			crosstset = (Crosstset)crosstsetManager.getById(id);
		}
		basedata();//刷新基础数据列表
	}

	/** 增加setXXXX()方法,spring就可以通过autowire自动设置对象属性,注意大小写 */
	public void setCrosstsetManager(CrosstsetManager manager) {
		this.crosstsetManager = manager;
	}	

	//基础数据类SET方法
	
	public Object getModel() {
		return crosstset;
	}
	
	public void setSeqNo(java.lang.Integer val) {
		this.id = val;
	}

	public void setItems(String[] items) {
		this.items = items;
	}
	//基础数据List的GET方法
	
	/** 执行搜索 */
	public String list() {
		PageRequest<Map> pageRequest = newPageRequest(DEFAULT_SORT_COLUMNS);
		//pageRequest.getFilters().put("key",value);     //add custom filter
		
		Page page = crosstsetManager.findByPageRequest(pageRequest);
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
		crosstsetManager.save(crosstset);
		return LIST_ACTION;
	}
	
	/**进入更新页面*/
	public String edit() {
		return EDIT_JSP;
	}
	
	/**保存更新对象*/
	public String update() {
		crosstsetManager.update(this.crosstset);
		return LIST_ACTION;
	}
	
	/**删除对象*/
	public String delete() {
		for(int i = 0; i < items.length; i++) {
			Hashtable params = HttpUtils.parseQueryString(items[i]);
			java.lang.Integer id = new java.lang.Integer((String)params.get("seqNo"));
			crosstsetManager.removeById(id);
		}
		return LIST_ACTION;
	}

	/**基础数据列表*/
	public void basedata() {
		//刷新基础数据LIST
	}

}
