<%@ page language="java" import="java.util.*" pageEncoding="gbk"%> 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";
%>
<base href="<%=basePath%>">
<STYLE TYPE="text/css">
.bg{

background:url(image/index3.jpg) no-repeat;}
TD,body,tr,p	{FONT-SIZE: 12px; COLOR: #333333; WORD-BREAK: break-all; }
SELECT	{BORDER-RIGHT: #000000 1px solid; BORDER-TOP: #000000 1px solid; FONT-SIZE: 12px; BORDER-LEFT: #000000 1px solid; COLOR: #000000; BORDER-BOTTOM: #000000 1px solid; BACKGROUND-COLOR: #f4f4f4}
TEXTAREA	{
overflow: auto;
SCROLLBAR-FACE-COLOR: #009ace;
SCROLLBAR-HIGHLIGHT-COLOR: #b8e9fa;
SCROLLBAR-SHADOW-COLOR: #009aaa;
SCROLLBAR-3DLIGHT-COLOR: #000000;
SCROLLBAR-ARROW-COLOR: #ffffff;
SCROLLBAR-TRACK-COLOR: #f4f4f4;
SCROLLBAR-DARKSHADOW-COLOR: #000000;
FONT-SIZE: 12px; 
BORDER: 1px #000000 solid; 
}
.TEXTAREA1	{
overflow: auto;
SCROLLBAR-FACE-COLOR: #009ace;
SCROLLBAR-HIGHLIGHT-COLOR: #b8e9fa;
SCROLLBAR-SHADOW-COLOR: #009aaa;
SCROLLBAR-3DLIGHT-COLOR: #000000;
SCROLLBAR-ARROW-COLOR: #ffffff;
SCROLLBAR-TRACK-COLOR: #f4f4f4;
SCROLLBAR-DARKSHADOW-COLOR: #000000;
FONT-SIZE: 12px; 
BORDER-RIGHT: #cccccc 1px solid; 
BORDER-TOP: #000000 1px solid;
BORDER-LEFT: #000000 1px solid;
BORDER-BOTTOM: #cccccc 1px solid
}
.f14        {font-size:14px}
.f18        {font-size:18px}

body{
	font-family:宋体;
	font-size:9pt;
	SCROLLBAR-FACE-COLOR: #A8D3DE;
	SCROLLBAR-HIGHLIGHT-COLOR: #ffffff;
	SCROLLBAR-SHADOW-COLOR: #999999;
	SCROLLBAR-3DLIGHT-COLOR: #999999;
	SCROLLBAR-ARROW-COLOR: #000000;
	SCROLLBAR-TRACK-COLOR: #f0f0f0;
	SCROLLBAR-DARKSHADOW-COLOR: #ffffff;
	background-image: url(image/bank_index_bg.jpg);
	background-repeat: repeat-x;
 }

  TD{ FONT-SIZE: 9pt;color:#666666}
</STYLE>
<title>中国银行梧州分行押品管理系统登录</title>

<style>
.inp{color:0000ff;border:1px #999999 solid;background:#efefef}
.STYLE2 {color: #CCCCCC}
</style>
</head>
<body bgcolor="#FFFFFF">
<form name="form1" id="form1" method="post" action="UserPerm/load.do" onSubmit="return testSubmit()">
  <input type="hidden" name="myState" id="myState" value="LOGIN" />
<table width="100%" border="0" height=100% cellspacing="0" cellpadding="0">
  <tr>
    <td>

<TABLE WIDTH="890"  height="438" BORDER=0 align="center" CELLPADDING=0 CELLSPACING=0  class="bg">
 
	<TR>
		<TD height="88" COLSPAN=3>&nbsp;</TD>
	</TR>
	<TR>
		<TD width="196" ROWSPAN=4>&nbsp;</TD>
		<TD width="400"  height=18 align="left">
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; <span class="STYLE2">
            <b>用户名：</b></span>  
		   <input name="userid" type="text" size="14"  tabindex="1" onBlur="setCookie('userid',this.value,100)" />
           <font size="2px" color="#FF0000">${errors.userid[0]}</font> &nbsp;&nbsp;</TD>
		<TD width="100" ROWSPAN=3>&nbsp;</TD>
	</TR>
	<TR>
      <TD width="370" height=8 align="center"><span class="STYLE2"><b>密  码：</b></span> 
	    <input name="password" type="password" size="14" tabindex="2"> <font size="2px" color="#FF0000">${errors.password[0]}</font>
       </TD>
	  
    </TR>
	<TR>
 
	  <TD width="378"  height=8 align="center" valign="top"> 
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
 <input type="submit" name="Submit" value="登录 "  style="width:60px; height: 30px">  &nbsp;&nbsp;&nbsp;&nbsp;
 <input type="reset"   value="清空"  style="width: 60px; height: 30px" ></TD>
	  </TR>
	 
	</TR>
</form>
</TABLE>
	
	</td>
  </tr>
    <tr> 
      <td COLSPAN=3 height=50></td>
    </tr>
</table>
</BODY>

<script language="javascript">
function testSubmit(){
	if(document.form1.userid.value == ''){
		document.form1.userid.focus();
		return false;
	}
	if(document.form1.password.value == ''){
		document.form1.password.focus();
		return false;
	}
	return true;
}
</script>

<script type="text/javascript" language="javascript">
/**
 * @param    name    cookie key
 * @param    value   key value
 * @param    days    保存天数
 */
function setCookie(name, value, days) {
    var exp  = new Date("December 31, 9998");
    exp.setTime(exp.getTime() + days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

/**
 * 取cookies函数
 */
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return unescape(arr[2]); return null;
}

/**
 * 删除cookies
 */
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
//用cookies记录用户名
var username = getCookie('userid');
if( username != null || username != undefined){
	document.form1.userid.value = username;
	document.form1.password.focus();
} else {
	document.form1.userid.focus();
}
</script>
</HTML>

