var mid = 0;
var popmid =0;
var href = "pager.offset=0";
function menuAction(param) {
	mid = param;
	loadMessageStart();
	$.ajax({
		url : "mainpage_index.do",
		type : "post",
		data : param,
		dataType : "html",
		success : function(data) {
			href = "pager.offset=0";
			refreshContentPage(data);
			loadMessageEnd();
		},
		error : function(data) {
		}
	});

}

function commonFormSubmit(menuId) {
	var datas = $("#form").serialize();
	$.ajax({
		url : "mainpage_index.do",
		type : "post",
		data : datas + "&menuId=" + menuId,
		dataType : "html",
		success : function(data) {
			refreshContentPage(data);
		},
		error : function(data) {
		}
	});
}
function refreshContentPage(data) {
	document.getElementById("contentPage").innerHTML = data;

	$(".pagination a").on("click", function() {
		href = $(this).attr("href").split("?")[1];
		var datas = "";
		if (undefined != $("#form")) {
			datas = $("#form").serialize() + "&";
		}
		$(this).attr("href", "javascript:void(0);");
		$.ajax({
			url : "mainpage_index.do",
			type : "post",
			data : datas + mid + "&" + href + "&obj=page",
			dataType : "html",
			success : function(data) {
				refreshContentPage(data);
			}
		});
	});
	setBtnDeleteFunc();
	setBtnUpdateViewFunc();
	setBtnAddViewFunc();
	setBtnAddFunc();
	setBtnCancelFunc();
	setBtnUpdateFunc();
	setBtnCheckQuotaUniqueness();
	setBtnSearchFunc();// /
	setBtnSaleFunc();
	setBtnUnSaleFunc();
	setBtnQuerycheckFunc();
	setBtnShipFunc();
	setBtnUnShipFunc();
	changeOrderByAmountHead();
	changeOrderByTotalPriceHead();
	changeOrderType();
	checkEmpty();
	timepick();
	btnUserPicker();
	btnDeptPicker();
	prvenceChange();
	dqChange();
	PickerProvinceChange();
	PickerDqChange();
	tb_pick();
	theLocation();
	graphBar2();
	graphListDraw();
	charSet();
	jumpToSaleDetailPopUp();
	jumpToPerTrackPopUp();
	setBtnPushMessage();
}
function setBtnShipFunc() {
	$(".btnShip").on("click", function() {
		if (window.confirm("您确定要发货吗？")) {
			var tbid = $(this).attr("tbid");
			$.ajax({
				url : "mainpage_action.do",
				type : "post",
				data : mid + "&actionName=ship",
				dataType : "json",
				success : function(data) {
					var dataObj = eval("(" + data + ")");
					productShipAndUnShip(dataObj.m_id, tbid, mid, href, true);
				}
			});
			$(this).attr("href", "javascript:void(0);");
		}
	});
}
function setBtnUnShipFunc() {
	$(".btnUnShip").on("click", function() {
		if (window.confirm("您确定要取消发货吗？")) {
			var tbid = $(this).attr("tbid");
			$.ajax({
				url : "mainpage_action.do",
				type : "post",
				data : mid + "&actionName=ship",
				dataType : "json",
				success : function(data) {
					var dataObj = eval("(" + data + ")");
					productShipAndUnShip(dataObj.m_id, tbid, mid, href, false);
				}
			});
			$(this).attr("href", "javascript:void(0);");
		}
	});
}
function setBtnDeleteFunc() {
	$(".btnDelete").on("click", function() {
		if (window.confirm("您确定要删除吗？")) {
			var tbid = $(this).attr("tbid");
			$.ajax({
				url : "mainpage_action.do",
				type : "post",
				data : mid + "&actionName=delete",
				dataType : "json",
				success : function(data) {
					var dataObj = eval("(" + data + ")");
					deleteData(dataObj.m_id, tbid, mid, href);
				}
			});
			$(this).attr("href", "javascript:void(0);");
		}
	});
}
function setBtnUpdateViewFunc() {
	$(".btnUpdateView").on("click", function() {
		var tbid = $(this).attr("tbid");
		$.ajax({
			url : "mainpage_action.do",
			type : "post",
			data : mid + "&actionName=updateView",
			dataType : "json",
			success : function(data) {
				var dataObj = eval("(" + data + ")");
				updateData(dataObj.m_id, tbid, dataObj.m_url);
			}
		});
		$(this).attr("href", "javascript:void(0);");
	});
}
function setBtnAddViewFunc() {
	$(".btnAddView").on("click", function() {
		var tbid = $(this).attr("tbid");
		$.ajax({
			url : "mainpage_action.do",
			type : "post",
			data : mid + "&actionName=addView",
			dataType : "json",
			success : function(data) {
				var dataObj = eval("(" + data + ")");
				var url = dataObj.m_url;
				if (url == undefined || "" == url) {
					menuAction("menuId=" + dataObj.m_id);
				} else {
					menuAction("menuId=" + dataObj.m_id + "&" + url);
				}
			}
		});
		$(this).attr("href", "javascript:void(0);");
	});
}
function setBtnAddFunc() {
	$(".btnAdd").on("click", function() {
		$('.che_empt').blur();
		if (!$('.form-group').hasClass('has-error')) {
			var tbid = $(this).attr("tbid");
			$(this).attr("disabled", "true");
			$.ajax({
				url : "mainpage_action.do",
				type : "post",
				data : mid + "&actionName=add",
				dataType : "json",
				success : function(data) {
					var dataObj = eval("(" + data + ")");
					commonFormSubmit(dataObj.m_id);
				},
				error : function() {
					$(this).removeAttr("disabled");
				}
			});
			$(this).attr("href", "javascript:void(0);");
		}
	});
}
function setBtnUpdateFunc() {
	$(".btnUpdate").on("click", function() {
		$('.che_empt').blur();
		if (!$('.form-group').hasClass('has-error')) {
			var tbid = $(this).attr("tbid");
			$(this).attr("disabled", "true");
			$.ajax({
				url : "mainpage_action.do",
				type : "post",
				data : mid + "&actionName=update",
				dataType : "json",
				success : function(data) {
					var dataObj = eval("(" + data + ")");
					commonFormSubmit(dataObj.m_id);
				},
				error : function(data) {
					$(this).removeAttr("disabled");
				}

			});
			$(this).attr("href", "javascript:void(0);");
		}
	});
}
function setBtnCancelFunc() {
	$(".btnCancel").on("click", function() {
		var tbid = $(this).attr("tbid");
		$.ajax({
			url : "mainpage_action.do",
			type : "post",
			data : mid + "&actionName=index",
			dataType : "json",
			success : function(data) {
				var dataObj = eval("(" + data + ")");
				var url = dataObj.m_url;
				if (url == undefined || "" == url) {
					menuAction("menuId=" + dataObj.m_id);
				} else {
					menuAction("menuId=" + dataObj.m_id + "&" + url);
				}
			}
		});
		$(this).attr("href", "javascript:void(0);");
	});
}
function setBtnSearchFunc() {
	$(".btnSearch").on("click", function() {
		$.ajax({
			url : "mainpage_action.do",
			type : "post",
			data : mid + "&actionName=index",
			dataType : "json",
			success : function(data) {
				var dataObj = eval("(" + data + ")");
				commonFormSubmit(dataObj.m_id + "&" + dataObj.m_url);
			}
		});
		$(this).attr("href", "javascript:void(0);");
	});
}
function deleteData(menuId, tbid, indexId, offset) {
	$.ajax({
		url : "mainpage_index.do",
		type : "post",
		data : "menuId=" + menuId + "&tbId=" + tbid,
		dataType : "html",
		success : function(data) {
			refresh(indexId, offset);
		},
		error : function(data) {
		}
	});
}
function productShipAndUnShip(menuId, tbid, indexId, offset, shipStatus) {
	var shipCode = 0;
	if (shipStatus) {
		shipCode = 1;
	}
	$.ajax({
		url : "mainpage_index.do",
		type : "post",
		data : "menuId=" + menuId + "&productQuota.id=" + tbid
				+ "&productQuota.pq_ship=" + shipCode,
		dataType : "html",
		success : function(data) {
			refresh(indexId, offset);
		},
		error : function(data) {
		}
	});
}
function updateData(menuId, tbid, url) {
	if (null == url || undefined == url || "" == url) {
		$.ajax({
			url : "mainpage_index.do",
			type : "post",
			data : "menuId=" + menuId + "&tbId=" + tbid,
			dataType : "html",
			success : function(data) {
				refreshContentPage(data);
			},
			error : function(data) {
			}
		});
	} else {
		$.ajax({
			url : "mainpage_index.do",
			type : "post",
			data : "menuId=" + menuId + "&tbId=" + tbid + "&" + url,
			dataType : "html",
			success : function(data) {
				refreshContentPage(data);
			},
			error : function(data) {
			}
		});
	}
}
function btn_cancel(menuId, paraments) {

}
function btn_index(menuId) {

}
function refresh(menuId, offset) {
	var datas = "";
	if (undefined != $("#form")) {
		datas = "&"+$("#form").serialize();
	}
	$.ajax({
		url : "mainpage_index.do",
		type : "post",
		data : menuId + "&" + offset + "&obj=page"+datas,
		dataType : "html",
		success : function(data) {
			refreshContentPage(data);
		},
		error : function(data) {
		}
	});
}
function setBtnCheckQuotaUniqueness() {

	var val = null;
	var numLenth = $("#quotaNumber").attr('maxlength');
	$("#quotaNumber")
			.blur(
					function() {
						var check_ = $(this);
						if ($(this).val().length == numLenth) {
							val = $(this).val();
							$(this).parent('.form-group').removeClass(
									'has-error').addClass('has-success');

							$
									.ajax({
										url : "mainpage_checkUniqueness.do",
										type : "post",
										data : "productQuota.pq_number=" + val,
										dataType : "json",
										success : function(data) {
											var dataObj = eval("(" + data + ")");
											if ("UnExist" == dataObj.msg) {
												check_.parent('.form-group')
														.find('.help-block')
														.text("可以使用的号码");
												// $('.help-block').show().html('可以使用的号码')

												document
														.getElementById("btnAdd").style.visibility = "visible";
											} else {
												check_.parent('.form-group')
														.find('.help-block')
														.text("号码已被占用");
												// $('.help-block').show().html('号码已经占用');
												check_.parent('.form-group')
														.removeClass(
																'has-success')
														.addClass('has-error');
												document
														.getElementById("btnAdd").style.visibility = "hidden";
											}
										}
									});

						} else {
							$(this).parent('.form-group').removeClass(
									'has-success').addClass('has-error');
							$(this).parent('.form-group').find('.help-block')
									.text("输入错误，请重新输入");
						}

					});

	$("#quotaNumber").focus(
			function() {

				$(this).parent('.form-group').removeClass('has-error')
						.removeClass('has-success');
				$(this).parent('.form-group').find('.help-block').empty();
			});
	$('.onlyNum').keyup(function() {
		var tmptxt = $(this).val();
		$(this).val(tmptxt.replace(/\D|/g, ''));
	}).bind("paste", function() {
		var tmptxt = $(this).val();
		$(this).val(tmptxt.replace(/\D|/g, ''));
	}).css("ime-mode", "disabled");
}

