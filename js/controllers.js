//所有控制器的文件

angular.module('myApp')
	//依赖注入$css (这个是angularCSS这个插件中的服务)
	.controller('HomeCtrl',['$css','HomeService',function ($css,HomeService) {
		//这里的路径是index 相对于该css文件的路径
		$css.add('css/home.css');
		var self = this;
		self.getUserList = HomeService.getUserList();
		self.pageName = HomeService.getPageName();
//		self.getUserList = function () {
//			//调用服务中获取数据的方法
//			return HomeService.getUserList();
//		}
		var mySwiper = new Swiper('.swiper-container', {
				autoplay: 2000,//可选选项，自动滑动
				//操作swiper之后，还可以继续自动播放
				autoplayDisableOnInteraction : false,
				//分页器
				pagination : '.swiper-pagination',
				//环路(注意：设置这个后每个分页原理会改变，写样式的时候小心)
				loop : true
			})
	}])
	.controller('MarketCtrl',[function () {
		var self = this;
	}])
	.controller('CartCtrl',[function () {
		var self = this;
	}])
	.controller('MineCtrl',[function () {
		var self = this;
	}])