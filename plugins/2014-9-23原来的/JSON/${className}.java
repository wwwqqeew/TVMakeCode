<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
 ${className}:{<#list table.columns as column>${column.columnNameLower}:"${htm_notes(column)}",</#list>} 

