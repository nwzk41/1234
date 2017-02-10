//这里统一管理service（服务）
angular.module('myApp')
	.factory('HomeService',[function () {
		var list = [
					{ name:'b',age:18},
					{ name:'a',age:20},
					{ name:'e',age:16},
					{ name:'g',age:28},
					{ name:'f',age:12},
				];
		return {
			getUserList : function ( ) {
				//模拟用户列表数据
				return list
				
			},
			getPageName  : function () {
				//模拟获取页面名字数据
				return '我是首页';
			}
		}
	}])