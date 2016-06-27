<%@page import="${basepackage}.model.*" %>
<#include "/macro.include"/> 
<#include "/custom.include"/> 
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do"> 
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/commons/taglibs.jsp" %>
<%
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";
%>
<html>

<head>
	<%@ include file="/commons/meta.jsp" %>
	<base href="<%=basePath%>">
	<title><%=${className}.TABLE_ALIAS%>信息</title>
	<link rel="stylesheet"  href="<@jspEl 'ctx'/>/CSS/body.css" type="text/css"/>
</head>

<body>
<%@ include file="/commons/messages.jsp" %>
<br>
<s:form action="${actionBasePath}/list.${actionExtension}" method="get" theme="simple">
	
<#list table.columns as column>
<#if column.pk>
	<s:hidden name="${column.columnNameLower}" id="${column.columnNameLower}" value="%{model.${column.columnNameLower}}"/>
</#if>
</#list>
     <table width="100%">
		<tr class="header" >	
			<td align="center" valign="middle"><strong><%=${className}.TABLE_ALIAS%>查看 </strong></td>
		</tr>	
	</table>

	<table width="100%">
	<#list table.columns?chunk(2) as row>
		<tr>	
	<#list row as column>
	<#if !column.htmlHidden>
			<td align="right"><%=${className}.ALIAS_${column.constantName}%>：</td>	
			<td><#rt>
			<#compress>
			<#if column.isDateTimeColumn>
			&nbsp;<s:property value="%{model.${column.columnNameLower}String}" />
			<#else>
			<s:property value="%{model.${column.columnNameLower}}" />
			</#if>
			</#compress>
			<#lt></td>
	</#if>
	</#list>
		</tr>	
	</#list>	
	</table>
  
	<br/>
	<table width="100%">
		<tr align="center">
			<td>
	         <input type="button" value="返回列表" onclick="window.location='<@jspEl 'ctx'/>${actionBasePath}/list.${actionExtension}'"/>
			<input type="button" value="后退" onclick="history.back();"/>
			</td>
		</tr>
	</table>


</s:form>

</body>

</html>