function saleStatusChange(data) {
	if (data == "已发布") {
		$(".saleMessage").show();
	} else {
		$(".saleMessage").hide();
	}
}
function setBtnSaleFunc() {
	$(".btnSale").on("click", function() {
		if (window.confirm("您确定要发布吗？")) {
			var tbid = $(this).attr("tbid");
			$.ajax({
				url : "mainpage_action.do",
				type : "post",
				data : mid + "&actionName=sale",
				dataType : "json",
				success : function(data) {
					var dataObj = eval("(" + data + ")");
					saleQuota(dataObj.m_id, tbid, mid, href);
				}
			});
		}
	});
}
function setBtnUnSaleFunc() {
	$(".btnUnSale").on("click", function() {
		if (window.confirm("您确定要撤销发布吗？")) {
			var tbid = $(this).attr("tbid");
			$.ajax({
				url : "mainpage_action.do",
				type : "post",
				data : mid + "&actionName=unSales",
				dataType : "json",
				success : function(data) {
					var dataObj = eval("(" + data + ")");
					saleQuota(dataObj.m_id, tbid, mid, href);
				}
			});
		}
	});
}
function saleQuota(menuId, tbid, indexId, offset) {
	$.ajax({
		url : "mainpage_index.do",
		type : "post",
		data : "menuId=" + menuId + "&tbId=" + tbid,
		dataType : "html",
		success : function(data) {
			refresh(indexId, offset);
		},
		error : function(data) {
		}
	});
}

