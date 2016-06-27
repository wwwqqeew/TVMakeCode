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
	<title><%=${className}.TABLE_ALIAS%>编辑</title>
	<link rel="stylesheet"  href="<@jspEl 'ctx'/>/CSS/body.css" type="text/css"/>
</head>

<body>
<%@ include file="/commons/messages.jsp" %>
<br>
<s:form action="${actionBasePath}/update.${actionExtension}" method="post">
	 
	<table width="100%">
		<tr class="header" >	
			<td align="center" valign="middle"><strong><%=${className}.TABLE_ALIAS%>修改 </strong></td>
		</tr>	
	</table>
	<!-- <table width="100%"> -->
	<%@ include file="form_include.jsp" %>
	<!-- </table> -->
 	<br/>
	<table width="100%">
		<tr align="center">
			<td>
	    	<input id="submitButton" name="submitButton" type="submit" value="提交" />
		    <input type="button" value="返回列表" onclick="window.location='<@jspEl 'ctx'/>${actionBasePath}/list.${actionExtension}'"/>
			<input type="button" value="后退" onclick="history.back();"/>
			</td>
		</tr>
	</table>

</s:form>

<script>
	
	new Validation(document.forms[0],{onSubmit:true,onFormValidate : function(result,form) {
		var finalResult = result;
		
		//在这里添加自定义验证
		
		return disableSubmit(finalResult,'submitButton');
	}});
</script>

</body>

</html>