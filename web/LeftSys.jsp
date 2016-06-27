<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page contentType="text/html;charset=UTF-8" %>

<html xmlns="http://www.w3.org/1999/xhtml">
<%@ taglib prefix ="s" uri="/struts-tags" %> 
<head>
<title></title> 
<meta http-equiv="Content-Type" content="text/html"/><style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}
-->
</style>
<link href="CSS/subcss.css" rel="stylesheet" type="text/css" />
<style type="text/css">
<!--
asd {
	background-repeat: no-repeat;
	background-position: center;
}
flash {
	background-repeat: no-repeat;
	background-position: center;
}
body {
	background-color: #FFFFFF;
}
-->
</style>
<style type="text/css">
<!--
.STYLE2 {
	font-size: 14px;
	font-weight: bold;
	font-family: "宋体";
}
.STYLE4 {font-size: 16px}
-->
</style>
<link href="CSS/dizhenwei.css" rel="stylesheet" type="text/css" />
</head>
<base target="main"/>
<script language="JavaScript1.2">
scores = new Array(20);
var numTotal = 0;
NS4 = (document.layers) ? 1 : 0;
IE4 = (document.all) ? 1 : 0;
ver4 = (NS4 || IE4) ? 1 : 0;
if (ver4) {
	with (document) {
		write("<STYLE TYPE='text/css'>");
		if (NS4) {
			write(".parent {position:absolute; visibility:visible}");
			write(".child {position:absolute; visibility:visible}");
			write(".regular {position:absolute; visibility:visible}");
		} else {
			write(".child {display:none}");
		}
		write("</STYLE>");
	}
}
function getIndex(el) {
	ind = null;
	for (i=0; i<document.layers.length; i++) {
		whichEl = document.layers[i];
		if (whichEl.id == el) {
			ind = i;
			break;
		}
	}
	return ind;
}
function arrange() {
	nextY = document.layers[firstInd].pageY+document.layers[firstInd].document.height;
	for (i=firstInd+1; i<document.layers.length; i++) {
		whichEl = document.layers[i];
		if (whichEl.visibility != "hide") {
			whichEl.pageY = nextY;
			nextY += whichEl.document.height;
		}
	}
}
function initIt() {
	if (!ver4) {
		return;
	}
	if (NS4) {
		for (i=0; i<document.layers.length; i++) {
			whichEl = document.layers[i];
			if (whichEl.id.indexOf("Child") != -1) {
				whichEl.visibility = "hide";
			}
		}
		arrange();
	} else {
		divColl = document.all.tags("DIV");
		for (i=0; i<divColl.length; i++) {
			whichEl = divColl(i);
			if (whichEl.className == "child") {
				whichEl.style.display = "none";
			}
		}
	}
}
var oldid = "";
function expandIt(el) {
	if (!ver4) {
		return;
	}
	if( oldid == ""){
		document.all(el+"head").background="image/bg/safasaf4.jpg";
		oldid = el;
	} else if( oldid == el ){
		document.all(el+"head").background="image/bg/safasafdddddddddd.jpg";
		oldid = "";
	} else {
		document.all(el+"head").background="image/bg/safasaf4.jpg";
		document.all(oldid+"head").background="image/bg/safasafdddddddddd.jpg";
		oldid = el;
	}
	if (IE4) {
		whichEl1 = eval(el+"Child");
		for (i=1; i<=numTotal; i++) {
			whichEl = eval(scores[i]+"Child");
			if (whichEl != whichEl1) {
				whichEl.style.display = "none";
			}
		}
		whichEl1 = eval(el+"Child");
		if (whichEl1.style.display == "none") {
			whichEl1.style.display = "block";
		} else {
			whichEl1.style.display = "none";
		}
	} else {
		whichEl = eval("document."+el+"Child");
		for (i=1; i<=numTotal; i++) {
			whichEl = eval("document."+scores[i]+"Child");
			if (whichEl != whichEl1) {
				whichEl.visibility = "hide";
			}
		}
		if (whichEl.visibility == "hide") {
			whichEl.visibility = "show";
		} else {
			whichEl.visibility = "hide";
		}
		arrange();
	}
}
onload = initIt;
</script>
<script language="javascript">
var oldtd = '';
function tdSelect(tdid){
	var tdx = document.getElementById(tdid);
	//tdx.bgColor="#CCFF33";
	tdx.bgColor="#C0DAE7";//FEC303
	if( oldtd != '' && oldtd != tdid ){
		document.getElementById(oldtd).bgColor="#ffffff";
	}
	oldtd = tdid;
}
</script>
<body class="bg1"> 