function setBtnQuerycheckFunc() {

	var list_value = null;/* 定义变量 点击的li的value值 */
	$('.radio_state').click(function() {
		list_value = $(this).attr('value')/* 获取li的value值 */

		var par = $(this).parent('div.pmb_right').parent('ul')/* 获取点击的li的父元素ul */
		par.find('input').attr('value', list_value)/* 给当前ul下的input 修改其value值 */
		par.find('li.manage_checked').removeClass('manage_checked');/* 移除已存在的class */
		$(this).addClass('manage_checked');/* 为点击的当前li赋予classs属性 */
	})

}

function checkEmpty() {
	$('.che_empt').blur(
			function() {

				var v = $(this).val();
				if (v == '' || v.indexOf(' ') > -1) {// 判断是否为空或者含有空格
					$(this).parent('.form-group').addClass('has-error');// 为为空或有空格的输入框的复系元素添加error的class属性，改变其样式
					$(this).parent('.form-group').find('.help-block').text(
							"此处为必填项，且不允许有空格")
				} else {
					$(this).parent('.form-group').removeClass('has-error')
							.addClass('has-success');// 若填写正确，则添加成功的class属性
				}
			});
	$('.che_empt').focus(
			function() {

				$(this).parent('.form-group').removeClass('has-error')
						.removeClass('has-success');// 再次添加时，需要移除掉成功和错误的样式
				$(this).parent('.form-group').find('.help-block').empty();// 清除掉输入框下的提示信息

			});
};
function priceChangeByProduct(sel, ind) {
	$("#priceText").val(sel.options[ind].getAttribute("price"));
}
function timepick() {
	$('#exampleTooltip').tooltip();

	// nice select boxes
	$('#sel2').select2();

	$('#sel2Multi').select2({
		placeholder : 'Select a Country',
		allowClear : true
	});

	// masked inputs
	$("#maskedDate").mask("99/99/9999");
	$("#maskedPhone").mask("(999) 999-9999");
	$("#maskedPhoneExt").mask("(999) 999-9999? x99999");
	$("#maskedTax").mask("99-9999999");
	$("#maskedSsn").mask("999-99-9999");

	$("#maskedProductKey").mask("a*-999-a999", {
		placeholder : " ",
		completed : function() {
			alert("You typed the following: " + this.val());
		}
	});

	$.mask.definitions['~'] = '[+-]';
	$("#maskedEye").mask("~9.99 ~9.99 999");

	// datepicker
	$('#datepickerDate').datepicker({
		format : 'yyyy-mm-dd' // 日期格式
	});

	$('#datepickerDateComponent').datepicker();

	// daterange picker
	$('#datepickerDateRange').daterangepicker();

	// timepicker
	$('#timepicker').timepicker({
		minuteStep : 5,
		showSeconds : true,
		showMeridian : false,
		disableFocus : false,
		showWidget : true
	}).focus(function() {
		$(this).next().trigger('click');
	});

	// autocomplete simple
	$('#exampleAutocompleteSimple').typeahead({
		prefetch : '/data/countries.json',
		limit : 10
	});

	// autocomplete with templating
	$('#exampleAutocomplete').typeahead(
			{
				name : 'twitter-oss',
				prefetch : '/data/repos.json',
				template : [ '<p class="repo-language">{{language}}</p>',
						'<p class="repo-name">{{name}}</p>',
						'<p class="repo-description">{{description}}</p>' ]
						.join(''),
				engine : Hogan
			});

	// password strength meter
	$('#examplePwdMeter').pwstrength({
		label : '.pwdstrength-label'
	});

}

