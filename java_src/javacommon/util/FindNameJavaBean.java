package javacommon.util;



public class FindNameJavaBean {
	
	private FindNameByNumQuery findNameByNumQuery;
	
	private String name;//有查找的表字段名
	private String table;//查找的表名
	private String code;//条件字段
	private String codeValue;//条件字段的值
	
	public FindNameByNumQuery getFindNameByNumQuery() {
		return findNameByNumQuery;
	}
	public void setFindNameByNumQuery(FindNameByNumQuery findNameByNumQuery) {
		this.findNameByNumQuery = findNameByNumQuery;
	}
	
	public String getName() {
		return name = findNameByNumQuery.findAreanameBycode(name,table,code, codeValue);
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTable() {
		return table;
	}
	public void setTable(String table) {
		this.table = table;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getCodeValue() {
		return codeValue;
	}
	public void setCodeValue(String codeValue) {
		this.codeValue = codeValue;
	}

}
