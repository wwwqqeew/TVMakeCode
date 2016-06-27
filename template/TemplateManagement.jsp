<!-- <#include "/custom.include">
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do"> -->
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<html>
<head>
    <title>[例子]管理</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/css.css">
    
 <style type="text/css">
	a{text-decoration:none;background:none;}
	a:hover{background:#CCCCCC; }
	.newTr{
	 background-color: #f4f4f4 !important;
	 background-image: linear-gradient(to bottom, #f8f8f8, #eeeeee) !important;
	 background-repeat: repeat-x !important;
	 }
	 .table-bordered-diy{
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-collapse: separate;
    border-color: #dddddd #dddddd #dddddd -moz-use-text-color;
    border-image: none;
    border-radius: 3px;
    border-style: solid solid solid none;
    border-width: 1px 1px 1px 0;
}
</style>
</head>
<body>


<div class = "main" id="a-demo-Main" >
 	<div class = "search-container">
 	<form class="FindData-form" id = "FindData-form">
 	<div style='width: 160px;margin-left: auto;margin-right: auto;'>
 		<!-- <div class=" search-top">[例子]管理</div> -->
 		<!-- <#list table.columns as column>
			<#if !column.pk>
				<#if !isforeignKey(column)>
					<#if (column.sqlTypeName == "datetime")> -->
					<div class = "form-group">
					<label for="exampleInputEmail1">[时间]</label>
			    	<input type="text" class="form-control Wdate" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" id="a-inputDate-" name='a-inputDate-' placeholder="[输入框]">
					</div>
					<div class = "form-group">
					<label for="exampleInputEmail1">[时间]最大</label>
			    	<input type="text" class="form-control Wdate" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" id="a-inputDate-_max" name='a-inputDate-_max' placeholder="[时间]最大">
					</div>
					<!-- <#else> -->
					<div class = "form-group">
					<label for="exampleInputEmail1">[输入框]</label>
			    	<input type="text" class="form-control" id="a-input-" name='a-input-' placeholder="[输入框]">
					</div>
					<!-- </#if>
				<#else> -->
				<div class = "form-group">[外键]:<select class="a[pk]  search-input" name="a[pk]"  ></select></div>
				<!-- </#if>
			</#if>
			</#list> -->
		<div class = "form-group" style='text-align: center; position: relative;top: 10px;'>
			<input type="submit" style=" width: 100px;" class="btn search-btn btn-base" value="查询">
		</div>
		</div>
		</form>
 	</div>
 	
 <div class = "item-list">
 <div class = "item-btn" style='line-height: 50px;height: 50px;'>
 <shiro:hasPermission name="user:create">
   <div class = "btn-container">
     	<button type="button" class="btn btn-info  add-demo">添加</button>
     </div>
  
</shiro:hasPermission>
 <shiro:hasPermission name="user:update">
     <div class = "btn-container">
     	<button type="button" class="btn btn-info  edit-operate">编辑</button>
     </div>
 </shiro:hasPermission>

 <shiro:hasPermission name="user:delete">
       <div class = "btn-container">
     	<button type="button" class="btn btn-info  delete-operate">删除</button>
     </div>
 </shiro:hasPermission>
 
  <shiro:hasPermission name="user:show">
     <div class = "btn-container">
     	<button type="button" class="btn btn-info  show-operate">查看</button>
     </div>
 </shiro:hasPermission>
 
   <shiro:hasPermission name="user:excel">
     <div class = "btn-container">
     	<button type="button" class="btn btn-info  export-Excel">导出</button>
     </div>
 </shiro:hasPermission>

   <shiro:hasPermission name="user:excel">
     <div class = "btn-container">
     	<button type="button" class="btn btn-info  imPort-Excel">导入</button>
     </div>
 </shiro:hasPermission>

 </div>
	<table cellspacing="0" cellpadding="0" class="demo-table  table-bordered-diy" id="a-demo--table">
			<thead>
				<tr class='newTr'>
					<th class="th-short newTr"><label><input class="all-select" type="checkbox" ></label></th>
					<th class="th-short newTr">编号</th>
						<!-- <#list table.columns as column>
							<#if !column.pk> -->
							<th class='newTr'>[输入框]</th>
							<!-- </#if>
						</#list> -->
					<th class='newTr'>操作</th>
				</tr>
			</thead>
			<tbody ></tbody>
		</table>
	<div class='item-result-operate'>
		<div class='item-result-pages newTr' id='item-result-pages'></div>
	</div>
 </div>
	<div class="yemian1" id="newpage1" ></div>
	<div class="export-main"></div>
</div>