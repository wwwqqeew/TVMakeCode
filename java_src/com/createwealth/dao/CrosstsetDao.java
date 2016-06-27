//package com.createwealth.dao;
package com.createwealth.dao;

import java.util.*;

import javacommon.base.*;
import javacommon.util.*;

import cn.org.rapid_framework.util.*;
import cn.org.rapid_framework.web.util.*;
import cn.org.rapid_framework.page.*;
import cn.org.rapid_framework.page.impl.*;

import com.createwealth.model.*;
import com.createwealth.dao.*;
import com.createwealth.service.*;

 


import org.springframework.stereotype.Component;

@Component
public class CrosstsetDao extends BaseHibernateDao<Crosstset,java.lang.Integer>{

	public Class getEntityClass() {
		return Crosstset.class;
	}
	
	public Page findByPageRequest(PageRequest<Map> pageRequest) {
		//XsqlBuilder syntax,please see http://code.google.com/p/rapid-xsqlbuilder
		// [column]为字符串拼接, {column}为使用占位符. 以下为图方便采用sql拼接,适用性能要求不高的应用,使用占位符方式可以优化性能. 
		// [column] 为PageRequest.getFilters()中的key
		String sql = "select t from Crosstset t where 1=1 "
				+ "/~ and t.crossId like '%[crossId]%' ~/"
				+ "/~ and t.enterDir >= '[enterDir]' ~/"
				+ "/~ and t.enterDir < '[enterDir_max]' ~/"
				+ "/~ and t.turn >= '[turn]' ~/"
				+ "/~ and t.turn < '[turn_max]' ~/"
				+ "/~ and t.turnDir >= '[turnDir]' ~/"
				+ "/~ and t.turnDir < '[turnDir_max]' ~/"
				+ "/~ order by [sortColumns] ~/";
		return pageQuery(sql,pageRequest);
	}
	

}
