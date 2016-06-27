package cn.org.rapid_framework.generator;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {
	 public static void main(String[] args) {
	  String encoding = gbEncoding("路口数据维护");
	  System.out.println(encoding);
	  String decoeing = decodeUnicode(encoding);
	  System.out.println(decoeing);
		 
		
	 }

	 /**
	  * 根据时间类型获取系统时间
	  * @param dateType yyyy-MM-dd HH:mm:ss
	  * @return
	  */
	 public static String getDate(String dateType){
		 SimpleDateFormat df = new SimpleDateFormat(dateType);//设置日期格式
//		 System.out.println("日期："+df.format(new Date()));
		 return df.format(new Date());
	 }
	 /**
	  * 获取转码后的数据
	  * @param gbString
	  * @return
	  */
	 public static String gbEncoding( String gbString) {
	  char[] utfBytes = gbString.toCharArray();
	  StringBuffer buffer = new StringBuffer();
	  for (int byteIndex = 0; byteIndex < utfBytes.length; byteIndex++) {
	   String hexB = Integer.toHexString(utfBytes[byteIndex]);
	   if (hexB.length() <= 2) {
	    hexB = "00" + hexB;
	   }
	   buffer.append("\\u" + hexB);
	  }
	  return buffer.substring(0);
	 }

	 /**
	  * unicode 转换成 中文
	  *
	  * @author fanhui 2007-3-15
	  * @param theString
	  * @return
	  */
	 public static String decodeUnicode(String theString) {
	  char aChar;
	  int len = theString.length();
	  StringBuffer outBuffer = new StringBuffer(len);
	  for (int x = 0; x < len;) {
	   aChar = theString.charAt(x++);
	   if (aChar == '\\') {
	    aChar = theString.charAt(x++);
	    if (aChar == 'u') {
	     int value = 0;
	     for (int i = 0; i < 4; i++) {
	      aChar = theString.charAt(x++);
	      switch (aChar) {
	      case '0':
	      case '1':
	      case '2':
	      case '3':
	      case '4':
	      case '5':
	      case '6':
	      case '7':
	      case '8':
	      case '9':
	       value = (value << 4) + aChar - '0';
	       break;
	      case 'a':
	      case 'b':
	      case 'c':
	      case 'd':
	      case 'e':
	      case 'f':
	       value = (value << 4) + 10 + aChar - 'a';
	       break;
	      case 'A':
	      case 'B':
	      case 'C':
	      case 'D':
	      case 'E':
	      case 'F':
	       value = (value << 4) + 10 + aChar - 'A';
	       break;
	      default:
	       throw new IllegalArgumentException(
	         "Malformed      encoding.");
	      }

	     }
	     outBuffer.append((char) value);
	    } else {
	     if (aChar == 't') {
	      aChar = '\t';
	     } else if (aChar == 'r') {
	      aChar = '\r';
	     } else if (aChar == 'n') {
	      aChar = '\n';
	     } else if (aChar == 'f') {
	      aChar = '\f';
	     }
	     outBuffer.append(aChar);
	    }
	   } else {
	    outBuffer.append(aChar);
	   }

	  }
	  return outBuffer.toString();

	 }

	}