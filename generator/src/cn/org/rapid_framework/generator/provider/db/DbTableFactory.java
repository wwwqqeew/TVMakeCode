package cn.org.rapid_framework.generator.provider.db;


import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import cn.org.rapid_framework.generator.DateUtil;
import cn.org.rapid_framework.generator.GeneratorProperties;
import cn.org.rapid_framework.generator.provider.db.model.Column;
import cn.org.rapid_framework.generator.provider.db.model.Table;
import cn.org.rapid_framework.generator.util.GLogger;
/**
 * 
 * @author badqiu
 * @email badqiu(a)gmail.com
 */
public class DbTableFactory {

	
	private Connection connection;
	private static DbTableFactory instance = null;
	
	private DbTableFactory() {
		init();
	}

	private void init() {
		String driver = GeneratorProperties.getRequiredProperty("jdbc.driver");
		try {
			Class.forName(driver);
		} catch (ClassNotFoundException e) {
			throw new RuntimeException("not found jdbc driver class:["+driver+"]",e);
		}
	}
	
	public synchronized static DbTableFactory getInstance() {
		if(instance == null) instance = new DbTableFactory();
		return instance;
	}
	
	public String getCatalog() {
		return GeneratorProperties.getNullIfBlank("jdbc.catalog");
	}

	public String getSchema() {
		return GeneratorProperties.getNullIfBlank("jdbc.schema");
	}

	/**
	 * 获取链接
	 * @return
	 * @throws SQLException
	 */
	public Connection getConnection() throws SQLException {
		if(connection == null || connection.isClosed()) {
			connection = DriverManager.getConnection(GeneratorProperties.getRequiredProperty("jdbc.url"),GeneratorProperties.getRequiredProperty("jdbc.username"),GeneratorProperties.getProperty("jdbc.password"));
		}
		return connection;
	}

	public List getAllTables() throws Exception {
		Connection conn = getConnection();
		return getAllTables(conn);
	}
	
	/**
	 * 获取表格
	 * @param sqlTableName
	 * @return
	 * @throws Exception
	 */
	public Table getTable(String sqlTableName) throws Exception {
		Table t = _getTable(sqlTableName);
		if(t == null && !sqlTableName.equals(sqlTableName.toUpperCase())) {
			t = _getTable(sqlTableName.toUpperCase());
		}
		if(t == null && !sqlTableName.equals(sqlTableName.toLowerCase())) {
			t = _getTable(sqlTableName.toLowerCase());
		}
//		System.out.println("这是获取的："+t.getPrimaryKeyColumns().get(0));
		if(t == null) {
			throw new RuntimeException("not found table with give name:"+sqlTableName);
		}
		return t;
	}

	/**
	 * 获取单一表格
	 * @param sqlTableName
	 * @return
	 * @throws SQLException
	 */
	private Table _getTable(String sqlTableName) throws SQLException {
		Connection conn = getConnection();
		DatabaseMetaData dbMetaData = conn.getMetaData();
		ResultSet rs = dbMetaData.getTables(getCatalog(), getSchema(), sqlTableName, null);
		while(rs.next()) {
			Table table = createTable(conn, rs);
			return table;
		}
		return null;
	}

	/**
	 * 创建表格
	 * @param conn
	 * @param rs
	 * @return
	 * @throws SQLException
	 */
	private Table createTable(Connection conn, ResultSet rs) throws SQLException {
		String realTableName = null;
		try {
			ResultSetMetaData rsMetaData = rs.getMetaData();//获取表结构
			String schemaName = rs.getString("TABLE_SCHEM") == null ? "" : rs.getString("TABLE_SCHEM");
			realTableName = rs.getString("TABLE_NAME");
			String tableType = rs.getString("TABLE_TYPE");
			String remarks = rs.getString("REMARKS");
			if(remarks == null && isOracleDataBase()) {
				remarks = getOracleTableComments(realTableName);
			}
			
			Table table = new Table();
			table.setSqlName(realTableName);
			table.setRemarks(remarks);
			
			if ("SYNONYM".equals(tableType) && isOracleDataBase()) {
			    table.setOwnerSynonymName(getSynonymOwner(realTableName));
			}
			
			retriveTableColumns(table);
			//输入Keys
			table.initExportedKeys(conn.getMetaData());
			//输入Keys
			table.initImportedKeys(conn.getMetaData());
			return table;
		}catch(SQLException e) {
			throw new RuntimeException("create table object error,tableName:"+realTableName,e);
		}
	}
	
