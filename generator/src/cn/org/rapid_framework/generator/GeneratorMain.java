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
//		g.generateByTable("demo".toLowerCase());
		
		//都没
//		g.generateByTable("enterprise".toLowerCase());
//		g.generateByTable("government".toLowerCase());
//		g.generateByTable("individual".toLowerCase());
//		g.generateByTable("industry".toLowerCase());
//		g.generateByTable("park".toLowerCase());
//		g.generateByTable("tourism".toLowerCase());
		
//		g.generateByTable("newcity".toLowerCase());
//		g.generateByTable("zhTraffic".toLowerCase());
//		g.generateByTable("industryPlan".toLowerCase());
//		g.generateByTable("resourceSupply".toLowerCase());
//		g.generateByTable("port".toLowerCase());
		
		g.generateByTable("testwj".toLowerCase());
		g.generateByTable("testwjot".toLowerCase());
		
//		g.generateByTable("documentreturn".toLowerCase());
//		g.generateByTable("documentstoreceive".toLowerCase());
//		g.generateByTable("longcatdistance".toLowerCase());
//		g.generateByTable("shortcardispatch".toLowerCase());
//		
//		g.generateByTable("borrowthecar".toLowerCase());
//		g.generateByTable("callThePolice".toLowerCase());
//		g.generateByTable("vehicleLine".toLowerCase());
//		g.generateByTable("vehicleRescue".toLowerCase());
//		g.generateByTable("vehicleDiagnosis".toLowerCase());
//		g.generateByTable("workforceManagement".toLowerCase());
//		g.generateByTable("residentialQuarters".toLowerCase());
//		g.generateByTable("residentialQuartersbig".toLowerCase());
//		g.generateByTable("vehicleInformation".toLowerCase());
//		
		
		
		
		
		
		
		
		
		
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
//		g.generateByTable("testwjOt".toLowerCase());
//		g.generateByTable("properties".toLowerCase());
//		g.generateByTable("geometry".toLowerCase());
//		g.generateByClass(aatest.class);
		//System.out.println("44444:"+aatest.class.getTypeParameters().length);
//		g.generateByTable("testwjOt".toLowerCase());
		Runtime.getRuntime().exec("cmd.exe /c start d:\\webapp-generator-output");
	}
}
