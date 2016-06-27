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
	<link href="<@jspEl 'ctx'/>/widgets/extremecomponents/extremecomponents.css" type="text/css" rel=stylesheet>
	<title><%=${className}.TABLE_ALIAS%> 维护</title>
	<link rel="stylesheet"  href="<@jspEl 'ctx'/>/CSS/body.css" type="text/css"/>
</head>

<body onLoad="initd()">
<%@ include file="/commons/messages.jsp" %>
<br>
<div class="queryPanel">
<form action="<c:url value="${actionBasePath}/list.do"/>" method="post" style="display: inline;">
	<table width="100%">
		<tr class="header" >
			<td align="center" valign="middle"><strong><%=${className}.TABLE_ALIAS%>信息管理 </strong></td>
		</tr>	
	</table>
<fieldset>
	<legend>搜索</legend>
	<table width="100%">
		<#list table.columns?chunk(3) as row>
		<tr>	
			<#list row as column>
			<#if !column.htmlHidden>	
				<#if column.isComid>
			<td class="tdLabel">
					<%=${className}.ALIAS_${column.constantName}%> ：
			</td>		
			<td>
				<#if column.isDateTimeColumn>
				<input value="<@jspEl "pageRequest.filters."+column.columnNameLower/>" onclick="WdatePicker({dateFmt:'<%=${className}.FORMAT_${column.constantName}%>'})"  name="s_${column.columnNameLower}" class="Wdate"  />&nbsp;～&nbsp;<input value="${'$'}{pageRequest.filters.${column.columnNameLower}_max}" onclick="WdatePicker({dateFmt:'<%=${className}.FORMAT_${column.constantName}%>'})"  name="s_${column.columnNameLower}_max" class="Wdate"  />
				<#elseif column.size == 46||column.size == 45||column.size == 44>
				<span style="width:165;overflow:hidden"><input name="s_${column.columnNameLower}" value="<@jspEl "pageRequest.filters."+column.columnNameLower/>" style="border-right:0;width:72" autocomplete="off"><span style="width:90;overflow:hidden"><s:select name="c_${column.columnNameLower}" list="${column.columnNameLower}List" listKey="cname" listValue="cname" emptyOption="true" theme="simple" cssStyle="width:90;margin-left:-72" onchange="s_${column.columnNameLower}.value=value"/></span></span>
				<#elseif column.isNumberColumn>
				<input value="<@jspEl "pageRequest.filters."+column.columnNameLower/>"  name="s_${column.columnNameLower}"  />&nbsp;～&nbsp;<input value="${'$'}{pageRequest.filters.${column.columnNameLower}_max}"  name="s_${column.columnNameLower}_max"  />
				<#else>
				<input value="<@jspEl "pageRequest.filters."+column.columnNameLower/>"  name="s_${column.columnNameLower}"  />
				</#if>
			</td>
				</#if>
			</#if>
			</#list>
		</tr>	
		</#list>			
	</table>
</fieldset>
<div class="handleControl">
	<input type="submit" class="stdButton" style="width:80px" value="查询" onclick="getReferenceForm(this).action='<@jspEl 'ctx'/>${actionBasePath}/list.do'"/>
	<input type="submit" class="stdButton" style="width:80px" value="新增" onclick="getReferenceForm(this).action='<@jspEl 'ctx'/>${actionBasePath}/create.do'"/>
	<input type="button" class="stdButton" style="width:80px" value="删除" onclick="batchDelete('<@jspEl 'ctx'/>${actionBasePath}/delete.do','items',document.forms.ec)"/>
</div>
</form>
</div>

<ec:table items='page.result' var="item" method="get"
	retrieveRowsCallback="limit" sortRowsCallback="limit" filterRowsCallback="limit"
	action="<@jspEl 'ctx'/>${actionBasePath}/list.${actionExtension}" autoIncludeParameters="true">
	<ec:row>
		<ec:column property="选择" title="<input type='checkbox' onclick=\"setAllCheckboxState('items',this.checked)\" >" sortable="false" width="3%" viewsAllowed="html">
			<input type="checkbox" name="items" value="<@generateIdQueryString/>"/>
		</ec:column>
		<#list table.columns as column>
		<#if !column.htmlHidden>
			<#if column.isComid>
		<ec:column style="text-align:center;" property="${column.columnNameLower}" <#if column.isDateTimeColumn>value="<@jspEl 'item.'+column.columnNameLower+"String"/>"</#if> title="<%=${className}.ALIAS_${column.constantName}%>"></ec:column>
			</#if>
		</#if>
		</#list>
		<ec:column property="操作" title="操作" style="text-align:center;" sortable="false" viewsAllowed="html">
			<a href="<@jspEl 'ctx'/>${actionBasePath}/show.${actionExtension}?<@generateIdQueryString/>">查看</a>&nbsp;&nbsp;<a href="<@jspEl 'ctx'/>${actionBasePath}/edit.${actionExtension}?<@generateIdQueryString/>">修改</a>
		</ec:column>
	</ec:row>
</ec:table>

</body>
<script type="text/javascript">
function initd(){
	<#list table.columns as column>
	<#if !column.htmlHidden>
		<#if column.size == 46||column.size == 45||column.size == 44>
		document.getElementById("s_${column.columnNameLower}").value="<@jspEl "pageRequest.filters.${column.columnNameLower}" />";
		document.getElementById("c_${column.columnNameLower}").value="<@jspEl "pageRequest.filters.${column.columnNameLower}" />";
		</#if>
	</#if>
	</#list>
}
</script>

</html>

<#macro generateIdQueryString>
	<#if table.compositeId>
		<#assign itemPrefix = 'item.id.'>
	<#else>
		<#assign itemPrefix = 'item.'>
	</#if>
<#compress>
		<#list table.compositeIdColumns as column>
			<#t>${column.columnNameLower}=<@jspEl itemPrefix + column.columnNameLower/>&
		</#list>				
</#compress>
</#macro>