	private List getAllTables(Connection conn) throws SQLException {
		DatabaseMetaData dbMetaData = conn.getMetaData();
		ResultSet rs = dbMetaData.getTables(getCatalog(), getSchema(), null, null);
		List tables = new ArrayList();
		while(rs.next()) {
			Table table = createTable(conn, rs);
			System.out.println("1111111111111");
			tables.add(table);
		}
		return tables;
	}

	private boolean isOracleDataBase() {
		boolean ret = false;
		try {
			ret = (getMetaData().getDatabaseProductName().toLowerCase()
					.indexOf("oracle") != -1);
		} catch (Exception ignore) {
		}
		return ret;
	}
	   
   private String getSynonymOwner(String synonymName)  {
	      PreparedStatement ps = null;
	      ResultSet rs = null;
	      String ret = null;
	      try {
	         ps = getConnection().prepareStatement("select table_owner from sys.all_synonyms where table_name=? and owner=?");
	         ps.setString(1, synonymName);
	         ps.setString(2, getSchema());
	         rs = ps.executeQuery();
	         if (rs.next()) {
	            ret = rs.getString(1);
	         }
	         else {
	            String databaseStructure = getDatabaseStructureInfo();
	            throw new RuntimeException("Wow! Synonym " + synonymName + " not found. How can it happen? " + databaseStructure);
	         }
	      } catch (SQLException e) {
	         String databaseStructure = getDatabaseStructureInfo();
	         GLogger.error(e.getMessage(), e);
	         throw new RuntimeException("Exception in getting synonym owner " + databaseStructure);
	      } finally {
	         if (rs != null) {
	            try {
	               rs.close();
	            } catch (Exception e) {
	            }
	         }
	         if (ps != null) {
	            try {
	               ps.close();
	            } catch (Exception e) {
	            }
	         }
	      }
	      return ret;
	   }
   
   private String getDatabaseStructureInfo() {
	      ResultSet schemaRs = null;
	      ResultSet catalogRs = null;
	      String nl = System.getProperty("line.separator");
	      StringBuffer sb = new StringBuffer(nl);
	      // Let's give the user some feedback. The exception
	      // is probably related to incorrect schema configuration.
	      sb.append("Configured schema:").append(getSchema()).append(nl);
	      sb.append("Configured catalog:").append(getCatalog()).append(nl);

	      try {
	         schemaRs = getMetaData().getSchemas();
	         sb.append("Available schemas:").append(nl);
	         while (schemaRs.next()) {
	            sb.append("  ").append(schemaRs.getString("TABLE_SCHEM")).append(nl);
	         }
	      } catch (SQLException e2) {
	         GLogger.warn("Couldn't get schemas", e2);
	         sb.append("  ?? Couldn't get schemas ??").append(nl);
	      } finally {
	         try {
	            schemaRs.close();
	         } catch (Exception ignore) {
	         }
	      }

	      try {
	         catalogRs = getMetaData().getCatalogs();
	         sb.append("Available catalogs:").append(nl);
	         while (catalogRs.next()) {
	            sb.append("  ").append(catalogRs.getString("TABLE_CAT")).append(nl);
	         }
	      } catch (SQLException e2) {
	         GLogger.warn("Couldn't get catalogs", e2);
	         sb.append("  ?? Couldn't get catalogs ??").append(nl);
	      } finally {
	         try {
	            catalogRs.close();
	         } catch (Exception ignore) {
	         }
	      }
	      return sb.toString();
    }
	   
