<#include "/custom.include">
<#include "/java_copyright.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign actionExtension = "do">
//package ${basepackage}.action;
package ${basepackage}.action;

import org.eclipse.swt.widgets.Composite;

import com.gxuwz.back_stage.acp_food.model.AcpFoodBigcls;

public class ${className} extends Composite{
	
	private ${className} ${classNameLower};
	
	<#list table.columns as column>
	public ${column.javaType} ${column.columnNameFirstLower};
	</#list>
	private Table ${className}Table;// 表格控件
	private TableViewer tableViewer;
	private List testList;// 大类的List数组
	
	public ${className}(Composite parent, int style) {
		super(parent, SWT.NONE);
		init();
	}
	
	// 初始化
	private void init() {
		// 表单部分
		createForm();
		// 创建表格控件
		createTable();
		// 为表控件添加监听器
		addTableListener();
	}
	private void createForm() {
		setLayout(new RowLayout(SWT.HORIZONTAL));
		<#list table.columns as column>
		Label ${classNameLower}${column.columnName} = new Label(this, SWT.NONE);
		${classNameLower}${column.columnName}.setText("${column.columnName}");
		11111111199999${column.jdbcSqlTypeName}
		</#list>


		<#list table.columns as column>
		<#if column.jdbcSqlTypeName=='VARCHAR'>
		${column.columnNameFirstLower} = new CCombo(this, SWT.BORDER | SWT.READ_ONLY);
		${column.columnNameFirstLower}.setBackground(SWTResourceManager.getColor(SWT.COLOR_WHITE));
		${column.columnNameFirstLower}.setFont(SWTResourceManager.getFont("宋体", 16, SWT.BOLD));
		// 示例数据，暂时不从数据库中读出显示
		gzbArea.setItems(new String[] { "${column.columnNameFirstLower}1", "${column.columnNameFirstLower}2" });
		<#elseif column.size == 46||column.size == 45||column.size == 44>
		
		<#elseif column.isNumberColumn>
		
		<#else>
	
		</#if>
		</#list>
		gzbArea = new CCombo(this, SWT.BORDER | SWT.READ_ONLY);
		gzbArea.setBackground(SWTResourceManager.getColor(SWT.COLOR_WHITE));
		gzbArea.setBounds(75, 83, 166, 25);
		gzbArea.setFont(SWTResourceManager.getFont("宋体", 16, SWT.BOLD));
		// 示例数据，暂时不从数据库中读出显示
		gzbArea.setItems(new String[] { "店1", "店3" });

		acpFoodBigClsId = new Text(this, SWT.BORDER);
		acpFoodBigClsId.setBackground(SWTResourceManager
				.getColor(SWT.COLOR_WHITE));
		acpFoodBigClsId.setBounds(76, 10, 84, 25);
//		StyleRange styleRange = new StyleRange();
//		styleRange.underline = true;
//		acpFoodBigClsId.setStyleRange(styleRange);
		// 设置文本的最大输入长度
		acpFoodBigClsId.setTextLimit(4);
		acpFoodBigClsId.setFont(SWTResourceManager.getFont("宋体", 16, SWT.BOLD));

		acpFoodBigClsName = new Text(this, SWT.BORDER);
		acpFoodBigClsName.setBackground(SWTResourceManager
				.getColor(SWT.COLOR_WHITE));
		acpFoodBigClsName.setBounds(76, 45, 165, 25);
//		acpFoodBigClsName.setStyleRange(styleRange);
		acpFoodBigClsName.setTextLimit(30);
		acpFoodBigClsName.setFont(SWTResourceManager
				.getFont("宋体", 16, SWT.BOLD));
		// 初始化为不可编辑
		setDisabled();
	}
	//get和set方法
	<@generateGetAndSet/>
<#macro generateGetAndSet>
	<#list table.columns as column>
	public ${column.javaType} get${column.columnName}(){
		return ${column.columnNameLower};
	}
	public void set${column.columnName}(${column.javaType} ${column.columnNameLower}){
		return this.${column.columnNameLower} = ${column.columnNameLower};
	}
	</#list>
</#macro>
	
}