<table id="table1" width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="4%" height="20"><img src="image/icon/d.gif" width="30" height="30"/></td>
    <td width="96%"><a href="LeftSys.jsp" target="_self" class="b14">系统管理</a></td>
  </tr>
</table>
 <s:if test="%{#session.rB001000000!=null}">
<table width="100%" height="30" border="0" background="image/bg/safasafdddddddddd.jpg" onClick="expandIt('KB0'); return false" class="leftbg" id="KB0head">
  <tr>
    <td height="30" ><div align="center"> 基础信息管理 </div></td>
  </tr>
</table>
</div>
 
	<s:if test="%{#session.rB001003000!=null}">
	<table width="100%" height="30" border="0" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF">
      <tr>
        <td height="30" id="tdx002"><div align="center"><a href="Product/list.do" target="mainFrame"    onclick="tdSelect('tdx002');">
		 <span class="STYLE2">产品信息管理</span></a></div></td>
      </tr>
    </table>
</s:if>
<s:if test="%{#session.rB001002000!=null}">
	<table width="100%" height="30" border="0" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF">
      <tr>
        <td height="30" id="tdx004"><div align="center"><a href="Pledge/list.do" target="mainFrame" onclick="tdSelect('tdx004');">
         <span class="STYLE2">押品信息管理  </span></a></div></td>
      </tr>
    </table>
</s:if>
<s:if test='%{#session.rB001001000!=null && #session.banktype=="1"}'>
		<table width="100%" height="30" border="0" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF">
      <tr>
        <td height="30" id="tdx005"><div align="center"><a href="Banks/list.do" target="mainFrame" onclick="tdSelect('tdx005');">
         <span class="STYLE2">银行信息管理</span></a></div></td>
      </tr>
    </table>
 </s:if>
</s:if>

<s:if test='%{#session.rB002000000!=null}'>
<a href="#" onClick="expandIt('KB1'); return false"></a>
<table width="100%" height="30" border="0" background="image/bg/safasafdddddddddd.jpg" onClick="expandIt('KB1'); return false" class="leftbg" id="KB1head">
  <tr>
    <td height="30" ><div align="center"> 人员-权限管理 </div></td>
  </tr>
</table>
 <s:if test="%{#session.rB002001000!=null}">
	<table width="100%" height="30" border="0" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF">
      <tr>
        <td height="30" id="tdx006"><div align="center"><a href="UserPerm/list.do" target="mainFrame" onclick="tdSelect('tdx006');">
           <span class="STYLE2">人员信息管理</span></a></div></td>
      </tr>
  </table>
</s:if>
  <s:if test='%{#session.rB002002000!=null && #session.banktype=="1"}'>
	<table width="100%" height="30" border="0" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF">
      <tr>
        <td height="30" id="tdx025"><div align="center"><a href="Role/list.do" target="mainFrame" onclick="tdSelect('tdx025');">
           <span class="STYLE2">岗位权限管理</span></a></div></td>
      </tr> 
    </table>
</s:if>
</s:if>
<s:if test='%{#session.rB003000000!=null}'>
<table width="100%" height="30" border="0" background="image/bg/safasafdddddddddd.jpg" onClick="expandIt('KB1'); return false" class="leftbg" id="KB1head">
  <tr>
    <td height="30" ><div align="center">数据库管理 </div></td>
  </tr>
</table>
<s:if test='%{#session.rB003001000!=null}'>
	<table width="100%" height="30" border="0" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF">
      <tr>
        <td height="30" id="tdx026"><div align="center"><a href="system/Database/DB_Backup.jsp" target="mainFrame" onclick="tdSelect('tdx026');">
           <span class="STYLE2">数据库备份</span></a></div></td>
      </tr> 
    </table>
</s:if>
<s:if test='%{#session.rB003002000!=null}'>
	<table width="100%" height="30" border="0" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF">
      <tr>
        <td height="30" id="tdx027"><div align="center"><a href="system/Database/DB_Revert.jsp" target="mainFrame" onclick="tdSelect('tdx027');">
           <span class="STYLE2">数据库还原</span></a></div></td>
      </tr> 
    </table>
</s:if>
</s:if>
<SCRIPT>
    numTotal=2;scores[1]='KB1';scores[2]='KB0';
   
</SCRIPT>
</body>
</html>