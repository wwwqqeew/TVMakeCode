<#include "/macro.include"/>
<#include "/java_copyright.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first> 
(function($, exports) {
	
	<#assign dt=30 baseH=136>
	<#list table.columns as column>
	<#if !column.pk>
	<#assign baseH=(dt+baseH)>
	</#if >
	</#list>
		var PopuWndHeight = ${baseH};
	var PopuWndWidth = 726;
	var PopuWndURL = "edit${classNameLower}";
	var PopuWndTitle = "${table.columns[0].columnAlias}";

	var module = new exports.Module(exports.baseSetting.getModule("${className}Management"));
	module.$content = module.item.con.$content;
	module.showData = function(data) {
		var html = "";
		for ( var i = 0; i < data.length; i++) {
			html += this.buildTr(data[i], this.isSingle(i), i);
		}
		this.item.con.$content.find(".item-result-show tbody").html(html);
		this.tbodyTrHover();
	};
	
	module.buildTr = function(data, isSingle, index) {
		return "<tr indextab='" + index + "' class='"
				+ (isSingle == true ? "single" : "double") + "'><td>" + (index+1 || "") 
				+ "</td><td><input type='checkbox' class='checkboxId' alt='"
				+ data.id + "'></td>"
				<#list table.columns as column>
		          <#if !column.pk>
				+ "<td>" + (data.${column.columnNameLower} || "") 
				  </#if>
				</#list>
				+ "</td><td> <input class='modify' type='button'  alt='"
				+ data.<#list table.columns as column><#if (column.pk)>${column.columnNameLower}</#if></#list> + "'> <input class='delete' type='button'  alt='"
				+ data.<#list table.columns as column><#if (column.pk)>${column.columnNameLower}</#if></#list>+ "'></td></tr>";
	};
	module.isSingle = function(i) {
		return i % 2 == 0 ? true : false;
	};

	module.initRefresh = function() {
		this.item.con.$content.find(".refresh").click($.proxy(function() {
			this.requestData(1);
			alert("刷新完成");
		}, this));
	};
	
	module.buttonUser = function() {
		this.item.con.$content.find(".item-result-operate-left").click($.proxy(function(e) {
			var $target = $(e.target || e.srcElement);var alt = $target.attr("class");
			var str = "";
			if (alt == "delete-operate") {
				if(confirm("是否删除")){
				$(".checkboxId").each(function() {
					if ($(this).is(':checked')) {
						str += $(this).attr("alt") + " ,";
					}
				});
				this.deleteByIdList(this.deleteLastChar(str, ","));}
			} else if (alt == "edit") {
				
			}
		}, this));
		
	};
	
    
	module.initOperate = function() {
		this.item.con.$content.find("tbody").click($.proxy(function(e) {
			var $target = $(e.target || e.srcElement);
			if ($target.attr("class") == "delete") {
				  if(confirm("是否删除")){
				    	this.deleteOne($target);
				      }
			} else if ($target.attr("class") == "modify") {
				this.fidnOneByid($target);
			}else if ($target.attr("class") == "show-one-${classNameLower} show-entity") {
				this.showOne($target);
			}
		}, this));
	};

	module.initRefresh = function() {
		this.item.con.$content.find(".refresh").click($.proxy(function() {
			this.requestData(1);
		}, this));
	};

	module.initPageButton = function() {
		module.pageButton = new PageButton(this.item.con.$content.find("#item-result-pages"), 1, 1, 5);
		this.pageButton.init();
		this.pageButton.click($.proxy(function(page) {
			module.requestData(page);
		}), this);
	};

	module.init = function() {
		this.initEditTable();
		this.initRefresh();
		this.initOperate();
		this.initPageButton();
		this.requestData(1);
		this.doAllSelect();
		this.buttonUser();
		this.schBtnClick();
	};
	
	module.deleteByIdList = function(idList) {
		module.doDeleteByIdList(idList);
		this.requestData(1);
	};
	
	module.requestData = function(page){
		var dateG = {};
		dateG = this.searchAll(page);
		this.showData(dateG.data);
		this.pageButton.setButton(dateG.page, dateG.totalPages, 5);
	};

	module.deleteData = function(id) {
		this.doDeletes(id);
		this.requestData(1);
	};
	
	module.deleteOne = function($target) {
		this.deleteData($target.attr('alt'));
	};

	module.schBtnClick = function(){
		this.$content.find(".sch-p-${classNameLower}").click(function(){
			module.findByPropertys();
		});
	};
	
	module.pageButtonClickSch = function(data){
		this.pageButton.click($.proxy(function(page) {
		module.findByPropertys(page);
		}),this);
	};

	module.findByPropertys = function(page){
		var data = {};
		data.page = (page || this.pageButton.page ||1);
		<#list table.columns as column>
		<#if !column.pk>
			<#if (column.sqlTypeName == "datetime")>
		data.${column.columnNameLower} = $.trim(this.$content.find(".sch-${column.columnNameLower}").val());
		data.${column.columnNameLower}_max = $.trim(this.$content.find(".sch-${column.columnNameLower}_max").val());
			<#else>
			data.${column.columnNameLower} = $.trim(this.$content.find(".sch-${column.columnNameLower}").val());
			</#if>
		</#if>
		</#list>
		$.ajax({
			type : "POST",
			url : "${classNameLower}management/findByPropertys",
			dataType : "json",
			data : $.toJSON(data),
			contentType : 'application/json;charset=UTF-8',
			success : $.proxy(function(obj) {
				if (obj.success) {
					this.showData(obj.data);
					this.pageButton.setButton(obj.page, obj.totalPages, 6);
				} else {
					alert("请求失败！");
				}
			}, this),
			error : function(msg) {
    			alert("由于网络或服务器问题，暂时无法获取数据！\n若一直出现这个提示，请联系管理员！\n ${classNameLower}management/findByPropertys");
    		}
		});
		
	};
	
	module.fidnOneByid = function($target) {
		var _wnd = new PopuWnd({
			title : "修改" + PopuWndTitle,
			url : PopuWndURL,
			width : PopuWndWidth,
			height : PopuWndHeight,
			id : $target.attr("alt"),
			alt : "edit"
		});
		_wnd.init(true);
	};
	
	module.showOne = function($target) {
		var _wnd = new PopuWnd({
			title : "查看" + PopuWndTitle,
			url : PopuWndURL,
			width : PopuWndWidth,
			height : PopuWndHeight,
			id : $target.attr("alt"),
			alt : "show"
		});
		_wnd.init(true);
	};

	module.initEditTable = function() {
		var _wnd = new PopuWnd({
			title : "新增" + PopuWndTitle,
			url : PopuWndURL,
			width : PopuWndWidth,
			height : PopuWndHeight
		});
		this.item.con.$content.find(".add-${classNameLower}").click(function() {
			_wnd.init(true);
		});
	};

	module.refeshMe = function(){
		this.requestData(1);
	};
	
	module.init();
	
	exports.baseSetting.getModule("${className}Management").module = module;

})(jQuery, window);