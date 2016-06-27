<#include "/macro.include"/>
<#include "/java_copyright.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first> 
package ${basepackage}.model;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;

<#include "/java_imports.include">

public class ${className}Service extends BasicService implements ${className}ServiceInter {

	@Override
	public ${className} get${className}ById(int ${table.sqlName}Id) {
		return null;
	}

	@Override
	public Page get${className}List(int pageNow, int pageSize) {
		return null;
	}

	@Override
	public void update${className}(${className} ${table.sqlName}) {
	}
}