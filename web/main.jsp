<%@ page contentType="text/html; charset=gb2312" language="java" import="java.sql.*" errorPage="" %>
<%@ taglib prefix ="s" uri="/struts-tags" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
 <%



if("4".equals("${#session.userperm}")){ 
 request.getRequestDispatcher("/Inpatient/DocPat_o1.jsp").forward(request,response);
 }
 else if("5".equals("${#session.userperm}")){ 
 request.getRequestDispatcher("/Inpatient/ExecPat_o5.jsp").forward(request,response);
 }
%>
    
    <title>mainFrame</title>
    
	

  </head>
  
  <body> 


  </body>
</html>
