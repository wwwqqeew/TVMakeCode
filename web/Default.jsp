<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<%@ taglib prefix ="s" uri="/struts-tags" %> 
<%@ page contentType="text/html;charset=utf-8" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";
%>
<s:if test="%{#session.user==null}"><%response.sendRedirect("/index.jsp");%></s:if>
	<base href="<%=basePath%>">
 <title> 中国银行梧州分行押品管理系统主页</title> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
<frameset rows="124*,400*" cols="*" framespacing="0" border="0" ><frame src="<%=basePath%>/Top.jsp" "name="topFrame"  scrolling="no"/> 
<frameset rows="750,25" cols="*" bordercolor="#ffffff" > 
<frameset rows="*" cols="180,*" framespacing="0" frameborder="no" border="0"> 
<frame src="<%=basePath%>/LeftCom.jsp" name="leftFrame" scrolling="yes" noresize="noresize" id="leftFrame" title="leftFrame" /> 
<frame src="<%=basePath%>/welcome.jsp"  name="mainFrame"  scrolling="yes" id="mainFrame"/> <script>document.parentNode</script>
</frameset> <!--
<frame   rows="60,*,"  src="Test.jsp"  scrolling="NO"  frameborder="no" title="bottom" /> 
</frameset> -->
<!--<frame src="UntitledFrame-5"></frameset> -->
<noframes></noframes>
<noframes><body>
</body>
</noframes></html>
