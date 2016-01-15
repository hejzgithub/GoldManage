function setServerName(card) {
		var host = $("#fqdn_or_ip").val();//客户姓名
		var name = $("#jobNumber").val();
		var displayName = host;
		if (name) {
			displayName = name + " ("+host+")";
		};
	
		card.wizard.setSubtitle(displayName);
		card.wizard.el.find(".create-server-name").text(displayName);
	}
	
	function validateIP(ipaddr) {
		console.log(3);
	    //Remember, this function will validate only Class C IP.
	    //change to other IP Classes as you need
	    ipaddr = ipaddr.replace(/\s/g, "") //remove spaces for checking
	    var re = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/; //regex. check for digits and in
	                                          //all 4 quadrants of the IP
	    if (re.test(ipaddr)) {
	        //split into units with dots "."
	        var parts = ipaddr.split(".");
	        //if the first unit/quadrant of the IP is zero
	        if (parseInt(parseFloat(parts[0])) == 0) {
	            return false;
	        }
	        //if the fourth unit/quadrant of the IP is zero
	        if (parseInt(parseFloat(parts[3])) == 0) {
	            return false;
	        }
	        //if any part is greater than 255
	        for (var i=0; i<parts.length; i++) {
	            if (parseInt(parseFloat(parts[i])) > 255){
	                return false;
	            }
	        }
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	
	function validateFQDN(val) {//验证工号ajax
		var t = true;//写页面暂时使用true  发布到项目中时需要修改为false
//		$.ajax({
//			type:"get",
//			data:val,
//			dataType:'html',
//			url:"pruductList.html",
//			async:false,
//			success:function(data){
//				if(data){
//					t = true;
//				}else{
//					t = false;
//				}
//			},
//			error:function(){
//				t = false;//写页面暂时使用true  发布到项目中时需要修改为false
//				alert('连接服务器出错，请检查网络');
//			}
//		});
		
		return t;
	}
	
	function fqdn_or_ip(el) {//判断工号
		var val = el.val();
		ret = {
			status: true
		};
		
//		if (!validateFQDN(val)) {
//			ret.status = false;
//			ret.msg = "请输入正确工号";
//		}
		return ret;
	}
	function productName(el) {
		var val = el.val();
		ret = {
			status: true
		};
		
		if (val.length<1) {
			ret.status = false;
			ret.msg = "请输入 产品名称";
		}
		return ret;
	}
	
	$(function() {
		
		$('#sel2').select2();
	
		$.fn.wizard.logging = false;
	
		var wizard = $("#wizard-demo").wizard({
			showCancel: true
		});
	
		//$(".chzn-select").chosen();
	
		wizard.el.find(".wizard-ns-select").change(function() {
			wizard.el.find(".wizard-ns-detail").show();
		});
	
		wizard.el.find(".create-server-service-list").change(function() {
			var noOption = $(this).find("option:selected").length == 0;
			wizard.getCard(this).toggleAlert(null, noOption);
		});
	
		wizard.cards["name"].on("validated", function(card) {
			var hostname = card.el.find("#new-server-fqdn").val();
		});
	
		wizard.on("submit", function(wizard) {
			var submit = {
				"new-server-fqdn": $("#new-server-fqdn").val(),
				"productCount": $("#productCount").val(),
				"buyingPatterns": $("#buyingPatterns").val(),
				"note": $("#note").val()
			};
	
			subFrom(submit,wizard);
		});
	
		wizard.on("reset", function(wizard) {
			wizard.setSubtitle("");
			wizard.el.find("#new-server-fqdn").val("");
			wizard.el.find("#jobNumber").val("");
		});
	
		wizard.el.find(".wizard-success .im-done").click(function() {
			history.back();
		});
	
		wizard.el.find(".wizard-success .create-another-server").click(function() {
			wizard.reset();
		});
	
		$(".wizard-group-list").click(function() {
			alert("Disabled for demo.");
		});
	
		$("#open-wizard").click(function() {
			wizard.show();
		});
	
	});
	
	function confirmOrder(){
		$('#uPrice').html(parseInt($('.product_price').html()));//单价
		$('.tPrice').html(parseInt($('.product_price').html())*$('#productCount').val());
		$('.pName').html($('.productName').html());
		$('#bPatterns').html($('#buyingPatterns').val());
		$('#jNumber').html($('#new-server-fqdn').val());
		$('#cName').html($('#customerName').val());//顾客姓名
		
		$('#buyingPatterns').change(function(){
			$('#bPatterns').html($(this).val());
		});
		$('#customerName').blur(function(){//顾客姓名
			$('#cName').html($(this).val());
		});
		$('#new-server-fqdn').blur(function(){//理财经理工号
			$('#jNumber').html($(this).val());
		});
		$('#productCount').blur(function(){//购买数量
			$('#ecount').html($(this).val());
			$('#tPrice').html(parseInt($('.product_price').html())*$(this).val());
		});
		
	
	
	}
	confirmOrder();
	$('#backpage').click(function(){
		history.back();
	});