<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*" errorPage="" %>
<%@ include file="/commons/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";
%>
	<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>操作成功</title>
<script type="text/javascript" src="/JS/jquery-1.2.6.pack.js"></script>
</head>

<style type="text/css">

.aa,.aa td{/*控制表格的大小和颜色 以及字体之间的间距*/
	border-collapse:collapse;
	border:1px solid #2a91bc;
	word-break:break-all;
	font-size: 12px;
	font-style: normal;
	line-height: 1.5em;
	font-weight: normal;
	font-variant: normal;
}
</style>

<script language="javascript">

function loadfun(option){
	eval("document.all."+option+".focus();");
	   var url = 'WaitingAjax.do';//ajax提交地址
   		 var params = {myState:"tips"};
	   jQuery.post(url,params,setTips,'json');
}
function setTips(json){
	var tips = json.tips;
	 $("#tips").html(tips);
}
 
function gotoaction(){
  //var item = document.getElementById(option);
	if (event.keyCode==49 || event.keyCode==97){//按了1键
		window.location.href="<%=basePath%>PledgeRegist/ple_manager.jsp";//质押存（折）单台帐管理
	}else if(event.keyCode==50 || event.keyCode==98){
    	window.location.href="<%=basePath%>LoanFile/loan_manager.jsp";//一级信贷文件登录卡管理
   }else{
     alert("您输入的数字无效！");
	   $("#numtext").val("")
	   $("#numtext").focus();
}

	
}

//质押存（折）单台帐信息
function FindByNo1(){
	$("#showspan1").html("");
	if($("#condition00").val() == ""){
		$("#condition00").focus();
		$("#showspan1").html("对不起，请您输入的查询条件！");
		return false;
	}
    var url = 'PledgeRegistAjax.do?myState=SEEDATA';//ajax提交地址
    var params = {
    		condition00:$("#condition00").val()
	   };
	   jQuery.post(url,params,setFindByNo1,'json');
}

function setFindByNo1(json){
	var myState = json.myState;
	if(myState == 'no'){
		$("#showspan1").html("对不起，根据您输入的条件搜索不到对应的记录！");
		return false;
	}else if(myState == 'selectOne'){

	}else{
		document.all.formID1.submit();
	}
}

 
</script>
<body onload="loadfun('numtext')">
<center>
<div  id="tips" align="center"  style="color: red;">
</div>
<br /> 
<table align="center" class="aa" width="80%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td style="font-size: 18px;" bgcolor="#D5D8DF"><strong>1--> 质押存（折）单台帐管理、2--> 一级信贷文件登录卡管理</strong> 
	</td>
  </tr>
   <tr>
    <td  align="center" >
	请输入数字：<input id="numtext" name="numtext" type="text" value="" onkeydown="gotoaction()"  />
      &nbsp;  <input type="button" value="确定" onclick="gotoaction()"/>
	</td>
  </tr>
</table>
<form id="formID2" method="post" action="/LoanFile/findByCondition.do?myState=/welcome.jsp">
 
<table align="center" class="aa"  width="80%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td style="font-size: 18px;" bgcolor="#D5D8DF"><strong>一级信贷文件登录卡查询</strong> 
	</td>
  </tr>
   <tr>
    <td  align="center" >
	请输入查询条件：<input id="condition" name="condition" type="text" value="${condition}"  />
			<input type="submit"  value="查看（Enter）" style="width: 100px;height: 25px;" id="dd2" name="dd2" />
			（贷款账号或项目号或姓名）<font id="showspan2" color="red">${tipsError}</font>
	</td>
  </tr>
</table>
</form>
<br />

<form id="formID33" method="post" action="/PledgeRegist/findByCondition.do?myState=/welcome.jsp">
<table align="center" class="aa"  width="80%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td style="font-size: 18px;" bgcolor="#D5D8DF"><strong>质押存（折）单台帐查询</strong> 
	</td>
  </tr>
   <tr>
    <td  align="center" >
	请输入查询条件：<input id="condition00" name="condition00" type="text" value="${condition00}"  />
			<input type="submit"  value="查看（Enter）" style="width: 100px;height: 25px;" id="dd3" name="dd3" />
			（贷款账号或姓名）<font  color="red">${tipsError}</font>
	</td>
  </tr>
</table>
</form>
 

<table width="100%" align="center" height="80%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center" valign="middle">
  <img src="<%=basePath%>image/welcome.jpg" width="593" height="276" alt="登录成功！" />

	</td>
  </tr>
</table>
</center>
 



</body>
</html>