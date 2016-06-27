//package com.createwealth.service;
package com.createwealth.service;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

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

 

@Component
@Transactional
public class CrosstsetManager extends BaseManager<Crosstset,java.lang.Integer>{

	private CrosstsetDao crosstsetDao;
	/**增加setXXXX()方法,spring就可以通过autowire自动设置对象属性,请注意大小写*/
	public void setCrosstsetDao(CrosstsetDao dao) {
		this.crosstsetDao = dao;
	}
	public EntityDao getEntityDao() {
		return this.crosstsetDao;
	}
	
	@Transactional(readOnly=true)
	public Page findByPageRequest(PageRequest pr) {
		return crosstsetDao.findByPageRequest(pr);
	}
	
}