	private DatabaseMetaData getMetaData() throws SQLException {
		return getConnection().getMetaData();
	}
	/**
	 * 检索表格属性（包括字段）
	 * @param table
	 * @throws SQLException
	 */
	private void retriveTableColumns(Table table) throws SQLException {
	      GLogger.debug("-------setColumns(" + table.getSqlName() + ")");

	      List primaryKeys = getTablePrimaryKeys(table);
	      table.setPrimaryKeyColumns(primaryKeys);
	      
	      // get the indices and unique columns指数和独特的列
	      List indices = new LinkedList();
	      // maps index names to a list of columns in the index索引名称映射到列索引的列表
	      Map uniqueIndices = new HashMap();
	      // maps column names to the index name.列名称映射到索引名称
	      Map uniqueColumns = new HashMap();
	      ResultSet indexRs = null;

	      try {

	         if (table.getOwnerSynonymName() != null) {
	            indexRs = getMetaData().getIndexInfo(getCatalog(), table.getOwnerSynonymName(), table.getSqlName(), false, true);
	         }
	         else {
	            indexRs = getMetaData().getIndexInfo(getCatalog(), getSchema(), table.getSqlName(), false, true);
	         }
	         while (indexRs.next()) {
	            String columnName = indexRs.getString("COLUMN_NAME");
	            if (columnName != null) {
	               GLogger.debug("index:" + columnName);
	               indices.add(columnName);//好像是获取了所有的列的参数
	            }

	            // now look for unique columns
	            String indexName = indexRs.getString("INDEX_NAME");
	            boolean nonUnique = indexRs.getBoolean("NON_UNIQUE");

	            if (!nonUnique && columnName != null && indexName != null) {
	               List l = (List)uniqueColumns.get(indexName);
	               if (l == null) {
	                  l = new ArrayList();
	                  uniqueColumns.put(indexName, l);
	               }
	               l.add(columnName);
	               uniqueIndices.put(columnName, indexName);
	               GLogger.debug("unique:" + columnName + " (" + indexName + ")");
	            }
	         }
	      } catch (Throwable t) {
	         // Bug #604761 Oracle getIndexInfo() needs major grants
	         // http://sourceforge.net/tracker/index.php?func=detail&aid=604761&group_id=36044&atid=415990
	      } finally {
	         if (indexRs != null) {
	            indexRs.close();
	         }
	      }

	      List columns = getTableColumns(table, primaryKeys, indices, uniqueIndices, uniqueColumns);

	      for (Iterator i = columns.iterator(); i.hasNext(); ) {
	         Column column = (Column)i.next();
	         table.addColumn(column);
	      }

	      // In case none of the columns were primary keys, issue a warning.
	      if (primaryKeys.size() == 0) {
	         GLogger.warn("WARNING: The JDBC driver didn't report any primary key columns in " + table.getSqlName());
	      }
	}

