<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first> 

realyPayChange = function(){
	$(".realyPay").keyup(function(){
			$(".surplus").val($.trim($(this).val()) - $.trim($(".shoulePay").text()));
	});

};

clearNoNum = function(event,obj){ 
    event = window.event||event; 
    if(event.keyCode == 37 | event.keyCode == 39){ 
        return; 
    } 
    obj.value = obj.value.replace(/[^\d.]/g,""); 
    obj.value = obj.value.replace(/^\./g,""); 
    obj.value = obj.value.replace(/\.{2,}/g,"."); 
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$","."); 
};
 checkNum = function(obj){ 
    obj.value = obj.value.replace(/\.$/g,""); 
}; 

<#list table.columns as column>
<tr>
	<td class="title"><#if !column.null><span class="iframe-not-null">*</span></#if>${htm_notes(column)}：</td>
	<td  class="td-input"><input class='text-input ${column.columnNameLower} <#if !column.null>required</#if> iframe-radius' name='${column.columnNameLower}' ${htm_nameCheck(column)} style="width: 345px;" ></td>
<td></td>
</tr>
</#list>