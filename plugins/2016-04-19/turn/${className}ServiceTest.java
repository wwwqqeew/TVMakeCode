package com.ritu.trafficlight.service.modules;
<#include "/custom.include">
<#include "/macro.include"/>
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.ritu.trafficlight.utils.JunitServiceBase;

public class ${className}ServiceTest extends JunitServiceBase{
	
	 @Autowired  
	 private ${className}Service ${classNameLower}Service;
	 
	   @Test  
	   public void test(){
		   ${classNameLower}Service.turnData();
	   }

}
