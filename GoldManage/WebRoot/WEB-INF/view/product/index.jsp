<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>



<!DOCTYPE html>
<html>
<head>
<base href="<%=basePath%>">
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>一寸金</title>

<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<!-- bootstrap -->
<link rel="stylesheet" type="text/css"
	href="css/bootstrap/bootstrap.min.css" />

<!-- libraries -->
<link rel="stylesheet" type="text/css" href="css/libs/font-awesome.css" />
<!-- <link rel="stylesheet" type="text/css" href="css/libs/nanoscroller.css" />  -->

<!-- global styles -->
<link rel="stylesheet" type="text/css"
	href="css/compiled/theme_styles.css" />
<!-- 修改的css -->
<link rel="stylesheet" type="text/css" href="css/compiled/rebuild.css" />
<!-- 时间控件 -->
<link rel="stylesheet" type="text/css"
	href="css/libs/bootstrap-timepicker.css" />
<link rel="stylesheet" type="text/css" href="css/libs/datepicker.css" />
<link rel="stylesheet" type="text/css" href="css/libs/select2.css" />

<!-- this page specific styles -->
<link rel="stylesheet" href="css/libs/fullcalendar.css" type="text/css" />
<link rel="stylesheet" href="css/libs/fullcalendar.print.css"
	type="text/css" media="print" />
<link rel="stylesheet" href="css/compiled/calendar.css" type="text/css"
	media="screen" />
<link rel="stylesheet" href="css/libs/morris.css" type="text/css" />
<link rel="stylesheet" href="css/libs/daterangepicker.css"
	type="text/css" />
<link rel="stylesheet" href="css/libs/jquery-jvectormap-1.2.2.css"
	type="text/css" />
	
	
<link rel="stylesheet" type="text/css" href="css/libs/bootstrap-wizard.css" />




<script src="js/jquery.js"></script>

<script src="js/demo-rtl.js"></script>


<!-- libraries -->
<link rel="stylesheet" type="text/css" href="css/libs/font-awesome.css" />
<link rel="stylesheet" type="text/css" href="css/libs/nanoscroller.css" />

<!-- global styles -->
<!-- <link rel="stylesheet" type="text/css"
	href="css/compiled/theme_styles.css" /> -->



<!-- google font libraries -->
<script type="text/javascript">
	$(function() {
		$(".fa-power-off").parent().on("click", function() {
			if (window.confirm("您确定要注销吗？")) {
				this.href = "front/login_logout.do";

			}
		});
	});
</script>
</head>