	/**
	 * 获取表的字段信息
	 * @param table
	 * @param primaryKeys
	 * @param indices
	 * @param uniqueIndices
	 * @param uniqueColumns
	 * @return
	 * @throws SQLException
	 */
	private List getTableColumns(Table table, List primaryKeys, List indices, Map uniqueIndices, Map uniqueColumns) throws SQLException {
		// get the columns
	      List columns = new LinkedList();
	      ResultSet columnRs = getColumnsResultSet(table);
	     
	      while (columnRs.next()) {
	         int sqlType = columnRs.getInt("DATA_TYPE");
	         String sqlTypeName = columnRs.getString("TYPE_NAME");
	         String columnName = columnRs.getString("COLUMN_NAME");
	         String columnDefaultValue = columnRs.getString("COLUMN_DEF");
	         System.out.println("55555555555555555555:"+columnName);
	         
	         String remarks = columnRs.getString("REMARKS");
	        
	         if(remarks == null && isOracleDataBase()) {
	        	 remarks = getOracleColumnComments(table.getSqlName(), columnName);
	         }
//	         DateUtil dateUtil = new DateUtil();
	         String decodeUnicode = DateUtil.gbEncoding(remarks);//获取备注信息
	         String nowData = DateUtil.getDate("yyyy-MM-dd");
	         // if columnNoNulls or columnNullableUnknown assume "not nullable"
	         boolean isNullable = (DatabaseMetaData.columnNullable == columnRs.getInt("NULLABLE"));
//	     	System.out.println("45465445666666666666666666:"+isNullable);
	         int size = columnRs.getInt("COLUMN_SIZE");
	         int decimalDigits = columnRs.getInt("DECIMAL_DIGITS");

	         boolean isPk = primaryKeys.contains(columnName);
	         boolean isIndexed = indices.contains(columnName);
	         String uniqueIndex = (String)uniqueIndices.get(columnName);
	         List columnsInUniqueIndex = null;
	         if (uniqueIndex != null) {
	            columnsInUniqueIndex = (List)uniqueColumns.get(uniqueIndex);
	         }

	         boolean isUnique = columnsInUniqueIndex != null && columnsInUniqueIndex.size() == 1;
	         if (isUnique) {
	            GLogger.debug("unique column:" + columnName);
	         }
	         Column column = new Column(
	               table,
	               sqlType,
	               sqlTypeName,
	               columnName,
	               size,
	               decimalDigits,
	               isPk,
	               isNullable,
	               isIndexed,
	               isUnique,
	               columnDefaultValue,
	               remarks,
	               decodeUnicode,
	               nowData);
	         columns.add(column);
	    }
	    columnRs.close();
		return columns;
	}

	private ResultSet getColumnsResultSet(Table table) throws SQLException {
		ResultSet columnRs = null;
	    if (table.getOwnerSynonymName() != null) {
	         columnRs = getMetaData().getColumns(getCatalog(), table.getOwnerSynonymName(), table.getSqlName(), null);
	    } else {
	         columnRs = getMetaData().getColumns(getCatalog(), getSchema(), table.getSqlName(), null);
	    }
		return columnRs;
	}
	/**
	 * 获取主键外键等？
	 * @param table
	 * @return
	 * @throws SQLException
	 */
	private List<String> getTablePrimaryKeys(Table table) throws SQLException {
		// get the primary keys
	      List primaryKeys = new LinkedList();
	      ResultSet primaryKeyRs = null;
	      //获取同意名字
	      if (table.getOwnerSynonymName() != null) {
	         primaryKeyRs = getMetaData().getPrimaryKeys(getCatalog(), table.getOwnerSynonymName(), table.getSqlName());
	      }
	      else {
	         primaryKeyRs = getMetaData().getPrimaryKeys(getCatalog(), getSchema(), table.getSqlName());
	      }
	      while (primaryKeyRs.next()) {
	         String columnName = primaryKeyRs.getString("COLUMN_NAME");
	         System.out.println("This is primaryKeys:"+columnName);
	         GLogger.debug("primary key:" + columnName);
	         primaryKeys.add(columnName);
	      }
	      primaryKeyRs.close();
		return primaryKeys;
	}

	private String getOracleTableComments(String table)  {
		String sql = "SELECT comments FROM user_tab_comments WHERE table_name='"+table+"'";
		return queryForString(sql);
	}

	private String queryForString(String sql) {
		Statement s = null;
		ResultSet rs = null;
		try {
			s =  getConnection().createStatement();
			rs = s.executeQuery(sql);
			if(rs.next()) {
				return rs.getString(1);
			}
			return null;
		}catch(SQLException e) {
			e.printStackTrace();
			return null;
		}finally {
			try {
				if(s != null)
					s.close();
				if(rs != null) rs.close();
			} catch (SQLException e) {
			}
		}
	}
	
	private String getOracleColumnComments(String table,String column)  {
		String sql = "SELECT comments FROM user_col_comments WHERE table_name='"+table+"' AND column_name = '"+column+"'";
		return queryForString(sql);
	}
	
}