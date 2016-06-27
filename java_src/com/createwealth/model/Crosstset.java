//package com.createwealth.model;
package com.createwealth.model;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;

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

 


@Entity
@Table(name = "crosstset")
public class Crosstset extends BaseEntity {
	
	//alias
	public static final String TABLE_ALIAS = "路口放行配置";
	public static final String ALIAS_SEQ_NO = "路口放行配置";
	public static final String ALIAS_CROSS_I_D = "路口编号";
	public static final String ALIAS_ENTER_DIR = "进口方向";
	public static final String ALIAS_TURN = "转向";
	public static final String ALIAS_TURN_DIR = "转向对应方向";
	
	//date formats
	

	//columns START
	private java.lang.Integer seqNo;
	private java.lang.String crossId;
	private java.lang.Integer enterDir;
	private java.lang.Integer turn;
	private java.lang.Integer turnDir;
	//columns END


	public Crosstset(){
	}

	public Crosstset(
		java.lang.Integer seqNo
	){
		this.seqNo = seqNo;
	}

	

	public void setSeqNo(java.lang.Integer value) {
		this.seqNo = value;
	}
	
	@Id @GeneratedValue(generator="custom-id")
	@GenericGenerator(name="custom-id", strategy = "increment")
	@Column(name = "seqNo", unique = true, nullable = false, insertable = true, updatable = true, length = 11)
	public java.lang.Integer getSeqNo() {
		return this.seqNo;
	}
	
	@Column(name = "crossID", unique = false, nullable = false, insertable = true, updatable = true, length = 255)
	public java.lang.String getCrossId() {
		return this.crossId;
	}
	
	public void setCrossId(java.lang.String value) {
		this.crossId = value;
	}
	
	@Column(name = "enterDir", unique = false, nullable = true, insertable = true, updatable = true, length = 11)
	public java.lang.Integer getEnterDir() {
		return this.enterDir;
	}
	
	public void setEnterDir(java.lang.Integer value) {
		this.enterDir = value;
	}
	
	@Column(name = "turn", unique = false, nullable = true, insertable = true, updatable = true, length = 11)
	public java.lang.Integer getTurn() {
		return this.turn;
	}
	
	public void setTurn(java.lang.Integer value) {
		this.turn = value;
	}
	
	@Column(name = "turnDir", unique = false, nullable = true, insertable = true, updatable = true, length = 11)
	public java.lang.Integer getTurnDir() {
		return this.turnDir;
	}
	
	public void setTurnDir(java.lang.Integer value) {
		this.turnDir = value;
	}
	
	
	private Set cross1s = new HashSet(0);
	public void setCross1s(Set<Cross1> cross1){
		this.cross1s = cross1;
	}
	
	@OneToMany(cascade = { CascadeType.MERGE }, fetch = FetchType.LAZY, mappedBy = "crosstset")
	public Set<Cross1> getCross1s() {
		return cross1s;
	}
	
	private Cross1 cross1;
	
	public void setCross1(Cross1 cross1){
		this.cross1 = cross1;
	}
	
	@ManyToOne(cascade = {}, fetch = FetchType.LAZY)
	@JoinColumn(name = "crossID",nullable = false, insertable = false, updatable = false)
	public Cross1 getCross1() {
		return cross1;
	}

	public String toString() {
		return new ToStringBuilder(this)
			.append("SeqNo",getSeqNo())
			.append("CrossId",getCrossId())
			.append("EnterDir",getEnterDir())
			.append("Turn",getTurn())
			.append("TurnDir",getTurnDir())
			.toString();
	}
	
	public int hashCode() {
		return new HashCodeBuilder()
			.append(getSeqNo())
			.append(getCrossId())
			.append(getEnterDir())
			.append(getTurn())
			.append(getTurnDir())
			.toHashCode();
	}
	
	public boolean equals(Object obj) {
		if(obj instanceof Crosstset == false) return false;
		if(this == obj) return true;
		Crosstset other = (Crosstset)obj;
		return new EqualsBuilder()
			.append(getSeqNo(),other.getSeqNo())
			.append(getCrossId(),other.getCrossId())
			.append(getEnterDir(),other.getEnterDir())
			.append(getTurn(),other.getTurn())
			.append(getTurnDir(),other.getTurnDir())
			.isEquals();
	}
}