<body>
	<div id="theme-wrapper">
		<!-- 顶部模块标签注入 -->
		<%@ include file="/top.jsp"%>
		<!-- 顶部模块标签注入end -->
		<div id="page-wrapper" class="container">
			<div class="row">
				<!-- 左侧菜单模块标签注入 -->
				<div id="nav-col">
					<%@ include file="/menu.jsp"%>
				</div>
				<!-- 左侧菜单模块标签注入end -->

				<!-- 右侧内容模块标签注入 -->
				<div id="content-wrapper">
					<!-- 面包屑  -->
					<div class="row">
						<div class="col-lg-12">
							<ol class="breadcrumb">
								<li><a href="#">主页</a></li>
								<li class="active"><span>产品</span></li>
							</ol>
							<!-- 标题 -->
							<h1>
								产品 <small>Secondary headline</small>
							</h1>
						</div>
					</div>
					<!-- 面包屑  end-->

					<div class="row">
						<div class="col-lg-12">
							<div class="main-box clearfix">
								<header class="main-box-header clearfix">
									<h2 class="pull-left">产品列表</h2>

									<div class="filter-block pull-right">
										<div class="form-group pull-left">
											<input type="text" placeholder="搜索..." class="form-control">
											<i class="fa fa-search search-icon"></i>
										</div>
										<button class="btn btn-primary pull-right" id="open-wizard">
											<i class="fa fa-plus-circle fa-lg"></i> 新增产品
										</button>
										
										<!-- 
										<a class="btn btn-primary pull-right" href="#"> <i
											class="fa fa-plus-circle fa-lg"></i> 新增产品 </a>
											 -->
									</div>
								</header>
							
								<div class="main-box-body clearfix">
									<div class="table-responsive">
										<table class="table">
											<thead>
												<tr>
													<th class="text-center"><a href="#"><span>产品名称</span>
													</a></th>
													<th class="text-center"><a class="asc" href="#"><span>价格</span>
													</a></th>
													<th class="text-center"><a class="asc" href="#"><span>产品总数</span>
													</a></th>
													<th class="text-center"><a class="asc" href="#"><span>项目总额</span>
													</a></th>
													<th class="text-center"><a class="asc" href="#"><span>出售总数</span>
													</a></th>
													<th class="text-center"><a class="asc" href="#"><span>出售总额</span>
													</a></th>

													<th class="text-center"><span>状态</span></th>
													<th class="text-center"><a class="desc" href="#"><span>更新时间</span>
													</a></th>
													<th>&nbsp;</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>活期金</td>
													<td class="text-right">¥ 625.50 &nbsp;( g )</td>
													<td class="text-right">¥ 5000 W</td>
													<td class="text-right">¥ 5000 W</td>
													<td class="text-right">¥ 5000 W</td>
													<td class="text-right">¥ 62550 &nbsp;</td>
													<td class="text-center"><span
														class="label label-warning">未发布</span>
													</td>
													<td class="text-center">2013/08/08 12:08</td>
													<td style="width: 15%;"><a class="table-link" href="#">
															<span class="fa-stack"> <i
																class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-search-plus fa-stack-1x fa-inverse"></i> </span> </a>
														<a class="table-link" href="#"> <span class="fa-stack">
																<i class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-pencil fa-stack-1x fa-inverse"></i> </span> </a> <a
														class="table-link danger" href="#"> <span
															class="fa-stack"> <i
																class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-trash-o fa-stack-1x fa-inverse"></i> </span> </a>
													</td>
												</tr>
												<tr>
													<td>定期金</td>
													<td class="text-right">¥ 625.50 &nbsp;( g )</td>
													<td class="text-right">¥ 5000 W</td>
													<td class="text-right">¥ 5000 W</td>
													<td class="text-right">¥ 5000 W</td>
													<td class="text-right">¥ 62550 &nbsp;</td>
													<td class="text-center"><span
														class="label label-success">已发布</span>
													</td>
													<td class="text-center">2013/08/08 12:08</td>
													<td style="width: 15%;"><a class="table-link" href="#">
															<span class="fa-stack"> <i
																class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-search-plus fa-stack-1x fa-inverse"></i> </span> </a>
														<a class="table-link" href="#"> <span class="fa-stack">
																<i class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-pencil fa-stack-1x fa-inverse"></i> </span> </a> <a
														class="table-link danger" href="#"> <span
															class="fa-stack"> <i
																class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-trash-o fa-stack-1x fa-inverse"></i> </span> </a>
													</td>
												</tr>
												<tr>
													<td>iPad 128GB Wifi+3G</td>
													<td class="text-right">$ 1825.00</td>
													<td class="text-center"><span
														class="label label-success">Active</span>
													</td>
													<td class="text-center">2013/08/08 12:08</td>
													<td style="width: 15%;"><a class="table-link" href="#">
															<span class="fa-stack"> <i
																class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-search-plus fa-stack-1x fa-inverse"></i> </span> </a>
														<a class="table-link" href="#"> <span class="fa-stack">
																<i class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-pencil fa-stack-1x fa-inverse"></i> </span> </a> <a
														class="table-link danger" href="#"> <span
															class="fa-stack"> <i
																class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-trash-o fa-stack-1x fa-inverse"></i> </span> </a>
													</td>
												</tr>
												<tr>
													<td>iMac 27" Quad Core i5 3.2GHz</td>
													<td class="text-right">$ 1.920.50</td>
													<td class="text-center"><span
														class="label label-success">Active</span>
													</td>
													<td class="text-center">2013/08/08 12:08</td>
													<td style="width: 15%;"><a class="table-link" href="#">
															<span class="fa-stack"> <i
																class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-search-plus fa-stack-1x fa-inverse"></i> </span> </a>
														<a class="table-link" href="#"> <span class="fa-stack">
																<i class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-pencil fa-stack-1x fa-inverse"></i> </span> </a> <a
														class="table-link danger" href="#"> <span
															class="fa-stack"> <i
																class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-trash-o fa-stack-1x fa-inverse"></i> </span> </a>
													</td>
												</tr>
												<tr>
													<td>Mac Pro 2.8GHz 4-Core Intel Xeon</td>
													<td class="text-right">$ 4.625.50</td>
													<td class="text-center"><span
														class="label label-warning">Inactive</span>
													</td>
													<td class="text-center">2013/08/08 12:08</td>
													<td style="width: 15%;"><a class="table-link" href="#">
															<span class="fa-stack"> <i
																class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-search-plus fa-stack-1x fa-inverse"></i> </span> </a>
														<a class="table-link" href="#"> <span class="fa-stack">
																<i class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-pencil fa-stack-1x fa-inverse"></i> </span> </a> <a
														class="table-link danger" href="#"> <span
															class="fa-stack"> <i
																class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-trash-o fa-stack-1x fa-inverse"></i> </span> </a>
													</td>
												</tr>
												<tr>
													<td>MacBook Pro 15" Retina Core i7 2.7GHz</td>
													<td class="text-right">$ 1.435.50</td>
													<td class="text-center"><span
														class="label label-success">Active</span>
													</td>
													<td class="text-center">2013/08/08 12:08</td>
													<td style="width: 15%;"><a class="table-link" href="#">
															<span class="fa-stack"> <i
																class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-search-plus fa-stack-1x fa-inverse"></i> </span> </a>
														<a class="table-link" href="#"> <span class="fa-stack">
																<i class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-pencil fa-stack-1x fa-inverse"></i> </span> </a> <a
														class="table-link danger" href="#"> <span
															class="fa-stack"> <i
																class="fa fa-square fa-stack-2x"></i> <i
																class="fa fa-trash-o fa-stack-1x fa-inverse"></i> </span> </a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<ul class="pagination pull-right">
										<li><a href="#"><i class="fa fa-chevron-left"></i> </a></li>
										<li><a href="#">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">5</a></li>
										<li><a href="#"><i class="fa fa-chevron-right"></i> </a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

				</div>
				<!-- 右侧内容模块标签注入 END -->
			</div>


		</div>
	</div>


	<!-- global scripts -->
	<script src="js/demo-skin-changer.js"></script>
	<!-- only for demo -->
	<!--  -->
	<script src="js/bootstrap-datepicker.js"></script>
	<script src="js/bootstrap-timepicker.min.js"></script>
	<script src="js/daterangepicker.js"></script>
	<script src="js/jquery.maskedinput.min.js"></script>
	<script src="js/select2.min.js"></script>
	<script src="js/moment.min.js"></script>
	<script src="js/hogan.js"></script>
	<script src="js/jquery.pwstrength.js"></script>


	

	<script src="js/bootstrap.js"></script>
	<script src="js/jquery.nanoscroller.min.js"></script>
	<script src="js/demo.js"></script>
	<!-- only for demo -->


	<script src="js/raphael-min.js"></script>
	<script src="js/morris.js"></script>
	<!-- this page specific scripts -->
	<!-- 
	<script src="js/jquery-ui.custom.min.js"></script>
	<script src="js/fullcalendar.min.js"></script>
	<script src="js/jquery.slimscroll.min.js"></script>
	<script src="js/raphael-min.js"></script>
	<script src="js/morris.min.js"></script>
	<script src="js/daterangepicker.js"></script>
	<script src="js/jquery-jvectormap-1.2.2.min.js"></script>
	<script src="js/jquery-jvectormap-world-merc-en.js"></script>
	<script src="js/gdp-data.js"></script>
	<script src="js/flot/jquery.flot.js"></script>
	<script src="js/flot/jquery.flot.min.js"></script>
	<script src="js/flot/jquery.flot.pie.min.js"></script>
	<script src="js/flot/jquery.flot.stack.min.js"></script>
	<script src="js/flot/jquery.flot.resize.min.js"></script>
	<script src="js/flot/jquery.flot.time.min.js"></script>
	<script src="js/flot/jquery.flot.threshold.js"></script>
	 -->

	<!-- theme scripts -->
	<script src="js/jquery.countTo.js"></script>
	<script src="js/scripts.js"></script>
	<script src="js/pace.min.js"></script>
	<script src="js/actioncommon.js"></script>
	
	<!-- 模态窗2js -->
	<script type="text/javascript" src="js/bootstrap-wizard.js"></script>
	<script type="text/javascript" src="js/product2.js"></script>
	<!-- 模态窗 -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title text-center" id="myModalLabel"></h4>
				</div>
				<div id="userPickerContent"></div>
			</div>
		</div>
	</div>
	
	
			<div class="wizard" id="wizard-demo">
				<h1>产品</h1>
				<div class="wizard-card" data-onValidated="setServerName" data-cardname="name">
					<h3><span>产品基本信息</span></h3>
			
					<div class="wizard-input-section">
						<p>
							
						</p>
			
						<div class="form-group">
							<label for="productName">产品名称</label>
							<input type="text" class="form-control" id="productName" data-validate="productName" placeholder="请输入产品名称" maxlength="18" />
						</div>
			
			
				
						<div class="form-group">
							<label for="exampleInputEmail1">产品简介</label>
							<input type="text" class="form-control" id="new-server-fqdn" placeholder="请输入产品介绍" data-validate="fqdn_or_ip" maxlength="25"/>
						</div>
				
					
				
						<div class="form-group">
							<label for="exampleInputEmail1">产品售卖起止时间</label>
							<input type="text" class="form-control" id="new-server-fqdn" placeholder="请输入产品介绍" data-validate="fqdn_or_ip" maxlength="25"/>
						</div>
					
					
					
						<div class="form-group">
							<label for="exampleInputEmail1">产品类型</label>
							<select style="width:300px" id="buyingPatterns">
								
								<option value="定期">定期</option>
								<option value="活期">活期</option>
							</select>
						</div>
						
						<div class="form-group">
							<label for="exampleInputEmail1">产品分类</label>
							<input type="text" class="form-control" id="new-server-fqdn" placeholder="请输入产品介绍" data-validate="fqdn_or_ip" maxlength="25"/>
						</div>
					</div>
				</div>
			
					<div class="wizard" id="wizard-demo">
			<h1>产品</h1>
			<div class="wizard-card" data-onValidated="setServerName" data-cardname="name">
				<h3><span>产品基本信息</span></h3>

				<div class="wizard-input-section">
					<p>

					</p>

					<div class="form-group">
						<label for="productName">产品名称</label>
						<input type="text" class="form-control"  placeholder="请输入产品名称" maxlength="18" />
					</div>

					<div class="form-group">
						<label for="exampleInputEmail1">产品简介</label>
						<input type="text" class="form-control" placeholder="请输入产品介绍" maxlength="25" />
					</div>

					<div class="form-group">
						<label for="datepickerDateRange">产品售卖起止时间</label>
						<div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-calendar-o"></i></span>
                            <input type="text" class="form-control" placeholder="产品售卖起止时间" maxlength="25" id="datepickerDateRange" />
                        </div>
					</div>

					<div class="form-group">
						<label for="exampleInputEmail1">产品类型</label>
						<select style="width:300px" >

							<option value="定期">定期</option>
							<option value="活期">活期</option>
						</select>
					</div>

					<div class="form-group">
						<label for="exampleInputEmail1">产品分类</label>
						<input type="text" class="form-control" placeholder="请输入产品介绍" maxlength="25" />
					</div>
				</div>
			</div>

			<div class="wizard-card" data-cardname="group">
				<h3><span>产品发行信息</span></h3>

				<div class="wizard-input-section">
					<p>

					</p>

					<div class="form-group">
						<label for="productName">产品发行份额</label>
						<input type="text" class="form-control" />
					</div>
					<div class="form-group">
						<label for="productName">产品发行单价</label>
						<select style="width:300px" >
							<option value="0" selected="selected">元</option>
							<option value="1">克</option>
						</select>
					</div>
					<div class="form-group">
						<label for="productName">产品发行单位</label>
						<input type="text" class="form-control" maxlength="18" />
					</div>

					<div class="form-group">
						<label for="product_money_type">产品交易货币类型</label>
						<select style="width:300px" id="currencyType" name="currencyType" >
							<option value="0" selected="selected">均可</option>
							<option value="1">货币</option>
							<option value="2">黄金</option>
						</select>
					</div>
					<div class="form-group">
						<label for="productName">产品交易费率类型</label>
						<select style="width:300px" id="rateType" name="rateType">
							<option value="0" selected="selected">无</option>
							<option value="1">固定费用</option>
							<option value="2">固定费率</option>
						</select>
					</div>
					<div class="form-group rate">
						<label for="productName">产品交易费收取条件</label>
						<select style="width:300px" id="transactionFeesCondition" name="transactionFeesCondition">
							<option value="0" selected="selected">无</option>
							<option value="1">购买收费</option>
							<option value="2">赎回收费</option>
							<option value="3">前后收费</option>
						</select>
					</div>
					<div class="form-group rate">
						<label for="productName">产品手续费</label>
						<input type="text" class="form-control" id="poundage" name="poundage"/>
					</div>
					<div class="form-group rate">
						<label for="productName">产品手续费单位</label>

						<select style="width:300px" id="rateUnit" name="rateUnit">
							<option value="0" selected="selected">无</option>
							<option value="1">元</option>
							<option value="2">克</option>
							<option value="3">毫克</option>
							<option value="4">%</option>
						</select>
					</div>
				</div>
			
				<div class="wizard-card" data-cardname="services">
					<h3><span>产品计息方式与周期</span></h3>
			
					<div class="wizard-input-section">
						<p>
							请输入大于0的整数
						</p>
			
						<div class="form-group">
							<label for="exampleInputCountry">购买数量</label>
							<input type="text" class="form-control" id="productCount" value="1">
						</div>
					</div>
				</div>
				<div class="wizard-card">
					<h3><span>选择购买方式</span></h3>
					<div class="wizard-input-section">
						<!--<p>
							We determined <strong>Chicago</strong> to be the closest location to monitor
							<strong class="create-server-name"></strong> If you would like to change this, or you think this is incorrect, please select a different monitoring location.
						</p>-->
			
						<div class="form-group form-group-select2 col-md-6">
							<label>请选择购买方式</label>
							<select style="width:300px" id="buyingPatterns">
								<option value="购买" selected="selected">购买</option>
								<option value="预定">预定</option>
							</select>
						</div>
					</div>
				</div>
			
				<!--<div class="wizard-card">
					<h3><span>Notification Schedule</span></h3>
			
					<div class="wizard-input-section">
						<p>
							Select the notification schedule to be used for outages.
						</p>
			
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Type schedule here">
						</div>
					</div>
			
					<div class="wizard-ns-detail hide">
						Also using <strong>ALIS Production</strong>:
						<ul id="wizard-ns-detail-servers">
							<li>Corporate sites</li>
							<li>dt01.sat.medtelligent.com</li>
							<li>alisonline.com</li>
							<li>circa-db04.sat.medtelligent.com</li>
							<li>circa-services01.sat.medtelligent.com</li>
							<li>circa-web01.sat.medtelligent.com</li>
							<li>heartbeat.alisonline.com</li>
							<li>medtelligent.com</li>
							<li>dt02.fre.medtelligent.com</li>
							<li>dev03.lin.medtelligent.com</li>
						</ul>
					</div>
				</div>-->
			
				<div class="wizard-card">
					<h3><span>确认订单</span></h3>
			
					<div class="wizard-input-section">
						<p>客户姓名：<strong id="cName"></strong></p>
						<p>理财经理：<strong id="jNumber"></strong></p>
						<p>货品名称：<strong class="pName"></strong></p>
						<p>数量：<strong id="ecount">1</strong></p>
						<p>单价：<strong id="uPrice"></strong></p>
						<p>总价：<strong class="tPrice"></strong></p>
						<p>购买方式：<strong id="bPatterns"></strong></p>
					</div>
			
					<div class="wizard-input-section">
						<div class="form-group">
							<input type="text" class="form-control create-server-agent-key" id="beizhu"  placeholder="备注信息">
						</div>
					</div>
				</div>
			
				<div class="wizard-error">
					<div class="alert alert-error">
						<strong>There was a problem</strong> with your submission. Please correct the errors and re-submit.
					</div>
				</div>
			
				<div class="wizard-failure">
					<div class="alert alert-error">
						<strong>There was a problem</strong> submitting the form. Please try again in a minute.
					</div>
				</div>
			
				<div class="wizard-success">
					<div class="alert alert-success">
						<span class="create-server-name"></span><strong>提交成功！</strong>
					</div>
					<div class="alert alert-error">
						<span class="create-server-name">订单号：</span><strong class="orderNum">123456789</strong>
					</div>
					<div class="alert alert-error">
						<span class="create-server-name">产品名称：</span><strong class="pName">123456789</strong>
					</div>
					<div class="alert alert-error">
						<span class="create-server-name">总价：</span><strong class="tPrice">123456789</strong>
					</div>
					
					<a class="btn btn-default create-another-server">再次下单</a>
					<span style="padding:0 10px">&nbsp;</span>
					<a class="btn btn-primary im-done">返回</a>
				</div>
			</div>
			
			
			
			
		</div>
	
	<div class="loading">
		<div id="preloader">
			<span></span> <span></span> <span></span>

		</div>
	</div>
	
</body>
</html>

