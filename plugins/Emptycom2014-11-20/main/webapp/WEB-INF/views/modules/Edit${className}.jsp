<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#include "/java_util.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first> 
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>增加${table.columns[0].columnAlias}</title>
<script type="text/javascript" src="/static/jquery/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="/static/jquery-json/jquery.json-2.4.min.js"></script>
<#assign dt = 0>
<#list table.columns as column>
<#if dt==0>
<@htm_css_js column=column function="datetime" theT=dt>
<link type="text/css" rel="stylesheet" href="/static/My97DatePicker/skin/WdatePicker.css" />
<script src="/static/My97DatePicker/WdatePicker.js" type="text/javascript"></script>
<#assign  dt=1>
</@htm_css_js>
</#if >
</#list>
<script type="text/javascript" src="/static/app/modules/edit${classNameLower}.js"></script>
<link type="text/css" rel="stylesheet" href="/static/styles/iframe.css" />
<script src="/static/jquery-validation/checkAfter.js" type="text/javascript"></script>
<script src="/static/jqueryMy/IframeAction.js" type="text/javascript"></script>
<script type="text/javascript" src="/static/jqueryMy/jqueryMy.js"></script>
</head>
<body>
	<form id='edit-${classNameLower}-form' class="iframe-form">
		<table class='iframe-table' align="center">
				<#list table.columns as column>
				 <#if !column.pk>
				  <@htm column=column function="radio_df">
				  	<tr>
					 <td  class="title">${htm_notes(column)}：</td>
					 <td width='345'><input name="${column.columnNameLower}" type="radio" class="${column.columnNameLower}" value="30" />30秒 </td>
					 <td class='title-td'><input name="${column.columnNameLower}" type="radio" class="${column.columnNameLower}" value="other" />自定义 <input onKeyUp="clearNoNum(event,this)" onBlur="checkNum(this)" class="${column.columnNameLower}-input text-input" value="0" size="8"></td>
				    </tr>
				  </@htm>
				  
				 <@htm column=column function="radio">
				 <tr>
					 <td class='title-td' align='right' width='180'>${htm_notes(column)}：</td>
					 <td width='345'><input name="${column.columnNameLower}" type="radio" class="${column.columnNameLower}" value="true" />是</td>
					 <td width='345'><input name="${column.columnNameLower}" type="radio" class="${column.columnNameLower}" value="false" />否</td>
				 </tr>
				 </@htm>
				 <@htm column=column function="datetime">
					<tr>
					<td class="title"><#if !column.null><span class="iframe-not-null">*</span></#if>${htm_notes(column)}：</td>
					<td class="td-input"><input class='text-input ${column.columnNameLower} <#if !column.null>required</#if> iframe-radius Wdate' style="width: 345px;"  onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})"></td>
					<td></td>
					</tr>
				</@htm>
				<@htm column=column function="select">
				<tr>
				<td class="title"><#if !column.null><span class="iframe-not-null">*</span></#if>${htm_notes(column)}：</td>
					<td class="td-select"><select class="${column.columnNameLower} <#if !column.null>required</#if> iframe-radius iframe-select" style="width: 345px;">
					<option value=""></option>
					<option value="打印">打印</option>
					<option value="不打印">不打印</option>
					</select></td>
				</tr>
				</@htm>
				 <@htm column=column function="input">
				 <tr>
				 	<td class="title"><#if !column.null><span class="iframe-not-null">*</span></#if>${htm_notes(column)}：</td>
				 	<td  class="td-input"><input  value='${'$'}{${classNameLower}.${column.columnNameLower}}' class='text-input ${column.columnNameLower} <#if !column.null>required</#if> iframe-radius' name='${column.columnNameLower}' ${htm_nameCheck(column)} style="width: 345px;" ></td>
					<td></td>
				</tr>
				</@htm>
				<@htm column=column function="textarea">
				<tr>
					<td valign="top" class="title"><#if !column.null><span class="iframe-not-null">*</span></#if>${htm_notes(column)}：</td>
					<td  class="td-input"><textarea value='${'$'}{${classNameLower}.${column.columnNameLower}}' class='text-input ${column.columnNameLower} <#if !column.null>required</#if> iframe-radius ' name="${column.columnNameLower}" ${htm_nameCheck(column)} style="width: 345px; height: 40px; font-size:14px;!important;"></textarea></td>
				</tr>
				</@htm>
				 </#if>
				</#list>
				</table>
		<table class="iframe-btn-table" align="center" cellspacing="1" cellpadding="0" width="585">
		<tr class="iframe-button-tr">
					<td align="center"><input value="保存" class='iframe-button save-edit iframe-radius'
						type="button"></input><input type="hidden" name='id' value='${'$'}{${classNameLower}.<@getTablePk/>}' class='<@getTablePk/>' ></td>
					<td align="center"><input value="取消" class='iframe-button cancel-edit iframe-radius'
						type="button"></input></td>
				<td></td>
				</tr>
		</table>
	</form>
</body>
</html>