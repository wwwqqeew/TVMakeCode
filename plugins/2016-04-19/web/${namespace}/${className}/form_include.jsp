<%@page import="${basepackage}.model.*" %>
<#include "/macro.include"/> 
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/commons/taglibs.jsp" %>

<#list table.columns as column>
<#if column.htmlHidden>
	<s:hidden id="${column.columnNameLower}" name="${column.columnNameLower}" />
</#if>
</#list>

<!-- ONGL access static field: @package.class@field or @vs@field -->
<table width="100%" >
<#list table.columns?chunk(2) as row>
	<tr>
<#list row as column>
	<#if !column.htmlHidden>
	<#if column.isDateTimeColumn>
		<td align="right" >
			 <%=${className}.ALIAS_${column.constantName}%>：
		</td>	
		<td  >
		&nbsp;<input value="<@jspEl 'model.'+column.columnNameLower+'String'/>" onclick="WdatePicker({dateFmt:'<%=${className}.FORMAT_${column.constantName}%>'})" id="${column.columnNameLower}String" name="${column.columnNameLower}String" class="Wdate ${column.validateString}" />
		<#if !column.nullable>&nbsp;&nbsp;<font color="red">*</font>必填</#if>
		</td>
	<#else>
<#if column.isComid>
		<td align="right" >
			<%=${className}.ALIAS_${column.constantName}%>：
		</td>	
		<td >
			<#if column.size == 44>
			&nbsp;<s:radio name="${column.columnNameLower}" list="${column.columnNameLower}List" listKey="cname" listValue="cname" value="%{model.${column.columnNameLower}}" theme="simple"></s:radio>
			<#elseif column.size == 1>
			&nbsp;<s:radio name="${column.columnNameLower}" list="${'#'}{'是':'是','否':'否'}" value="%{model.${column.columnNameLower}}" theme="simple"></s:radio>
			<#elseif column.size == 46>
			&nbsp;<span style="width:222;overflow:hidden"><input name="${column.columnNameLower}" value="<@jspEl "model.${column.columnNameLower}" />" style="border-right:0;width:102" autocomplete="off"><span style="width:120;overflow:hidden"><s:select name="c_${column.columnNameLower}" list="${column.columnNameLower}List" listKey="cname" listValue="cname" emptyOption="true" theme="simple" cssStyle="width:120;margin-left:-102" onchange="${column.columnNameLower}.value=value"/><script language="javascript">document.getElementById("c_${column.columnNameLower}").value=document.getElementById("${column.columnNameLower}").value</script><#if !column.nullable>&nbsp;&nbsp;<font color="red">*</font>必填</#if></span>
			<#elseif column.size == 45>
			&nbsp;<s:select name="${column.columnNameLower}" list="${column.columnNameLower}List" listKey="cname" listValue="cname" emptyOption="true" theme="simple" cssClass="${column.validateString}" />
			<#if !column.nullable>&nbsp;&nbsp;<font color="red">*</font>必填</#if>
			<#elseif column.size == 500 >
			&nbsp;<s:textarea theme="simple"  id="${column.columnNameLower}" name="${column.columnNameLower}" cols="45" rows="5" cssClass="${column.validateString}" value="%{model.${column.columnNameLower}}"></s:textarea>
			<#if !column.nullable>&nbsp;&nbsp;<font color="red">*</font>必填</#if>
			<#else>
			&nbsp;<s:textfield theme="simple"  id="${column.columnNameLower}" name="${column.columnNameLower}" value="%{model.${column.columnNameLower}}" maxlength="${column.size}" required="${(!column.nullable)?string}" cssClass="${column.validateString}" />
			<#if !column.nullable>&nbsp;&nbsp;<font color="red">*</font>必填</#if>
			</#if>
		</td>
</#if>
	</#if>
	</#if>
</#list>
	</tr>
</#list>
</table>