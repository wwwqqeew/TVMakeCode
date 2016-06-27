package cn.org.rapid_framework.generator.provider.java.model;

public class pp {

	private String pname = "";
	private String pnameLower = "";
	private String pnameUpwer = "";
	
	private String ptype = "";
	
	private Object pvalue ="";
	private int size = 0;
	private String remark  ="";
	
	public String getPtype() {
		return ptype;
	}
	public void setPtype(String ptype) {
		this.ptype = ptype;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		if(pname != null && pname != ""){//为空则不进行首字符大小写转换
			this.setPnameLower(toLower(pname,0));
			this.setPnameUpwer(toLower(pname,1));
		}
		
		this.pname = pname;
	}
	public Object getPvalue() {
		return pvalue;
	}
	public void setPvalue(Object pvalue) {
		this.pvalue = pvalue;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getPnameLower() {
		return pnameLower;
	}
	public void setPnameLower(String pnameLower) {
		this.pnameLower = pnameLower;
	}
	
	public String toLower(String oldStr,int order){ 
		byte[] items = oldStr.getBytes();  
		if(order ==0 && "abcdefghijklmnopqrstuvwxyz".indexOf(items[0]) >=0){
			items[0] = (byte)((char)items[0] - ( 'a' - 'A'));  
//			System.out.println("执行了小赚大："+new String(items));
		}else if(order ==1 && "abcdefghijklmnopqrstuvwxyz".toUpperCase().indexOf(items[0]) >=0){
			items[0] = (byte)((char)items[0] - ( 'A' - 'a'));  
//			System.out.println("执行了大赚小："+new String(items));
		}
		return new String(items);
	}
	
	public String getPnameUpwer() {
		return pnameUpwer;
	}
	public void setPnameUpwer(String pnameUpwer) {
		this.pnameUpwer = pnameUpwer;
	}
	
	
}
