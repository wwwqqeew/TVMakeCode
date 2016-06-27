<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*" errorPage="" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";
%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<base href="<%=basePath%>">
<title>操作成功</title>
</head>
<body>
<script>
					    alert("操作成功!");
					    window.opener.document.location.reload(); //关闭子窗口，刷新父窗口  
                        window.close(); 					  
</script>
<center>
<!--  
					 	
  <img src="<%=basePath%>/image/success.jpg" width="411" height="124" alt="操作成功！" />
  -->
</center>
</body>
</html>