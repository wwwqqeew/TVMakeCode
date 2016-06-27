<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first> 
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>查看${table.columns[0].columnAlias}</title>
 <script type="text/javascript" src="/static/jquery/jquery-1.9.1.min.js"></script>
<script type="text/javascript"
	src="/static/jquery-json/jquery.json-2.4.min.js"></script> 
 <script type="text/javascript" src="/static/app/modules/edit${classNameLower}.js"></script>  
 <link type="text/css" rel="stylesheet" href="/static/styles/home.css" />
<link type="text/css" rel="stylesheet" href="/static/styles/iframe.css" />
</head>
<body>

	        <form id='edit-user-form' class="iframe-form edit-form">
					<table class="iframe-table user-iframe edit-table" style="font-size: 16px" align="center"><!-- rules="rows" -->
						<tbody>
							<#list table.columns as column>
							 <#if !column.pk>
							  	<tr class="user-remove">
								 <td class="left">${htm_notes(column)}：</td>
								 <td class="right"><label style="width: 312px">${'$'}{entity.${column.columnNameLower}}</label></td>
							    </tr>
							<@htm column=column function="textarea">
							<tr class="user-remove">
								<td valign="top" class="left"><#if !column.null><span class="iframe-not-null">*</span></#if>${htm_notes(column)}：</td>
								<td  class="td-input"><div  style="width:440px;height:100px;overflow: auto;">${user.remark}</div></td>
							</tr>
							</@htm>
							 </#if>
							</#list>
						</tbody>
					</table>
					<div class="iframe-button-div" >
								<input value="取消" class='btn-base-style cancel-edit-${classNameLower}' />
								</div> 
				</form>    
</body>
</html>