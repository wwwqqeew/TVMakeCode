<%@ page contentType="text/html; charset=gb2312" language="java" import="java.sql.*" errorPage="" %>

<%
session.invalidate();
				out.print("<script>"+
					   "alert(\"������Ϣ���óɹ�,��ȫ�˳���\");"+
			   "window.parent.location.href=\"/index.jsp\";</script>");
//response.sendRedirect("/index.jsp");
%>