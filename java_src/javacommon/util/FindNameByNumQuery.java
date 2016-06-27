package javacommon.util;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

 
@Component
public class FindNameByNumQuery  extends HibernateDaoSupport{
	private static final Log log = LogFactory.getLog(FindNameByNumQuery.class);
	
	
   /**
    * 根据编号查找对应的名称
    * @param name 查找对应的名称
    * @param table 表名  
    * @param code 编号字段
    * @param codeValue 编号字段值
    * @return 查找对应的名称
    */
	@Transactional(readOnly=true)
    public String  findAreanameBycode(String name,String table,String code,String codeValue){
    	
		 List list = new ArrayList();
		 log.debug("根据编号查找对应的名称 ");
		 try {
		 	 final String sql = "select "+name+" from "+table+" where "+code+" = '"+codeValue+"'";   //查询语句
				 list = getHibernateTemplate().find(sql); 
			 //System.out.println("根据编号查找对应的名称  "+sql);
			 if(list.isEmpty()){
				 return "";
			 }else{
				 return list.get(0).toString();
			 }
		 } catch (RuntimeException re) {
			 log.error("根据编号查找对应的名称   失败", re);
			 throw re;
		 }
			 
	}
}

