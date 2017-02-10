// 主入口文件
// 依赖于路由和 css 两个模块
angular.module('myApp',['ngRoute','angularCSS'])
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
			controller : 'MineCtrl as mineCtrl' 
		})
		.otherwise({
			redirectTo :'/home',
			controller : 'HomeCtrl as homeCtrl' 
		})
	}])