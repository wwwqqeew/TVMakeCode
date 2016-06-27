// JavaScript Document
//居中打开一个新的窗口
function openNewWindow(url,name,iWidth,iHeight)
{
    var url;                             //转向网页的地址;
    var name;                            //网页名称，可为空;
    var iWidth;                          //弹出窗口的宽度;
    var iHeight;                         //弹出窗口的高度;
    //获得窗口的垂直位置
    var iTop = (window.screen.availHeight-30-iHeight)/2;        
    //获得窗口的水平位置
    var iLeft = (window.screen.availWidth-10-iWidth)/2;           
    window.open(url,name,'height='+iHeight+',,innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes,titlebar=no');
}
//检查一个字段是否为空
function checkEmpty(obj, msg, minlen, maxlen) {
	//alert("checkEmpty " + obj.value + "  " + msg);
	if (obj.value == "" || obj.value == " ") {
		alert("请输入【"+msg+"】");
		obj.select();
		obj.focus();
		return false;
	}
	if (arguments.length>1 && obj.value.length<minlen) {
		alert(msg+"：长度不能小于"+minlen);
		obj.select();
		obj.focus();
		return false;
	}
	if (arguments.length>2 && obj.value.length>maxlen) {
		alert(msg+"：长度不能大于"+maxlen);
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}
//检查一个选择是否为空
function checkSelectEmpty(obj, msg) {
	//alert("checkEmpty " + obj.value + "  " + msg);
	if (obj.value == "" || obj.value == " ") {
		alert("请选择【"+msg+"】");
		return false;
	}
	return true;
}
//检查一个字符串是否是一个有效的日期
function checkDate(obj, msg, minv, maxv) {
	if (obj.value == "" || obj.value == " ") {
		alert("请输入【"+msg+"】");
		doDateSelect(obj);
		obj.focus();
		return false;
	}
	if (!isDateString(obj.value.substring(0, 10))) {
		alert("请输入【"+msg+"】\r\n"+obj.value+" 不是有效的日期或者格式不正确\r\n正确的格式是yyyy-mm-dd或者yyyy/mm/dd");
		doDateSelect(obj);
		obj.focus();
		return false;
	}
	//alert(msg + "\r\n" + minv + "\r\n" + maxv); 
	if (arguments.length>=3 && compareDate(minv, obj.value)) {
		alert("请输入【"+msg+"】\r\n"+"日期不能小于 "+minv);
		doDateSelect(obj);
		obj.focus();
		return false;
	}
	if (arguments.length>=4 && compareDate(obj.value, maxv)) {
		alert("请输入【"+msg+"】\r\n"+"日期不能大于 "+maxv);
		doDateSelect(obj);
		obj.focus();
		return false;
	}
	return true;
}
//检验一个数字是否在指定的范围之内，范围可以不指定，也可以只指定最小值
function checkNumber(obj, msg, minv, maxv) {
	//alert("checkNumber  " + obj.value + "  " + msg);
	if (checkEmpty(obj, msg)) {
		v = parseFloat(obj.value);
		if (!isFinite(v)) {
			alert(msg+" 需要输入有效的数字");
			obj.select();
			obj.focus();
			return false;
		}
		if (arguments.length>2 && v<minv) {
			alert(msg+" 不能够小于"+minv+",请重新输入");
			obj.select();
			obj.focus();
			return false;
		}
		if (arguments.length>3 && v>maxv) {
			alert(msg+" 不能够大于"+maxv+",请重新输入");
			obj.select();
			obj.focus();
			return false;
		}
		return true;
	}
	return false;
}
//检验一个所输入的字符是否是数字,数字带小数点
function checkNumber2(obj, msg, minv, maxv) {
	if (obj.value != "") {
		v = parseFloat(obj.value);
		if (!isFinite(v) || !isNumber(obj, msg)) {
			alert(msg+" 需要输入有效的数字");
			obj.select();
			obj.focus();
			return false;
		}
		if (arguments.length>2 && v<minv) {
			alert(msg+" 不能够小于"+minv+",请重新输入");
			obj.select();
			obj.focus();
			return false;
		}
		if (arguments.length>3 && v>maxv) {
			alert(msg+" 不能够大于"+maxv+",请重新输入");
			obj.select();
			obj.focus();
			return false;
		}
		return true;
	} else {
		obj.value = 0;
	}
	return true;
}
//检验一个所输入的字符是否是整数,整数不能以0开头
function checkInteger(obj, msg, minv, maxv) {
	if (obj.value != "") {
		v = parseFloat(obj.value);
		if (!isFinite(v) || !isInteger(obj, msg)) {
			alert(msg+" 需要输入有效的整数");
			obj.select();
			obj.focus();
			return false;
		}
		if (arguments.length>2 && v<minv) {
			alert(msg+" 不能够小于"+minv+",请重新输入");
			obj.select();
			obj.focus();
			return false;
		}
		if (arguments.length>3 && v>maxv) {
			alert(msg+" 不能够大于"+maxv+",请重新输入");
			obj.select();
			obj.focus();
			return false;
		}
		return true;
	} else {
		obj.value = 0;
	}
	return true;
}
//
function deleteCheckBox(obj) {
	if (obj == null || (obj.length == null && !obj.checked)) {
		alert("没有可删除项");
		return false;
	}
	var b = false;
	if (obj.length == null) {
		b = obj.checked;
	} else {
		for (i=0; i<obj.length; i++) {
			b = true;
			b = b && obj[i].checked;
			if (b == true) {
				break;
			}
		}
	}
	if (b == false) {
		alert("请选择需要删除的记录");
		return false;
	}
	if (!confirm("你确定需要删除这些记录吗，删除以后将不能恢复。")) {
		return false;
	}
	return true;
}