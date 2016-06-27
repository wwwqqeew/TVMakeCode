package cn.org.rapid_framework.generator.util;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class HtmlToTemple {

	public static final String TB_NAME = "表名称";
	public static final String PT_INPUT = "一般输入框";
	public static final String PT_DATE = "日期输入框";
	private HashMap<String,String> hs = new HashMap<String,String>();//替换属性哈希
	
	public String replaceAll(String str) {
		GetReplaceHS();
		 Iterator iter = hs.entrySet().iterator();  
	        while (iter.hasNext()) {  
	            Map.Entry<String, String> entry = (Map.Entry<String, String>) iter.next(); 
	            o.o("key:["+entry.getKey()+"]", "value:["+entry.getValue()+"]" ,"替换完成");
	            str = str.replace(entry.getKey(), entry.getValue());
	        }
		return str;
	}
	
	public HashMap<String,String> GetReplaceHS() {
		putTbName("a-demo-","[例子]");
		putTbProperty();
//		hs.put(key, value)
//		o.o(hs);
		return hs;
	}
	//表名称相关
	public void putTbName(String tbName, String tbNameCN) {
		hs.put(firstNameMax(tbName,false), "${classNameLower}");
		hs.put(firstNameMax(tbName,true), "${className}");
		hs.put(tbNameCN, "${table.columns[0].columnAlias}");
	}
	//属性构建
	private void putTbProperty() {
		hs.put("${pageContext.request.contextPath}", "${r'${pageContext.request.contextPath}'}");
		putTbPropertyCN("a-input-","[输入框]");
		putTbPropertyCN("a-inputDate-","[时间]");
		putTbPropertyCN("a[pk]","[外键]");
	}
	
	//属性以及注释
	private void putTbPropertyCN(String name,String nameCN) {
		String str = "${htm_notes(column)}";
		hs.put(firstNameMax(name,false), "${column.columnNameLower}");
		hs.put(firstNameMax(name,true), "${column.columnName}");
		hs.put(nameCN, "${htm_notes(column)}");
	}
	
	/**
	 * 首字母大小写想换转化
	 * @param name
	 * @param isTurnMax (是否是转为大写)
	 * @return
	 */
    public static String firstNameMax(String name, boolean isTurnMax) {
        char[] cs=name.toCharArray();
//        o.o((int) cs[0],isTurnMax);
        if (65 <= ((int) cs[0]) && ((int) cs[0]) <= 90) {//大写
        	if (isTurnMax) {
        		return name;
			} else {
				cs[0] += 32;
				return String.valueOf(cs);
			}
		} else if(97 <= ((int) cs[0]) && ((int) cs[0]) <= 122) {//小写
			if (isTurnMax) {
				cs[0] -= 32;
				return String.valueOf(cs);
			} else {
				return name;
			}
		} else{
			System.out.println("字符串：["+name+"]非字母开头");
			return name;
		}
      
    }
    
    public static void main(String[] args) {
		o.o(firstNameMax("Aaa",false));
	}
}
