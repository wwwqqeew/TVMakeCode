<#include "/custom.include">
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
/**
 * ${table.columns[0].columnAlias}管理
 */
KISSY.use([ 'node', 'io', 'base','json','bui/select','bui/grid','bui/data','bui/toolbar','bui/overlay','bui/form'],function(S,Node,IO,Base,Json,Select,Grid,Data,Toolbar,Overlay,Form){
	var $ = Node.all;
	
	var columns = [
	<#list table.columns as column>
	<#if !column.pk>
		<#if !isforeignKey(column)>
			<#if (column.sqlTypeName == "datetime")>
	 {
			title : '${htm_notes(column)}',
			dataIndex :'${column.columnNameLower}',
			elCls:'center',
			sortable : false
		},
			<#else>
	 {
			title : '${htm_notes(column)}',
			dataIndex :'${column.columnNameLower}',
			elCls:'center',
			sortable : false
		},
			</#if>
		<#else>
		</#if>
	</#if>
</#list>
	{
		title : '创建时间',
		dataIndex : 'createTime',
		elCls:'center',
		sortable : false,
		renderer : Base.rProxy(function(value,obj){
			return FormatDate(value);
		},this)
	},{
		title : '禁用状态',
		dataIndex : 'state',
		elCls:'center',
		sortable : false,
		renderer : Base.rProxy(function(value,obj){
			if(value == 1){
				return "<span class='font-13-3'>启用</span>";
			}
			return "<span class='font-13-2'>禁用</span>";
			
		},this)
	}];
	//var parameterData = {}
	var module = new ModuleUtil('${table.columns[0].columnAlias}','${classNameLower}managerment',columns);
	var Init = function(){
		module.getList();
		module.addItem();
		module.deleteItem();
		module.BtnOption();
	}
	var init = new Init();

});