<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first> 
var name = "${classNameLower}";
var theUrl = "edit${classNameLower}";
<#list table.columns as column>
<#if !column.pk>
${js_noSimple(column)}
</#if>
</#list>
$(document).ready(function() {
	var idByiframe = null;
	idByiframe = $(window.parent.document).find("iframe[class='iframe-main']").attr("alt");
	
	if (idByiframe == "edit") {
		findOneData($(window.parent.document).find("iframe[class='iframe-main']").attr("id"));
	}else if(idByiframe == "show"){
		findOneData($(window.parent.document).find("iframe[class='iframe-main']").attr("id"));
		$("#edit-"+name+"-form").find(".iframe-button-tr").remove();
		<#assign radioS = 0>
		<#assign checkboxS = 0>
		<#assign textareaS = 0>
		<#assign inputS = 0>
		<#assign selectS = 0>
		<#list table.columns as column>
		 <#if !column.pk>
		<@htm column=column function="textarea" theused=textareaS>
		$("#edit-"+name+"-form").find("textarea").css({cursor: "default"}).attr("readonly","true");
		<#assign textareaS = 1>
		</@htm>
		<@htm column=column function="input" theused=inputS>
		$("#edit-"+name+"-form").find("input[class*='text-input']").css({cursor: "default"}).attr("readonly","true").removeAttr("onClick").removeAttr("onKeyUp").removeAttr("onBlur");
		<#assign inputS = 1>
		</@htm>
		<@htm column=column function="radio" theused=radioS>
		$("#edit-"+name+"-form").find("input[type='radio']").attr("onclick","return false;");
		<#assign radioS = 1>
		</@htm>
		<@htm column=column function="checkbox" theused=checkboxS>
		$("#edit-"+name+"-form").find("input[type='checkbox']").attr("onclick","return false;");
		<#assign checkboxS = 1>
		</@htm>
		<@htm column=column function="select" theused=selectS>
		$("#edit-"+name+"-form").find("select")
		.attr("onbeforeactivate","return false")
		.attr("onfocus","this.blur()")
		.attr("onmouseover","this.setCapture")
		.attr("onmouseout","this.releaseCapture()");
		<#assign selectS = 1>
		</@htm>
		</#if>
		</#list>
	}
	var myAlidation = new checkIframe("edit-${classNameLower}-form",{});
	//myAlidation.init();
	
	$("#edit-"+name+"-form").find(".save-edit-" + name).click(function() {
		myAlidation.postCheck();
		if(checkDate()){
			if (idByiframe == "edit") {
				updateData(getInputData());
			} else if (idByiframe == "add") {
				saveData(getInputData());
			};
		}
	});

	$("#edit-"+name+"-form").find(".cancel-edit-" + name).click(function() {
		window.parent.PopuWnd.close();
	});

	checkDate = function(){
		var rt = true;
		rt = myAlidation.result == true? rt : false ;
		<#list table.columns as column>
		<#if !column.pk>
		<@js column=column function="sm">
		if(!(former${column.columnName}!="" && former${column.columnName} == $.trim($("#edit-"+name+"-form").find(".${column.columnNameLower}").val()))){
			rt = checkNameOrNuber(theUrl,$("#edit-"+name+"-form").find(".${column.columnNameLower}"),"${column.columnNameLower}","已存在","${column.columnNameLower}",$.trim($("#edit-"+name+"-form").find(".${column.columnNameLower}").val())) == true? rt : false ;
		}
		</@js>
		</#if>
		</#list>
		return rt;
	};
});
<#assign radio = 0>
<#assign checkbox = 0>
<#list table.columns as column>
<@htm column=column function="radio_df">
<#if radio == 0>
radioSet_df = function (className ,date){
	var theb = true;
	var strBoolean = (date==true?"true":(date==false?"false":date));
	 $("#edit-"+name+"-form").find("input[type='radio'][class='"+className+"']").each(function(){
		 if($(this).val()==strBoolean){
			 $(this).prop("checked", true);
			 theb = false;
		 }
	 });
	 if(theb){
		 $("#edit-"+name+"-form").find("input[type='radio'][class='"+className+"'][value='other']").prop("checked", true);
		 $("#edit-"+name+"-form").find("."+className+"-input").val(date);
	 }
};
radioGet_df = function (name){
	 if($("#edit-"+name+"-form").find("input[type='radio'][class='"+className+"']:checked").val()!="other"){
		 return $("#edit-"+name+"-form").find("input[type='radio'][class='"+className+"']:checked").val();
	 }else{
		 return $.trim($("#edit-"+name+"-form").find("."+className+"-input").val());
	 }
};
<#assign  radio=1>
</#if>
</@htm>

<@htm column=column function="checkbox">
<#if checkbox == 0>
checkboxGet = function(className){
	 var data ="";		 
	 $("#edit-"+name+"-form").find("."+className).each(function(e){
			if ($(this).prop("checked")) {
				data == "" ? data += "" : data += ",";
				data += $(this).val();
			}
	 });
	 return data;
};


checkboxSet = function(className,data){
	 date = data || "";		 
	 var str = [];
	 str = data.split(",");
	 for(var i = 0; i <str.length; i++){
		 $("#edit-"+name+"-form").("."+className).each(function(e){
				$(this).val() == str[i]? $(this).prop("checked", true) :1 ;
			});
		 };
};

