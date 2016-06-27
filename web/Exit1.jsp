<%@ page contentType="text/html; charset=gb2312" language="java" import="java.sql.*" errorPage="" %>

<%
session.invalidate();
				out.print("<script>"+
					   "alert(\"个人信息设置成功,安全退出！\");"+
			   "window.parent.location.href=\"/index.jsp\";</script>");
//response.sendRedirect("/index.jsp");
%>