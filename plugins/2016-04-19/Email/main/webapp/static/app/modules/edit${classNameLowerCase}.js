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
	var myAlidation = new checkIframe("edit-${classNameLower}-form",{});//初始化数据监测
	var iframeAction = new AjaxIframe({moduleName:"${className}Management", formClassName:"iframe-form"});//初始化数据框
	
	//myAlidation.init();
	iframeAction.init();
	$(".save-edit").click(function() {
		if(checkDate()){
			if (iframeAction.action == "edit") {
				//这里的路径位置不同，所有路径前不用加其他的前缀
				iframeAction.updateData($(".iframe-form").serializeJson(),("update"));
			}else if (iframeAction.action == "add") {
				iframeAction.saveData($(".iframe-form").serializeJson(),(theUrl+"/newone"));
			}
		}
	});
	
	checkDate = function(){
		myAlidation.postCheck();
		var rt = true;
		rt = myAlidation.result == true? rt : false ;
		return rt;
	};
	

});