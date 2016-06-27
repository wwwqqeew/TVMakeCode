import javax.persistence.Column;


<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">				
/**--Role.java START--**/
<#list table.columns as column>
<div class="form-group has-feedback">
	<label for="lastname" class="col-xs-4 control-label">${htm_notes(column)}：</label>
	<div class="col-xs-7">
	<input class='text ${column.columnNameLower} required form-control' name="saleDate" style="width: 345px;" value="${mirror.${column.columnNameLower}}" >
	</div>
</div>
</#list>