function changeDq(pid) {
	$("#queryProvinceId").val(-1);
	$("#queryDeptId").val(-1);
	$
			.ajax({
				url : "mainpage_searchDept.do",
				type : "post",
				data : mid + "&deptPid=" + pid,
				dataType : "json",
				success : function(data) {
					var dataObj = eval("(" + data + ")");
					var innerHtml = '<ul class="list-inline manage" ><li><span>省级部门</span><input type="hidden" name="queryProvinceId" value="-1" id = "queryProvinceId"></li><div class="pmb_right">';
					innerHtml += '<li class="radio_state manage_checked" value="-1" id="2province" >全部</li>';
					for ( var i = 0; i < dataObj.length; i++) {
						innerHtml += '<li class="radio_state" value="'
								+ dataObj[i].d_id + '" id="' + dataObj[i].d_id
								+ '" >' + dataObj[i].d_name + '</li>';
					}
					innerHtml += '</div><div class="clear"></div></ul>';
					$('#provinceDiv').html(innerHtml);
					innerHtml = '<ul class="list-inline manage" ><li><span>事业部　</span><input type="hidden" name="queryDeptId" value="-1" id="queryDeptId"></li><div class="pmb_right">';
					innerHtml += '<li class="radio_state manage_checked" value="-1" id="2province" >全部</li>';
					innerHtml += '</div><div class="clear"></div></ul>';
					$('#deptDiv').html(innerHtml);
					setBtnQuerycheckFunc();
					prvenceChange();
					dqChange();
				},
				error : function(data) {
					var innerHtml = '<ul class="list-inline manage" ><li><span>省级部门</span><input type="hidden" name="queryProvinceId" value="-1"></li><div class="pmb_right">';
					innerHtml += '<li class="radio_state manage_checked" value="-1" id="2province" >全部</li>';
					innerHtml += '</div><div class="clear"></div></ul>';
					$('#provinceDiv').html(innerHtml);
					innerHtml = '<ul class="list-inline manage" ><li><span>事业部　</span><input type="hidden" name="queryDeptId" value="-1"></li><div class="pmb_right">';
					innerHtml += '<li class="radio_state manage_checked" value="-1" id="2province" >全部</li>';
					innerHtml += '</div><div class="clear"></div></ul>';
					$('#deptDiv').html(innerHtml);
					setBtnQuerycheckFunc();
					prvenceChange();
					dqChange();
				}
			});
	setTimeout(function() {
		prvenceChange();
	}, 3000);
}
function changeProvince(pid) {
	$("#queryDeptId").val(-1);
	$
			.ajax({
				url : "mainpage_searchDept.do",
				type : "post",
				data : mid + "&deptPid=" + pid,
				dataType : "json",
				success : function(data) {
					var dataObj = eval("(" + data + ")");
					var innerHtml = '<ul class="list-inline manage" ><li><span>事业部　</span><input type="hidden" name="queryDeptId" value="-1"></li><div class="pmb_right" id="queryDeptId">';
					innerHtml += '<li class="radio_state manage_checked" value="-1" id="2queryDeptId">全部</li>';
					for ( var i = 0; i < dataObj.length; i++) {
						innerHtml += '<li class="radio_state" value="'
								+ dataObj[i].d_id + '" id="' + dataObj[i].d_id
								+ '">' + dataObj[i].d_name + '</li>';
					}
					innerHtml += '</div><div class="clear"></div></ul>';
					$('#deptDiv').html(innerHtml);
					setBtnQuerycheckFunc();
					prvenceChange();
				},
				error : function(data) {
					var innerHtml = '<ul class="list-inline manage" ><li><span>事业部　</span><input type="hidden" name="queryDeptId" value="-1"></li><div class="pmb_right">';
					innerHtml += '<li class="radio_state manage_checked" value="-1" id="2queryDeptId">全部</li>';
					$('#deptDiv').html(innerHtml);
					setBtnQuerycheckFunc();
					prvenceChange();
				}
			});
}
function changePickerDq(pid) {
	$("#queryUserPickerProvinceId").val(-1);
	$("#queryUserPickerDeptId").val(-1);
	$
			.ajax({
				url : "mainpage_searchDept.do",
				type : "post",
				data : mid + "&deptPid=" + pid,
				dataType : "json",
				success : function(data) {
					var dataObj = eval("(" + data + ")");
					var innerHtml = '<ul class="list-inline manage" ><li><span>省级部门</span><input type="hidden" name="queryUserPickerProvinceId" value="-1" id = "queryUserPickerProvinceId"></li><div class="pmb_right">';
					innerHtml += '<li class="radio_state manage_checked" value="-1" id="2province" >全部</li>';
					for ( var i = 0; i < dataObj.length; i++) {
						innerHtml += '<li class="radio_state" value="'
								+ dataObj[i].d_id + '" id="' + dataObj[i].d_id
								+ '" >' + dataObj[i].d_name + '</li>';
					}
					innerHtml += '</div><div class="clear"></div></ul>';
					$('#PickerProvinceDiv').html(innerHtml);
					innerHtml = '<ul class="list-inline manage" ><li><span>事业部　</span><input type="hidden" name="queryUserPickerDeptId" value="-1" id="queryUserPickerDeptId"></li><div class="pmb_right">';
					innerHtml += '<li class="radio_state manage_checked" value="-1" id="2province" >全部</li>';
					innerHtml += '</div><div class="clear"></div></ul>';
					$('#PickerDeptDiv').html(innerHtml);
					setBtnQuerycheckFunc();
					PickerProvinceChange();
					PickerDqChange();
				},
				error : function(data) {
					var innerHtml = '<ul class="list-inline manage" ><li><span>省级部门</span><input type="hidden" name="queryUserPickerProvinceId" value="-1"></li><div class="pmb_right">';
					innerHtml += '<li class="radio_state manage_checked" value="-1" id="2province" >全部</li>';
					innerHtml += '</div><div class="clear"></div></ul>';
					$('#PikcerProvinceDiv').html(innerHtml);
					innerHtml = '<ul class="list-inline manage" ><li><span>事业部　</span><input type="hidden" name="queryUserPickerDeptId" value="-1"></li><div class="pmb_right">';
					innerHtml += '<li class="radio_state manage_checked" value="-1" id="2province" >全部</li>';
					innerHtml += '</div><div class="clear"></div></ul>';
					$('#PikcerDeptDiv').html(innerHtml);
					setBtnQuerycheckFunc();
					PickerDqChange();
					PickerProvinceChange();
				}
			});
	setTimeout(function() {
		prvenceChange();
	}, 3000);
}
function changePickerProvince(pid) {
	$("#queryUserPickerDeptId").val(-1);
	$
			.ajax({
				url : "mainpage_searchDept.do",
				type : "post",
				data : mid + "&deptPid=" + pid,
				dataType : "json",
				success : function(data) {
					var dataObj = eval("(" + data + ")");
					var innerHtml = '<ul class="list-inline manage" ><li><span>事业部　</span><input type="hidden" name="queryUserPickerDeptId" value="-1"></li><div class="pmb_right" id="queryUserPickerDeptId">';
					innerHtml += '<li class="radio_state manage_checked" value="-1" id="2queryDeptId">全部</li>';
					for ( var i = 0; i < dataObj.length; i++) {
						innerHtml += '<li class="radio_state" value="'
								+ dataObj[i].d_id + '" id="' + dataObj[i].d_id
								+ '">' + dataObj[i].d_name + '</li>';
					}
					innerHtml += '</div><div class="clear"></div></ul>';
					$('#PickerDeptDiv').html(innerHtml);
					setBtnQuerycheckFunc();
					PickerProvinceChange();
				},
				error : function(data) {
					var innerHtml = '<ul class="list-inline manage" ><li><span>事业部　</span><input type="hidden" name="queryUserPickerDeptId" value="-1"></li><div class="pmb_right">';
					innerHtml += '<li class="radio_state manage_checked" value="-1" id="2queryDeptId">全部</li>';
					$('#PickerDeptDiv').html(innerHtml);
					setBtnQuerycheckFunc();
					PickerProvinceChange();
				}
			});
}
function jumpToSaleDetailPopUp() {
	var s = $('.jumpSalesDetail').click(function(){
		var querySaleUserId = $(this).data('saleuser');
		var querySaleDept = $(this).data('saledept');
		var queryDateRange = $('#datepickerDateRange').val();
		var menuId = 209;
		$('.modal-dialog').css('width','1000px');
		
		popmid = "menuId=" + menuId;
		loadMessageStart();
		$.ajax({
			url : "mainpage_index.do",
			type : "post",
			data : popmid +"&queryDateRange="
			+ queryDateRange + "&querySaleUserId=" + querySaleUserId
			+ "&querySaleDept="
			+ querySaleDept,
			dataType : "html",
			success : function(data) {
				href = "pager.offset=0";
				refreshSalesContent(data);
				loadMessageEnd();
			},
			error : function(data) {
			}
		});
	});
}
function jumpToSaleDetailPageForNormal(sale_userId, sale_userName, sale_dept) {
	var queryDateRange = $('#datepickerDateRange').val();
	var querySaleUserId = sale_userId;
	var querySaleUserName = sale_userName;
	var querySaleDept = sale_dept;
	var menuId = 200;  //销量管理menuId  如有变动需改
	var type = "saleDetailPageForNormal";
	mid = "menuId=" + menuId + "&type=" + type;
	$.ajax({
		url : "mainpage_index.do",
		type : "post",
		data : mid +"&queryDateRange="
		+ queryDateRange + "&querySaleUserId=" + querySaleUserId
		+ "&querySaleUserName=" + querySaleUserName + "&querySaleDept="
		+ querySaleDept,
		dataType : "html",
		success : function(data) {
			href = "pager.offset=0";
			refreshContentPage(data);
			loadMessageEnd();
		},
		error : function(data) {
		}
	});
}
function jumpToPerTrackPopUp() {
	var s = $('.jumpPerTrackDetail').click(function(){
		var querySaleUserId = $(this).data('saleuser');
		var queryDateRange = $('#datepickerDateRange').val();
		var menuId = 210;
		$('.modal-dialog').css('width','1000px');
		$('.modal-dialog').find('.modal-content').css('min-height','550px');
		popmid = "menuId=" + menuId;
		loadMessageStart();
		$.ajax({
			url : "mainpage_index.do",
			type : "post",
			data : popmid +"&queryDateRange="
			+ queryDateRange + "&querySaleUserId=" + querySaleUserId,
			dataType : "html",
			success : function(data) {
				href = "pager.offset=0";
				refreshPerTrackContent(data);
				loadMessageEnd();
			},
			error : function(data) {
			}
		});
	});
}
function changeOrderByAmountHead() {
	$('.changeOrderByAmountHead').click(function() {
		$("#queryOrderByAmount").val(1);
		var i = $("#queryOrderType").val();
		if (i == -1 || i =="" ||i ==null || i == undefined) {
			$("#queryOrderType").val(1);
		} else {
			$("#queryOrderType").val(-1);
		}
		$("#btnSearch").click();
	});
}
function changeOrderByTotalPriceHead() {
	$('.changeOrderByTotalPriceHead').click(function() {
		$("#queryOrderByAmount").val(-1);
		var i = $("#queryOrderType").val();
		if (i == -1 || i =="" ||i ==null || i == undefined) {
			$("#queryOrderType").val(1);
		} else {
			$("#queryOrderType").val(-1);
		}
		$("#btnSearch").click();
	});
}
function changeOrderType() {
	

}
function tb_pick() {
	/*
	 * 注意：input的id和td的data-属性名必须通过u_username :
	 * clicked.children('td[data-uusername]').data('uusername')来关联到一起
	 * 格式为input_id : clicked.children('td[data-属性名]').data('属性名')
	 * 
	 */
	$('[data-title]').click(function() {
		var dataTitle = $(this).data('title');
		$('.modal-header').find('h4').html(dataTitle);
	});
	$('#datepickerDate').datepicker({
		format : 'yyyy-mm-dd' // 日期格式
	});
	// daterange picker
	$('#datepickerDateRange').daterangepicker();

	var tb_tr = $('.part_check').find('tr');/* 获取点击的tr对象 */
	var clicked = null;/* 获取已经选中tr的对象 */
	var name = null;
	var btnClear = $('.btnClear');
	var u_username;// 名字
	var u_real_name;// 别名
	var u_id;// 主键id
	var u_usercode;// 员工编号
	var u_password;// 密码
	var u_head_portrait;// 头像
	var u_sex;// 性别
	var u_position_id;// 职位id
	var u_affpos_id;// 附属职位id
	var u_phone;// 手机
	var u_remark;// 备注
	var u_pro_code;// 省编码
	var dq_id;// 大区编号
	var show_dq_id;// 大区名称
	var province_id;// 省级部门编号
	var show_province_id;// 省级部门名称
	var dept_id;// 事业部编号
	var show_dept_id;// 事业部名称

	var inputs = $('body').find('.part_check_out').find('input');
	outlenth = inputs.length;
	var inputarry = new Array;
	for ( var i = 0; i < outlenth; i++) {
		inputarry[i] = inputs.eq(i).attr('id');
	}
	btnClear.click(function() {
		for ( var i = 0; i < inputarry.length; i++) {
			$('#' + inputarry[i]).val('');
		}
	});

	tb_tr.click(function() {
		$('.tb_clicked').removeClass('tb_clicked');/* 仿造只能选一个的效果 */
		$(this).addClass('tb_clicked');/* 给选中的添加样式 */
		clicked = $('.tb_clicked');/* 每次点击之后需要重新绑定选中的tr对象 */

	});
	tb_tr
			.on(
					'dblclick',
					function() {

						var person = {// 创建可能存在的属性 属性名与id对应
							u_username : clicked.children('td[data-uusername]')
									.data('uusername'),
							u_real_name : clicked
									.children('td[data-urealname]').data(
											'urealname'),
							u_id : clicked.children('td[data-uid]').data('uid'),
							u_usercode : clicked.children('td[data-uusercode]')
									.data('uusercode'),
							u_password : clicked.children('td[data-upassword]')
									.data('upassword'),
							u_head_portrait : clicked.children(
									'td[data-uheadportrait]').data(
									'uheadportrait'),
							u_sex : clicked.children('td[data-usex]').data(
									'usex'),
							u_position_id : clicked.children(
									'td[data-upositionid]').data('upositionid'),
							u_affpos_id : clicked
									.children('td[data-uaffposid]').data(
											'uaffposid'),
							u_phone : clicked.children('td[data-uphone]').data(
									'uphone'),
							u_remark : clicked.children('td[data-uremark]')
									.data('uremark'),
							u_pro_code : clicked.children('td[data-uprocode]')
									.data('uprocode'),
							dq_id : clicked.children('td[data-dqid]').data(
									'dqid'),
							show_dq_id : clicked.children('td[data-showdqid]')
									.data('showdqid'),
							province_id : clicked.children(
									'td[data-provinceid]').data('provinceid'),
							show_province_id : clicked.children(
									'td[data-showprovinceid]').data(
									'showprovinceid'),
							dept_id : clicked.children('td[data-deptid]').data(
									'deptid'),
							show_dept_id : clicked.children(
									'td[data-showdeptid]').data('showdeptid'),
							dqid : clicked.children('td[data-dqid]').data(
									'dqid'),
							dqname : clicked.children('td[data-dqname]').data(
									'dqname'),
							provinceid : clicked
									.children('td[data-provinceid]').data(
											'provinceid'),
							provincename : clicked.children(
									'td[data-provincename]').data(
									'provincename'),
							deptid : clicked.children('td[data-deptid]').data(
									'deptid'),
							deptname : clicked.children('td[data-deptname]')
									.data('deptname'),
							dqandprovinceanddeptname : clicked.children(
									'td[data-dqandprovinceanddeptname]').data(
									'dqandprovinceanddeptname'),
							provinceanddeptname : clicked.children(
									'td[data-provinceanddeptname]').data(
									'provinceanddeptname')
						};
						$('body').find(inputarry[0]).val(1);
						for ( var n = 0; n < outlenth; n++) {
							if (person[inputarry[n]] == undefined) {
							} else {
								$('body').find('#' + inputarry[n]).val(
										person[inputarry[n]]);
							}
						}
						$('.btncancel').click();
					});

	$('.btnadd').click(function() {
		if (!clicked) {
			alert("请选择一个结果");
		} else {
			clicked.dblclick();
			$('.btncancel').click();
		}
	});
	$('.btnSearch').click(function() {
		$('.part_check').removeClass('hidden');

	});
}
function refreshUserPikerContent(data) {
	document.getElementById("userPickerContent").innerHTML = data;
	$(".pagination a").on(
			"click",
			function() {
				href = $(this).attr("href").split("?")[1];
				$(this).attr("href", "javascript:void(0);");
				$.ajax({
					url : "mainpage_action.do",
					type : "post",
					data : "menuId=43&actionName=userPicker",
					dataType : "json",
					success : function(data) {
						var dataObj = eval("(" + data + ")");
						var datas = $("#userform").serialize();
						$.ajax({
							url : "mainpage_index.do",
							type : "post",
							data : datas + "&menuId=" + dataObj.m_id + "&"
									+ href + "&obj=page" + "&obj=page",
							dataType : "html",
							success : function(data) {
								refreshUserPikerContent(data);
							},
							error : function(data) {
							}
						});
					}
				});
			});
	tb_pick();
	setBtnUserSearchFunc();
	setBtnQuerycheckFunc();
	PickerDqChange();
	PickerProvinceChange();
}
function prvenceChange() {
	$('#provinceDiv').find('li').click(function() {
		proId = $(this).attr('value');
		changeProvince(proId);
	});
}
function dqChange() {

	$('#DqDiv').find('li').click(function() {
		dqId = $(this).attr('value');
		changeDq(dqId);
	});

}
function PickerProvinceChange() {
	$('#PickerProvinceDiv').find('li').click(function() {
		proId = $(this).attr('value');
		changePickerProvince(proId);
	});
}
function PickerDqChange() {
	$('#PikcerDqDiv').find('li').click(function() {
		dqId = $(this).attr('value');
		changePickerDq(dqId);
	});
}

