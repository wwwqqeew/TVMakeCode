package cn.org.rapid_framework.generator;

import cn.org.rapid_framework.generator.provider.java.myinterface.myinterface.classProvider;

public class aatest {
	
	@classProvider(size=4,remark="整数")
	 int TestInt;
	 

	 String testStr ;
	
	

	public int getTestInt() {
		return TestInt;
	}

	public void setTestInt(int testInt) {
		TestInt = testInt;
	}

	public String getTestStr() {
		return testStr;
	}

	public void setTestStr(String testStr) {
		this.testStr = testStr;
	}
//	<#list clazz.otable as list>
//	${list.ptype}  ${list.pname} ${list.pnameLower} ${list.pnameUpwer}  ${list.size} ${list.remark}
//</#list>
	
}
