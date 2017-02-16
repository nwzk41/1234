// 主入口文件
// 依赖于路由和 css 两个模块
angular.module('myApp',['ui.router','angularCSS'])
	.run(['$window','$rootScope','$state',function ($window,$rootScope,$state) {
		//$window 相当于原生的 window 对象
		//$rootScope 全局作用域，用于存储全局变量，在任何地方都可以使用
		/*
		 	$rootScope.$on 可以监听一些事件，这里监听的是浏览器的地址变化
		 * 	$locationChangeSuccess 浏览器地址变化成功后处理的逻辑
		 * */
		$rootScope.$on('$locationChangeSuccess',function() {
			//判断浏览器地址字段有没有“market”
			if ($window.location.href.indexOf('market') > -1) {
				$rootScope.rootIsFooterShow = false;
			}else{
				$rootScope.rootIsFooterShow = true;
			}
			
			var arr = $window.location.href.split("#/");
			if (arr[1] == "cart") {
				//在浏览器地址检测到含cart时，跳转到2级页面
				//检测到浏览器地址末尾只含'cart'的时候，才进行跳转，地址栏不包含后面的.subHomePage1/104749
				//这样子在二级菜单获取数据的时候type传来的值都是0
				$state.go('cart.itemType',{type : 0});
			}
		});
//		console.log('_________________')
		
		
	}])
	.config(['$stateProvider',"$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise("home");
		$stateProvider
			.state('home',{
				url : '/home',
				templateUrl :'./view/home.html',
				controller : 'HomeCtrl as homeCtrl' 
			})
			.state('market',{
				url : '/market',
				templateUrl :'./view/market.html',
				controller : 'MarketCtrl as marketCtrl' 
			})
			.state('cart',{
				url : '/cart',
				templateUrl :'./view/cart.html',
				controller : 'CartCtrl as cartCtrl' 
			})
				//页面二级路由
				.state('cart.itemType',{
					url : '/itemType/:type',
					views : {
						"itemType@cart" : {
							templateUrl :'./view/itemType.html',
							controller : 'ItemTypeCtrl as itemTypeCtrl'	
						}
					}
					 
				})
			.state('mine',{
				url : '/mine',
				templateUrl :'./view/mine.html',
				controller : 'MineCtrl as mineCtrl' 
			})
			.state('more',{
				url : '/more',
				templateUrl :'./view/more.html',
				controller : 'MoreCtrl as moreCtrl' 
			})
			.state('xiangqing',{
				url : '/xiangqing/:name',
				templateUrl :'./view/xiangQing.html',
				controller : 'XiangQingCtrl as xiangQingCtrl' 
			})
	}])