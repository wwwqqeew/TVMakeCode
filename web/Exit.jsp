<%@ page contentType="text/html; charset=gb2312" language="java" import="java.sql.*" errorPage="" %>

<%
session.invalidate();
			//	out.print("<script>"+"alert(\"�ɹ��˳���\");"+ "window.location.href=\"/index.jsp\";</script>");
			out.print("<script> window.location.href=\"/index.jsp\";</script>");
//response.sendRedirect("/index.jsp");
%>