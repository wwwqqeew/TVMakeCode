
<#include "/java_copyright.include">
<#include "/judgeProperty.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">				
/**--Role.java START--**/

	private Boolean ${classNameLower}Management;

	public Boolean get${className}Management() {
		return ${classNameLower}Management;
	}

	public void set${className}Management(Boolean ${classNameLower}Management) {
		this.${classNameLower}Management = ${classNameLower}Management;
	}
	
	if (${classNameLower}Management){
		modulesList.add("${className}Management");
		modulesList.add("Edit${className}");
	}
	
	if (${classNameLower}Management)
		modulesList.add("${className}Management");

	/**--Role END--**/
	
	/**暂时无用**/
	encoding//src/main/webapp/WEB-INF/views/modules/${className}Management.jsp=UTF-8
	encoding//src/main/webapp/WEB-INF/views/modules/Edit${className}.jsp=UTF-8
	/**暂时无用**/
	
	/**--AdminController.Java  S--**/
	role.set${className}Management(true);
	/**--AdminController.Java E--**/

	/android${classNameLower}management/** =  anon
	/**--applicationContext-shiro.xml  S--**/
				/${classNameLower}management/** =  anon
				/edit${classNameLower}/** =  roles[${className}Management]
	/**--applicationContext-shiro.xml E--**/
				
	/**--setting.properties  S--**/				
${className}Management={"name":"${className}Management","type":"nav","search":"order","title" : "${table.columns[0].decodeUnicode}\u7BA1\u7406","url" : "${classNameLower}management" }
Edit${className}={"name":"Edit${className}","type":"other","search":"order","title" : "\u65B0\u589E${table.columns[0].decodeUnicode}","url" : "edit${classNameLower}"}
Show${className}={"name":"Show${className}","type":"other","search":"order","title" : "${table.columns[0].decodeUnicode}\u8be6\u60c5","url" : "show${classNameLower}"}
	/**--setting.properties  E--**/		
