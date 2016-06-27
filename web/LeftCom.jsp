<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ taglib prefix ="s" uri="/struts-tags" %>
<%@ page contentType="text/html;charset=UTF-8" %>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";
%>
	<base href="<%=basePath%>">
<title></title>
<meta http-equiv="Content-Type" content="text/html" /><style type="text/css">
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

<link href="CSS/dizhenwei.css" rel="stylesheet" type="text/css" />
<style type="text/css">
<!--
.STYLE2 {
	font-size: 14px;
	font-weight: bold;
	font-family: "宋体";
}
.STYLE7 {
	font-size: 14px;
	font-weight: bold;
}
-->
</style>
</head>
<base target="main" />
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
	tdx.bgColor="#C0DAE7";//FEC303
	//tdx.bgColor="#CCFF33";
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
    <td width="96%"><a href="LeftCom.jsp" target="_self" class="b14">通用菜单</a></td>
  </tr>
</table>
<s:if test="%{#session.rA001000000!=null}">
<table width="100%" border="0" onClick="expandIt('KB1'); return false" class="leftbg" id="KB1head">
  <tr>
    <td height="30"><div align="center"> 押品信息管理 </div></td>
  </tr>
</table>
  <table width="100%" height="30" border="0" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF">
      <tr>
        <td height="30" id="tdx001"><div align="center">
        <a href="welcome.jsp" target="mainFrame" onclick="tdSelect('tdx001');">
        <span class="STYLE2">押品管理</span></a></div></td>
      </tr>
    </table>
<s:if test="%{#session.rA001001001!=null}">
  <table width="100%" height="30" border="0" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF">
      <tr>
        <td height="30" id="tdx002"><div align="center">
        <a href="PledgeRegistImport/lookcheck.do" target="mainFrame" onclick="tdSelect('tdx002');">
        <span class="STYLE2">质押存(折)单台帐批量导入</span></a></div></td>
      </tr>
    </table>
</s:if>
<s:if test="%{#session.rA001002001!=null}">
  <table width="100%" height="30" border="0" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF">
      <tr>
        <td height="30" id="tdx0021"><div align="center">
        <a href="LoanFileImport/lookcheck.do" target="mainFrame" onclick="tdSelect('tdx0021');">
        <span class="STYLE2">一级信贷文件批量导入</span></a></div></td>
      </tr>
    </table>
</s:if>
</s:if>
<s:if test="%{#session.rA002000000!=null}">
<table width="100%" border="0" onClick="expandIt('KB2'); return false" class="leftbg" id="KB2head">
  <tr>
    <td height="30"><div align="center">库存统计查询 </div></td>
  </tr>
</table>
  
	<table width="100%" height="30" border="0" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF">
<s:if test="%{#session.rA002001000!=null}">
      <tr>
        <td height="30" id="tdx003"><div align="center">
        <a href="LoanFile/sumPre.do" target="mainFrame" onclick="tdSelect('tdx003');" >
       <span class="STYLE2">一级信贷文件库存统计</span></a></div></td>
     </tr>
</s:if>
<s:if test="%{#session.rA002002000!=null}">
      <tr>
        <td height="30" id="tdx004"><div align="center">
	<a href="PledgeRegist/sum.do" target="mainFrame" onclick="tdSelect('tdx004');" >
              <span class="STYLE2">质押存(折)单台帐库存统计  </span></a></div></td>
      </tr>
</s:if>

    </table>
 </s:if>

<s:if test="%{#session.rA003000000!=null}">
<table width="100%" border="0" onClick="expandIt('KB3'); return false" class="leftbg" id="KB3head">
  <tr>
    <td height="30"><div align="center">出库/待取历史记录 </div></td>
  </tr>
</table>
  
	<table width="100%" height="30" border="0" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF">
<s:if test="%{#session.rA003002000!=null}">  
    <tr>
        <td height="30" id="tdx006"><div align="center">
	<a href="LoanFile/alllist.do" target="mainFrame" onclick="tdSelect('tdx006');" >
              <span class="STYLE2">一级信贷文件出库历史记录  </span></a></div></td>
      </tr>
 </s:if>


<s:if test="%{#session.rA003003000!=null}">
      <tr>
        <td height="30" id="tdx007"><div align="center">
        <a href="LoanFile/waitlist.do" target="mainFrame" onclick="tdSelect('tdx007');" >
       <span class="STYLE2">一级信贷文件待取历史记录</span></a></div></td>
     </tr>
 </s:if>
<s:if test="%{#session.rA003001000!=null}">
      <tr>
        <td height="30" id="tdx005"><div align="center">
        <a href="PledgeRegist/outlist.do" target="mainFrame" onclick="tdSelect('tdx005');" >
       <span class="STYLE2">台账出库历史记录</span></a></div></td>
     </tr>
 </s:if>
 

<s:if test="%{#session.rA003005000!=null}">
      <tr>
        <td height="30" id="tdx009"><div align="center">
        <a href="LoanFile/output.do" target="mainFrame" onclick="tdSelect('tdx009');" >
       <span class="STYLE2">一级信贷文件-导出excel</span></a></div></td>
     </tr>
 </s:if>
<s:if test="%{#session.rA003004000!=null}">
      <tr>
        <td height="30" id="tdx008"><div align="center">
        <a href="PledgeRegist/output.do" target="mainFrame" onclick="tdSelect('tdx008');" >
       <span class="STYLE2">台账查询-导出excel</span></a></div></td>
     </tr>
 </s:if>
    </table>
 </s:if>
<SCRIPT>
	numTotal=2;
    scores[1]='KB5';
	scores[2]='KB9';
	scores[3]='KB7';
	scores[4]='KB3';
</SCRIPT>
</body>
</html>