<#assign  checkbox=1>
</#if>
</@htm>
</#list>

setInputData = function(data) {
	data = (data || {});
	$("#edit-"+name+"-form").find("."+name+"Id").val(data.id || "");
	<#list table.columns as column>
	<#if !column.pk>
	<@js column=column function="sm">
	(former${column.columnName} = (data.${column.columnNameLower} || "");
	</@js>
	</#if>
	</#list>
	<#list table.columns as column>
	<#if !column.pk>
	<#assign used = 0>
	<@htm column=column function="textarea">
	$("#edit-"+name+"-form").find(".${column.columnNameLower}").val(data.${column.columnNameLower} || "");
	<#assign used = 1>
	</@htm>
	<@htm column=column function="input">
	$("#edit-"+name+"-form").find(".${column.columnNameLower}").val(data.${column.columnNameLower} || "");
	<#assign used = 1>
	</@htm>
	<@htm column=column function="radio_df">
	radioSet_df("${column.columnNameLower}", data.${column.columnNameLower});
	<#assign used = 1>
	</@htm>
	<@htm column=column function="radio">
	<#-- $("#edit-"+name+"-form").find("input[class='radio'][value='"+data.${column.columnNameLower}+"']").prop("checked",true);-->
	$("#edit-"+name+"-form").find(".${column.columnNameLower}").prop("checked",data.${column.columnNameLower}==true?true:false);
	<#assign used = 1>
	</@htm>
	<@htm column=column function="checkbox">
	checkboxSet("${column.columnNameLower}",data.${column.columnNameLower});
	<#assign used = 1>
	</@htm>
	<@htm column=column function="select">
	$("#edit-"+name+"-form").find(".${column.columnNameLower}").val(data.${column.columnNameLower} || "");
	<#assign used = 1>
	</@htm>
	<@htm_used column=column theused=used>
	$("#edit-"+name+"-form").find(".${column.columnNameLower}").val(data.${column.columnNameLower} || "");
	</@htm_used>
	</#if>
	</#list>
};

getInputData = function(data) {
	data = (data || {});
	data.id = $("#edit-"+name+"-form").find("."+name+"Id").val();
	<#list table.columns as column>
	<#if !column.pk>
	<#assign used = 0>
	<@htm column=column function="radio_df">
	data.${column.columnNameLower} = radioGet_df("${column.columnNameLower}");
	<#assign used = 1>
	</@htm>
	<@htm column=column function="radio">
	<#-- data.${column.columnNameLower} =  $("input[class='${column.columnNameLower}']:checked").val();-->
	data.${column.columnNameLower} =  $("#edit-"+name+"-form").find(".${column.columnNameLower}").prop("checked");
	<#assign used = 1>
	</@htm>
	<@htm column=column function="input">
	data.${column.columnNameLower} = $("#edit-"+name+"-form").find(".${column.columnNameLower}").val();
	<#assign used = 1>
	</@htm>
	<@htm column=column function="textarea">
	data.${column.columnNameLower} = $("#edit-"+name+"-form").find(".${column.columnNameLower}").val();
	<#assign used = 1>
	</@htm>
	<@htm column=column function="select">
	data.${column.columnNameLower} = $("#edit-"+name+"-form").find(".${column.columnNameLower}").val();
	<#assign used = 1>
	</@htm>
	<@htm column=column function="checkbox">
	data.${column.columnNameLower} = checkboxGet("${column.columnNameLower}");
	<#assign used = 1>
	</@htm>
	<@htm_used column=column theused=used>
	data.${column.columnNameLower} = $("#edit-"+name+"-form").find(".${column.columnNameLower}").val();
	</@htm_used>
	</#if>
	</#list>
	return data;
};


saveData = function(data) {
	$.ajax({
		type : "POST",
		url : theUrl + "/newone",
		data : $.toJSON(data),
		dataType : "json",
		contentType : 'application/json;charset=UTF-8',
		success : $.proxy(function(obj) {
			if (obj.success) {
				alert("新增成功！");
				window.parent.baseSetting.getModule("${className}Management").module.requestData(1);
				window.parent.PopuWnd.close();
			} else {
				alert("新增失败！");
			}
		}, this),
		error : function(msg) {
			alert(msg.success);
		}
	});
};

findOneData = function(ids) {
	$.ajax({
		type : "POST",
		url : theUrl + "/findOneById",
		dataType : "json",
		data : "id=" + ids,
		success : $.proxy(function(obj) {
			if (obj.success) {
				setInputData(obj.data);
			} else {
				alert("请求失败！");
			}
		}, this),
		error : function(msg) {
			alert(msg.success);
		}
	});
};


updateData = function(data) {
	$.ajax({
		type : "POST",
		url : theUrl + "/update",
		data : $.toJSON(data),
		dataType : "json",
		contentType : 'application/json;charset=UTF-8',
		success : $.proxy(function(obj) {
			if (obj.success) {
				alert("更新成功！");
				window.parent.baseSetting.getModule("${className}Management").module.requestData(1);
				window.parent.PopuWnd.close();
			} else {
				alert("更新失败！");
			}
		}, this),
		error : function(msg) {
			alert(msg.success);
		}
	});
};