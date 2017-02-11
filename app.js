// 主入口文件
// 依赖于路由和 css 两个模块
angular.module('myApp',['ngRoute','angularCSS'])
	.run(['$window','$rootScope',function ($window,$rootScope) {
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
		});
//		console.log('_________________')
	}])
	.config(['$routeProvider',function ($routeProvider) {
		$routeProvider.when('/home',{

			templateUrl :'./view/home.html',
			controller : 'HomeCtrl as homeCtrl' 
		})
		.when('/market',{

			templateUrl :'./view/market.html',
			controller : 'MarketCtrl as marketCtrl' 
		})
		.when('/cart',{

			templateUrl :'./view/cart.html',
			controller : 'CartCtrl as cartCtrl' 
		})
		.when('/mine',{

			templateUrl :'./view/mine.html',
			controller : 'MineCtrl as mineCtrl' 
		})
		.when('/more',{

			templateUrl :'./view/more.html',
			controller : 'MoreCtrl as moreCtrl' 
		})
		.otherwise({
			redirectTo :'/home',
			controller : 'HomeCtrl as homeCtrl' 
		})
	}])