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
    <title>${table.columns[0].columnAlias}管理</title>
    <link rel="stylesheet" href="${r'${pageContext.request.contextPath}'}/static/css/css.css">
    
 <style type="text/css">
	a{text-decoration:none;background:none;}
	a:hover{background:#CCCCCC; }
</style>
</head>
<body>


<div class = "main" id="${classNameLower}Main" >
 	<div class = "search-container">
 	<form class="FindData-form" id = "FindData-form">
 		<div class=" search-top">${table.columns[0].columnAlias}管理</div>
 		<!-- <#list table.columns as column>
			<#if !column.pk>
				<#if !isforeignKey(column)>
					<#if (column.sqlTypeName == "datetime")> -->
					<div class = "searchItem">${htm_notes(column)}:<input type="text" class="search-input Wdate" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" name="${column.columnNameLower}"></div>
					<div class = "searchItem">${htm_notes(column)}最大:<input type="text" class="search-input Wdate" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" name="${column.columnNameLower}_max"></div>
					<!-- <#else> -->
					<div class = "searchItem">${htm_notes(column)}:<input type="text" class="search-input" name="${column.columnNameLower}"></div>
					<!-- </#if>
				<#else> -->
				<div class = "searchItem">${htm_notes(column)}:<select class="${column.columnNameLower}  search-input" name="${column.columnNameLower}"  ></select></div>
				<!-- </#if>
			</#if>
			</#list> -->
		<div class = "searchSub-item">
			<input type="button" class="search-btn btn-base" value="查询">
		</div>
		</form>
 	</div>
 	
 <div class = "item-list">
 <div class = "item-btn">
 <shiro:hasPermission name="user:create">
   <div class = "btn-container">
     	<a class='linkEdit btn-base add-demo'  href='javascript:void(0);'>添加</a>
     </div>
  
</shiro:hasPermission>
 <shiro:hasPermission name="user:update">
     <div class = "btn-container">
     	<a class='linkEdit btn-base edit-operate'  href='javascript:void(0);'>修改</a>
     </div>
 </shiro:hasPermission>

 <shiro:hasPermission name="user:delete">
       <div class = "btn-container">
     	<a class='linkEdit btn-base delete-operate' href='javascript:void(0);'>删除</a>
     </div>
 </shiro:hasPermission>

 <shiro:hasPermission name="user:update">
     <div class = "btn-container">
     	<a class='linkEdit btn-base' onclick='reset()' href='javascript:void(0);'>初始化密码</a>
     </div>
 </shiro:hasPermission>
 
  <shiro:hasPermission name="user:show">
     <div class = "btn-container">
     	<a class='linkEdit btn-base show-operate' href='javascript:void(0);'>查看</a>
     </div>
 </shiro:hasPermission>
 
   <shiro:hasPermission name="user:excel">
     <div class = "btn-container">
     	<a class='linkEdit btn-base  export-Excel' href='javascript:void(0);'>导出</a>
     </div>
 </shiro:hasPermission>

   <shiro:hasPermission name="user:excel">
     <div class = "btn-container">
     	<a class='linkEdit btn-base  imPort-Excel' href='javascript:void(0);'>导入</a>
     </div>
 </shiro:hasPermission>

 </div>
	<table cellspacing="0" cellpadding="0" class="demo-table" id="${classNameLower}-table">
			<thead>
				<tr>
					<th class="th-short"><label><input class="all-select" type="checkbox" ></label></th>
					<th class="th-short">编号</th>
						<!-- <#list table.columns as column>
							<#if !column.pk> -->
							<th>${htm_notes(column)}</th>
							<!-- </#if>
						</#list> -->
					<th>操作</th>
				</tr>
			</thead>
			<tbody ></tbody>
		</table>
	<div class='item-result-operate'>
		<div class='item-result-pages' id='item-result-pages'></div>
	</div>
 </div>
	<div class="yemian1" id="newpage1" ></div>
	<div class="export-main"></div>
</div>


<script type="text/javascript">
(function($, exports) {
	var TemplateModule = new exports.Modle("templateMain","templatemanagement","edittemplate","template-table","template");
	//debugger;
	//构建获取的每一行
	TemplateModule.buildHtmlBody = function(date){
		var htm = "";
    	for ( var i = 0; i < date.length; i++) {
    		htm += ("<tr data='' id='"+date[i].id+"' class='' ><td><input type='checkbox' class='checkboxId'></td><td class='show-entity'>"+(i+1)+"</td>"
	          	+ "<td>"+(date[i].input || "")+"</td>"
	          	+ "<td>"+(date[i].inputDate || "")+"</td>"
    		+"<td><input type='button' class='delete'></td></tr>");
		}
    	return htm;
	};
	TemplateModule.initExcel({url:"templatemanagement",findFrom:"FindData-form",mailClassName:"export-main",data:[
																			{title:"${htm_notes(column)}",value:"input"},
																			{title:"${htm_notes(column)}",value:"inputDate"},
		                                                                    ]});
	TemplateModule.init();
	
	window.Modules.setModle("template",TemplateModule);

})(jQuery, window);
</script>
</body>
</html>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 