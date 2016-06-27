<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">


 ${className}
 <#list table.columns as column>
 ${className}1.set${column.columnName}(${className}.get${column.columnName});
 </#list>

 
 ${className}
 <#list table.columns as column>
 ${className}.set${column.columnName}("${htm_notes(column)}");
 </#list>

 
 <#list table.columns as column>
 ${className}.${column.columnNameLower} = "${htm_notes(column)}";
 </#list>