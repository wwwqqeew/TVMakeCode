<#include "/custom.include">
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%-- <div class='item-content-header'>
	<div class='item-content-header-tab'>
		<#list table.columns as column>
		<#if !column.pk>
		<#if (column.sqlTypeName == "datetime")>
		${htm_notes(column)} <input class="sch-${column.columnNameLower} Wdate" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" type="text" >
		${htm_notes(column)}最大 <input class="sch-${column.columnNameLower}_max Wdate" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" type="text" >
		<#else>
		${htm_notes(column)} <input class="sch-${column.columnNameLower} " type="text" >
		</#if>
		</#if></#list>
	</div>
	<div class='item-content-header-operate'>
		&nbsp;&nbsp;<input class="sch-p-${classNameLower}" type="button" value=" 查询 ">
	</div>
</div> --%>
<div class='item-content-header'>
	<div class='item-content-header-main-x'>
		<div class='item-content-header-main'>
			<form class="FindData-form">
			<div class="header-bg-center"></div>
			<div class="header-bg-left header-bg-side"></div>
			<div class="header-bg-right header-bg-side"></div>
			<div class='item-content-header-tab'>
			<#list table.columns as column>
			<#if !column.pk>
			<#if (column.sqlTypeName == "datetime")>
			${htm_notes(column)} <input class="sch-${column.columnNameLower} Wdate" name="${column.columnNameLower}"  onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" type="text" >
			${htm_notes(column)}最大 <input class="sch-${column.columnNameLower}_max Wdate" name="${column.columnNameLower}_max" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" type="text" >
			<#else>
			${htm_notes(column)} <input class="sch-${column.columnNameLower} " name="${column.columnNameLower}" type="text" >
			</#if>
			</#if></#list>
			</div>
		<div class='item-content-header-operate'>
			&nbsp;&nbsp;<input class="sch-p btn-find btn-base-style" type="button" value=" 查询 ">
		</div>
		</form>
		</div>
	</div>
</div>
<div class="item-but">
	<div class='item-result-operate-container'>
		<div class='item-result-operate-left'>
			<label class="Nolabel "><input class="modify-operate btn-base-style" type="button" value=" 修改 "></label>
			<label><input class="delete-operate btn-base-style" type="button" value=" 删除 "></label>
			<label><input class="add-${classNameLower} btn-base-style" type="button" value=" 添加 "></label>
		</div>
		<div class='item-result-operate-right'>
		</div>
	</div>
</div>
<%-- <div class="item-but">
	<div class='item-result-operate-container'>
		<div class='item-result-operate-left'>
			<label class="Nolabel "><input class="modify-operate" type="button" value=" 修改 "></label>
			<label><input class="delete-operate" type="button" value=" 删除 "></label>
			<label><input class="add-${classNameLower}" type="button" value=" 添加 "></label>
		</div>
		<div class='item-result-operate-right'>
			
		</div>

	</div>
</div> --%>
<div class='item-content-append-container-y'>
	<div class='item-content-append-container-x'>
		<div class='item-content-append-container'>
			
			<div class='item-result '>
				<div class='item-result-show'>
				<table cellspacing="0" cellpadding="0" class="${classNameLower}-table">
						<!-- 	<thead>
							<tr>
								<th class="th-short">编号</th>
								<th class="th-short"><label><input class="all-select" type="checkbox" ></label></th>
									<#list table.columns as column>
									<#if !column.pk>
									<th>${htm_notes(column)}</th>
									</#if></#list>
								<th>操作</th>
							</tr>
						</thead>
						<tbody>-->
						</tbody>
					</table>
				</div>
				<div class='item-result-operate'>
					<div class='item-result-pages' id='item-result-pages'></div>
				</div>
				
			</div>
			
		</div>
	</div>
</div>
<script type="text/javascript" src="./static/app/modules/${classNameLower}management.js"></script>