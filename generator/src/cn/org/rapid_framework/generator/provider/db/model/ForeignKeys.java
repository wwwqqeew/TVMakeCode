/*
 * Created on Jan 6, 2005
 *
 */
package cn.org.rapid_framework.generator.provider.db.model;

import cn.org.rapid_framework.generator.util.ListHashtable;

/**  外键？
 * @author Richard
 * This class contains a list of all the tables for which foreign keys
 * exist for the containing SqlTable. It contains a reference to the parent
 * and also a Hashtable of foreign keys for each table 
 * 
 */
public class ForeignKeys  {

	/**
	 * 父表？
	 */
	protected Table parentTable;
	/**
	 * 关联表
	 */
	protected ListHashtable associatedTables;
	/**
	 * Constructor for Foreign Keys
	 */
	public ForeignKeys(Table aTable) {
		super();
		parentTable      = aTable;
		associatedTables = new ListHashtable();
	}
	/**添加外键？
	 * @param tableName 表名
	 * @param columnName 字段名
	 * @param seq
	 */
	public void addForeignKey(String tableName, String columnName,  String parentColumn, Integer seq) {
		ForeignKey tbl = null;
		if (associatedTables.containsKey(tableName)) {//测试指定对象是否为此哈希表中的键
			tbl = (ForeignKey) associatedTables.get(tableName);
		}
		else {
			tbl = new ForeignKey(parentTable,tableName);
			associatedTables.put(tableName,tbl);
		}
		 
		tbl.addColumn(columnName, parentColumn, seq);
	}
	

	/**
	 * @return Returns the associatedTables.
	 */
	public ListHashtable getAssociatedTables() {
		return associatedTables;
	}
	public int getSize() {
		return getAssociatedTables().size();
	}
	public boolean getHasImportedKeyColumn(String aColumn) {
		boolean isFound = false;
		int numKeys = getAssociatedTables().size();
		for (int i=0;i<numKeys;i++) {
			ForeignKey aKey = (ForeignKey) getAssociatedTables().getOrderedValue(i);
			if (aKey.getHasImportedKeyColumn(aColumn)) {
				isFound = true;
				break;
			}
		}
		return isFound;
	}
	public ForeignKey getAssociatedTable(String name) {
		Object fkey = getAssociatedTables().get(name);
		if (fkey != null) {
			return (ForeignKey) fkey;
		}
		else return null;
	}
	/**
	 * @return Returns the parentTable.
	 */
	public Table getParentTable() {
		return parentTable;
	}
	public boolean getHasImportedKeyParentColumn(String aColumn) {
		boolean isFound = false;
		int numKeys = getAssociatedTables().size();
		for (int i=0;i<numKeys;i++) {
			ForeignKey aKey = (ForeignKey) getAssociatedTables().getOrderedValue(i);
			if (aKey.getHasImportedKeyParentColumn(aColumn)) {
				isFound = true;
				break;
			}
		}
		return isFound;
	}
	public ForeignKey getImportedKeyParentColumn(String aColumn) {
		ForeignKey aKey = null;
		int numKeys = getAssociatedTables().size();
		for (int i=0;i<numKeys;i++) {
			aKey = (ForeignKey) getAssociatedTables().getOrderedValue(i);
			if (aKey.getHasImportedKeyParentColumn(aColumn)) {
				break;
			}
		}
		return aKey;
	}
}
