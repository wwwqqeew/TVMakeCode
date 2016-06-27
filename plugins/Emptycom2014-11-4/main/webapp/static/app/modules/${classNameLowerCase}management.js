<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/java_util.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first> 
(function($, exports) {
	
	<#assign dt=30 baseH=136>
	<#list table.columns as column>
	<#if !column.pk>
	<#assign baseH=(dt+baseH)>
	</#if >
	</#list>

	var module = new exports.Module(exports.baseSetting.getModule("${className}Management"));
	module.$content = module.item.con.$content;
	
	module.PopuWndHeight = ${baseH};
	module.PopuWndWidth = 726;
	module.PopuWndURL = "edit${classNameLower}";
	module.PopuWndTitle = "${table.columns[0].columnAlias}";
	
	module.showData = function(data) {
		var newDate = {id:"<@getTablePk/>",
				showTable:[{tltle:"编号",value:"1",initHeartHtml:"class='th-short show-entity'",initBodyHtml:"class='show-entity'"},
				<#list table.columns as column>
				<#if (!column.pk) && (column.columnNameLower!="remark")>
				{tltle:"${htm_notes(column)}",value:"${column}"},
				</#if>
				</#list>
				 {tltle:"操作",value:"0",btTdHtml:"<input class='modify' type='button'><input class='delete' type='button'>"}
				 ]};
		module.buildTable(data, newDate, "${classNameLower}-table");
	};
	

	module.init = function() {
		this.addOne("add-${classNameLower}");//添加窗口
		this.initRefresh();//刷新
		this.initPageButton();//分页按钮事件初始化
		this.requestData(1);//进入获取数据
		this.doAllSelect();//全选事件
		this.buttonUser();//批量删除事件
		this.schBtnClick("${classNameLower}management/findByPropertys");//模糊查询事件
	};
	
	module.refeshMe = function(){
		//this.requestData(1);
	};
	
	module.init();
	
	exports.baseSetting.getModule("${className}Management").module = module;

})(jQuery, window);