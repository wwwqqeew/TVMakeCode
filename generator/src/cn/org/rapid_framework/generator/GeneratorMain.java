package cn.org.rapid_framework.generator;

import java.io.IOException;


/**
 * 
 * @author badqiu
 * @email badqiu(a)gmail.com
 */

public class GeneratorMain {
	/**
	 * 璇风洿鎺ヤ慨鏀逛互涓嬩唬鐮佽皟鐢ㄤ笉鍚岀殑鏂规硶浠ユ墽琛岀浉鍏崇敓鎴愪换鍔�.
	 */
	public static void main(String[] args) throws Exception {
		GeneratorFacade g = new GeneratorFacade();
//		g.printAllTableNames();				//鎵撳嵃鏁版嵁搴撲腑鐨勮〃鍚嶇О
		
		g.clean();							//鍒犻櫎鐢熸垚鍣ㄧ殑杈撳嚭鐩綍
		//g.generateByTable("tvcardriver".toLowerCase());
		//g.generateByTable("tvoiluse");
		//g.generateByAllTable();
//		g.generateByTable("attractions".toLowerCase());
//		g.generateByTable("testwjOt".toLowerCase());
//		g.generateByTable("taskTrack".toLowerCase());
//		g.generateByTable("properties".toLowerCase());
//		g.generateByTable("geometry".toLowerCase());
//		g.generateByClass(aatest.class);
		g.generateByTable("demo".toLowerCase());
//		g.generateByTable("template".toLowerCase());
		
		//System.out.println("44444:"+aatest.class.getTypeParameters().length);
		Runtime.getRuntime().exec("cmd.exe /c start d:\\webapp-generator-output");
	}
	
	public static void create() throws Exception {
		GeneratorFacade g = new GeneratorFacade();
//		g.printAllTableNames();				//鎵撳嵃鏁版嵁搴撲腑鐨勮〃鍚嶇О
		
		g.clean();							//鍒犻櫎鐢熸垚鍣ㄧ殑杈撳嚭鐩綍
		//g.generateByTable("tvcardriver".toLowerCase());
		//g.generateByTable("tvoiluse");
		//g.generateByAllTable();
//		g.generateByTable("attractions".toLowerCase());
//		g.generateByTable("testWj".toLowerCase());
		g.generateByTable("testwjOt".toLowerCase());
//		g.generateByTable("properties".toLowerCase());
//		g.generateByTable("geometry".toLowerCase());
//		g.generateByClass(aatest.class);
		//System.out.println("44444:"+aatest.class.getTypeParameters().length);
		Runtime.getRuntime().exec("cmd.exe /c start d:\\webapp-generator-output");
	}
}