function btnUserPicker() {
	$(".btnUserPicker").on("click", function() {
		$.ajax({
			url : "mainpage_action.do",
			type : "post",
			data : "menuId=43&actionName=userPicker",
			dataType : "json",
			success : function(data) {
				var dataObj = eval("(" + data + ")");
				var url = dataObj.m_url;
				$.ajax({
					url : "mainpage_index.do",
					type : "post",
					data : "menuId=" + dataObj.m_id,
					dataType : "html",
					success : function(data) {
						refreshUserPikerContent(data);
					},
					error : function(data) {
					}
				});
			}
		});
	});
}
function setBtnUserSearchFunc() {
	$(".btnUserSearch").on(
			"click",
			function() {
				$.ajax({
					url : "mainpage_action.do",
					type : "post",
					data : "menuId=43&actionName=userPicker",
					dataType : "json",
					success : function(data) {
						var dataObj = eval("(" + data + ")");
						var datas = $("#userform").serialize();
						$.ajax({
							url : "mainpage_index.do",
							type : "post",
							data : datas + "&menuId=" + dataObj.m_id + "&"
									+ dataObj.m_url,
							dataType : "html",
							success : function(data) {
								refreshUserPikerContent(data);
							},
							error : function(data) {
							}
						});
					}
				});
			});
}
function btnDeptPicker() {
	$(".btnDeptPicker").on("click", function() {
		tb_pick();
		$.ajax({
			url : "mainpage_action.do",
			type : "post",
			data : "menuId=202&actionName=deptPicker",
			dataType : "json",
			success : function(data) {
				var dataObj = eval("(" + data + ")");
				var url = dataObj.m_url;
				$.ajax({
					url : "mainpage_index.do",
					type : "post",
					data : "menuId=" + dataObj.m_id,
					dataType : "html",
					success : function(data) {
						refreshDeptPikerContent(data);
					},
					error : function(data) {
					}
				});
			}
		});
	});
}
function setBtnDeptSearchFunc() {
	$(".btnDeptSearch").on(
			"click",
			function() {
				$.ajax({
					url : "mainpage_action.do",
					type : "post",
					data : "menuId=202&actionName=deptPicker",
					dataType : "json",
					success : function(data) {
						var dataObj = eval("(" + data + ")");
						var datas = $("#deptform").serialize();
						$.ajax({
							url : "mainpage_index.do",
							type : "post",
							data : datas + "&menuId=" + dataObj.m_id + "&"
									+ dataObj.m_url,
							dataType : "html",
							success : function(data) {
								refreshDeptPikerContent(data);
							},
							error : function(data) {
							}
						});
					}
				});
			});
}
function refreshDeptPikerContent(data) {
	document.getElementById("userPickerContent").innerHTML = data;
	$(".pagination a").on(
			"click",
			function() {
				href = $(this).attr("href").split("?")[1];
				$(this).attr("href", "javascript:void(0);");
				$.ajax({
					url : "mainpage_action.do",
					type : "post",
					data : "menuId=202&actionName=deptPicker",
					dataType : "json",
					success : function(data) {
						var dataObj = eval("(" + data + ")");
						var datas = $("#deptform").serialize();
						$.ajax({
							url : "mainpage_index.do",
							type : "post",
							data : datas + "&menuId=" + dataObj.m_id + "&"
									+ href + "&obj=page" + "&obj=page",
							dataType : "html",
							success : function(data) {
								refreshDeptPikerContent(data);
							},
							error : function(data) {
							}
						});
					}
				});
			});
	tb_pick();
	setBtnDeptSearchFunc();
	setBtnQuerycheckFunc();
	prvenceChange();
	dqChange();
}
function resetUserConditions() {
	$('body').find('.recealer').click(function() {
		$('body').find('input[type]=text').val('');
	});
}
function loadMessageStart() {
	$('body').find('.loading').css('display', 'block');
}
function loadMessageEnd() {
	$('body').find('.loading').css('display', 'none');
}
// 百度地图API功能
// 用经纬度设置地图中心点

