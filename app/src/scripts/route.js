	//路由
myApp.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	//home
		.state('login', {
			url: "/login",
			templateUrl: "views/home/login.html",

		})
		.state('register', {
			url: "/register",
			templateUrl: "views/home/register.html",

		})
		.state('forgetPwd', {
			url: "/forgetPwd",
			templateUrl: "views/home/forgetPwd.html",

		})

	//main
	.state('tabs', {
			url: "/tab",
			abstract: true,
			templateUrl: "views/main.html"
		})
		//资金管理
		.state('tabs.gains', {
			url: "/gains",
			views: {
				'gains-tab': {
					templateUrl: "views/gains/gains.html",

				}
			}
		})
			//资金管理
				.state('gainsManage', {
			url: "/gainsManage",
			templateUrl: "views/gains/gainsManage.html",

		})
			//收益明细
				.state('gainsDetail', {
			url: "/gainsDetail",
			templateUrl: "views/gains/gainsDetail.html",

		})
			//每日签到
				.state('gainsSign', {
			url: "/gainsSign",
			templateUrl: "views/gains/gainsSign.html",

		})
			//我的收藏
				.state('gainsCollection', {
			url: "/gainsCollection",
			templateUrl: "views/gains/gainsCollection.html",

		})
		
		//广告
		.state('tabs.adviertisement', {
			url: "/adviertisement",
			views: {
				'adviertisement-tab': {
					templateUrl: "views/adviertisement/adviertisement.html",

				}
			}
		})
		//邀请
		.state('tabs.invite', {
			url: "/invite",
			views: {
				'invite-tab': {
					templateUrl: "views/invite/invite.html",

				}
			}
		})
		//个人信息
		.state('tabs.PIM', {
			url: "/PIM",
			views: {
				'PIM-tab': {
					templateUrl: "views/profile/PIM.html",

				}
			}
		})
		
			//listDemo
				.state('listDemo', {
			url: "/listDemo",
			templateUrl: "views/list/listDemo.html",
			controller: 'listDemo_ctr'
		})
	$urlRouterProvider.otherwise("/login");
})
