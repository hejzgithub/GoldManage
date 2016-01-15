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
<script src="js/jquery.js"></script>

<script src="js/demo-rtl.js"></script>


	<!-- libraries -->
	<link rel="stylesheet" type="text/css" href="css/libs/font-awesome.css" />
	<link rel="stylesheet" type="text/css" href="css/libs/nanoscroller.css" />

	<!-- global styles -->
	<link rel="stylesheet" type="text/css" href="css/compiled/theme_styles.css" />

	

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
				
					<div class="row" style="opacity: 1;">
						<div class="col-lg-12">
							<div id="contentPage"></div>
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
	<script type="text/javascript"></script>
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title text-center" id="myModalLabel"></h4>
				</div>
				<div id="userPickerContent">
				</div>
			</div>
		</div>
	</div>
	<div class="loading">
	<div id="preloader">
    	<span></span>
    	<span></span>
    	<span></span>
    
    </div>
</div>
</body>
</html>