function theLocation(){
	if($("#allmap").length==0){
		return ;
	}
	
	var map =null;
	if(map==null){
		jQuery.getScript("http://api.map.baidu.com/getscript?v=2.0&ak=tMIDGVrrpWfjbHkdc4rcy5ko&services=&t="+(new Date).getTime(), function(data, status, jqxhr) {
			 /*
			  做一些加载完成后需要执行的事情
			 */ 
			map=new BMap.Map("allmap");
			map.centerAndZoom(new BMap.Point(116.639069,39.913658),15);
			map.enableScrollWheelZoom(true);
			});
	
		
	}
	
	
	
	$('.modalMap').click(function(){
		$('#mapModal').modal('hide');
	});
	$(".map").on("click", function() {
		var mapbut= $(this);
	   $("a.start").attr("site",mapbut.attr("start-site"));
	   

	   $("a.end").attr("site",mapbut.attr("end-site"));
	});
	
	$(".locate").on("click", function() {

		var mapbut= $(this);
	    var	site= mapbut.attr("site");
	    map.clearOverlays(); 
		var new_point = new BMap.Point(site.split(",")[0],site.split(",")[1]);
		var marker = new BMap.Marker(new_point);  // 创建标注
		map.addOverlay(marker);              // 将标注添加到地图中
		map.panTo(new_point);    
	});
}
var graphBar2 = function() {

	if ($("#BarGraph").length > 0) {

		var datas = $("#barGraphDatas").text();
		Morris.Bar({
			element : 'hero-bar',
			data : eval(datas),
			barColors : [ '#32CD32', '#e74c3c', '#f39c12', '#3fcfbb',
					'#626f70', '#8f44ad' ],
			xkey : 'xkey',
			ykeys : [ 'ykey' ],
			labels : [ '销售额' ],
			barRatio : 0.4,
			xLabelAngle : 0,
			hideHover : 'auto',
			resize : true
		});
	}
};
function graphListDraw() {
	if ($("#LineGraph").length > 0) {
		var datas = $("#lineGraphDatas").text();
		graphLine = Morris.Line({
			element : 'graph-line',
			data : eval(datas),
			lineColors : [ '#ffffff' ],
			xkey : 'xkey',
			ykeys : [ 'ykey' ],
			labels : [ '销售额' ],
			pointSize : 3,
			hideHover : 'auto',
			gridTextColor : '#ffffff',
			gridLineColor : 'rgba(255, 255, 255, 0.3)',
			resize : true
		});
		$('.timer').countTo({});
	}
}
function charSet() {
	var index_;
	$('.char_title').click(function() {
		index_ = $(this).index();
		$('.char_cli').removeClass('char_cli');
		$(this).addClass('char_cli');
		$('.charSet').addClass('hidden');
		$('.charSet').eq(index_).removeClass('hidden');
	});
}
function refreshSalesContent(data) {
	document.getElementById("userPickerContent").innerHTML = data;
	$(".pagination a").on(
			"click",
			function() {
				href = $(this).attr("href").split("?")[1];
				$(this).attr("href", "javascript:void(0);");
				$.ajax({
					url : "mainpage_action.do",
					type : "post",
					data : "menuId=188&actionName=salespopup",
					dataType : "json",
					success : function(data) {
						var dataObj = eval("(" + data + ")");
						var datas = $("#userform").serialize();
						$.ajax({
							url : "mainpage_index.do",
							type : "post",
							data : datas + "&menuId=" + dataObj.m_id + "&"
									+ href + "&obj=page",
							dataType : "html",
							success : function(data) {
								refreshSalesContent(data);
							},
							error : function(data) {
							}
						});
					}
				});
			});
}
function refreshPerTrackContent(data) {
	document.getElementById("userPickerContent").innerHTML = data;
	theLocation();
	$(".pagination a").on(
			"click",
			function() {
				href = $(this).attr("href").split("?")[1];
				$(this).attr("href", "javascript:void(0);");
				$.ajax({
					url : "mainpage_action.do",
					type : "post",
					data : "menuId=188&actionName=pertrackpopup",
					dataType : "json",
					success : function(data) {
						var dataObj = eval("(" + data + ")");
						var datas = $("#userform").serialize();
						$.ajax({
							url : "mainpage_index.do",
							type : "post",
							data : datas + "&menuId=" + dataObj.m_id + "&"
									+ href + "&obj=page",
							dataType : "html",
							success : function(data) {
								refreshPerTrackContent(data);
							},
							error : function(data) {
							}
						});
					}
				});
			});
}
function setBtnPushMessage() {
	$(".btnPushMessage").on("click", function() {
		if (window.confirm("您确定要发送通知吗？")) {
			var tbid = $(this).attr("tbid");
			$.ajax({
				url : "mainpage_action.do",
				type : "post",
				data : mid + "&actionName=pushMessage",
				dataType : "json",
				success : function(data) {
					var dataObj = eval("(" + data + ")");
					pushMessage(dataObj.m_id, tbid);
				}
			});
			$(this).attr("href", "javascript:void(0);");
		}
	});
}
function pushMessage(menuId, tbid) {
	$.ajax({
		url : "mainpage_index.do",
		type : "post",
		data : "menuId=" + menuId + "&tbId=" + tbid,
		dataType : "json",
		success : function(data) {
			if(data == 10){
				alert("安卓发送成功！");
			}else if(data ==1){
				alert("IOS发送成功！");
			}else if(data == 11){
				alert("安卓和IOS发送成功！");
			}else{
				alert("发送失败！");
			}
			
		},
		error : function(data) {
		}
	});
}