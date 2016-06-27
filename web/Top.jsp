<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*" errorPage="" %>
<%@ include file="/commons/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";
%>
	<base href="<%=basePath%>">
<TITLE>top</TITLE>
<STYLE type=text/css>
BODY {
	MARGIN: -2px 0px 0px
}
</STYLE>
<SCRIPT language=JavaScript type=text/JavaScript>
<!--
function MM_reloadPage(init) {
	//reloads the window if Nav4 resized
	if (init == true) {
		with (navigator) {
			if ((appName == "Netscape") && (parseInt(appVersion) == 4)) {
				document.MM_pgW = innerWidth;
				document.MM_pgH = innerHeight;
				onresize = MM_reloadPage;
			}
		}
	} else if (innerWidth != document.MM_pgW || innerHeight != document.MM_pgH) {
		location.reload();
	}
}
MM_reloadPage(true);
//-->
</SCRIPT>

<META content="MSHTML 6.00.2900.3132" name=GENERATOR>
<style type="text/css">
<!--
-->
</style>
<link href="CSS/dizhenwei.css" rel="stylesheet" type="text/css" />
</HEAD>
<BODY>
<TABLE cellSpacing=0 cellPadding=0 width=100% border=0>
  <TBODY>
  <TR>
    <TD bgcolor="#0E2D6D">
        <div align="center"><img height=95 src="image/banner3.jpg" width="950"></div></TD></TR></TBODY></TABLE>
<table width="100%" height="34" border="0" cellpadding="2" cellspacing="0" bgcolor="#C0DAE7">
  <tr>
    <td width="2%" height="34">&nbsp;</td>
    <td width="18%"><div align="right" class="heizi14">
      <div align="left">
        <script language="JavaScript" type="text/javascript">
			  today=new Date();	 
				function initArray(){
				this.length=initArray.arguments.length
				for(var i=0;i<this.length;i++)
				this[i+1]=initArray.arguments[i]  }	 
				var d=new initArray("<font color=red>星期日","<font color=red>星期一","<font color=red>星期二","<font color=red>星期三","<font color=red>星期四","<font color=red>星期五","<font color=red>星期六"); 
				document.write( "<font color=#0e2d6d>");
				document.write(today.getYear(),"年",today.getMonth()+1,"月",today.getDate(),"日&nbsp;&nbsp; ",d[today.getDay()+1]);  
			</script>
      </div>
    </div></td>
    <td width="19%"><div align="right" class="heizi14">
    用户名：  <s:property value="%{#session.user.name}" />
 
    </div></td>
<td width="10%">&nbsp;&nbsp;</td>
    <td width="4%"><img src="image/icon/d.gif" width="30" height="30" /></td>
    <td width="8%"><a href="LeftCom.jsp" target="leftFrame" class="b14">通用菜单</a></td>
    <td width="4%"><span class="style6"><img height=30 
      src="image/icon/admin_top_icon_1.gif" width=30 /></span></td>
    <td width="8%">
	  <s:if test="%{#session.rB000000000!=null}"> 
	<a href="LeftSys.jsp" target="leftFrame" class="b14">系统管理</a>
    </s:if>
    <s:else>
	<a  href="javascript:alert('温馨提醒:您不是超级管理岗位，没有系统管理权限!');" target="leftFrame" class="b14">系统管理</a>
    </s:else>
  
    </td>
    <td width="4%"><img height=30 src="image/icon/admin_top_icon_5.gif" 
      width=30 /></td>
    <td width="11%"><a href="UserPerm/updatePersonEdit.do?id=<s:property value="%{#session.user.id}"/>" target="mainFrame" class="b14">个人设置</a></td>
	<!--
    <td width="4%"><img height=30 src="image/icon/admin_top_icon_6.gif" width=30 /></td>
	
    <td width="8%"><a href="#" class="b14">待办事项</a></td>
	-->
    <td width="4%"><span class="style6"><img height="30" 
      src="image/icon/admin_top_icon_2.gif" width="30" /></span></td>
    <td width="8%"><a href="/Exit.jsp" target="_parent" class="b14">安全退出</a></td>
  </tr>
</table>
</BODY></HTML>
