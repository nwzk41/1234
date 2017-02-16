//所有控制器的文件---

angular.module('myApp')
	//依赖注入$css (这个是angularCSS这个插件中的服务)
	.controller('HomeCtrl',['$css','HomeService',function ($css,HomeService,pulicService) {
		//这里的路径是index 相对于该css文件的路径
		$css.add('css/home.css');
		var self = this;
		//方法，调用HomeService中的数据给home.html页面使用
		self.getTopList = HomeService.getTopList();
		self.getTuiJianList = HomeService.getTuiJianList();
		self.getSwiperImgS = HomeService.getSwiperImgS();
		self.jxSwiperImgs = HomeService.jxSwiperImgs;

		var mySwiper = new Swiper('.home>.swiper-container', {
				autoplay: 2000,//可选选项，自动滑动
				//操作swiper之后，还可以继续自动播放
				autoplayDisableOnInteraction : false,
				//分页器
				pagination : '.swiper-pagination',
				//环路(注意：设置这个后每个分页原理会改变，写样式的时候小心)
				loop : true,
				//以下两行代码用来处理swiper 在anguler框架中不能滑动的问题
				observer:true,//修改swiper自己或子元素时，自动初始化swiper

				observeParents:true,//修改swiper的父元素时，自动初始化swiper
		});
		
//		var jxSwiper = new Swiper('.jingxuan .swiper-container', {
////			        pagination: '.swiper-pagination',
//			        slidesPerView: 'auto',
//			        paginationClickable: true,
//			        spaceBetween: 30,
//			        observer:true,//修改swiper自己或子元素时，自动初始化swiper
//					observeParents:true,
//			    });

	}])
	.controller('MarketCtrl',['$location','$css',function ($location,$css) {
		$css.add('css/market.css');
		var self = this;
		self.goBack = function () {
			//默认浏览器历史记录
//			window.history.back();
			//跳到指定的路由
			$location.path('home');
		};
		$('.market h1').css({
			color : 'black'
		});
		
	}])
	.controller('CartCtrl',['$css','CartService',function ($css,CartService) {
		$css.add('css/cart.css');
		var self = this;
		self.showList = CartService.getShowList();
		self.tuijianList = CartService.getTuiJianList();
		self.listType = "0";
					self.changePage = function (pageName){
						self.listType = pageName;
					}
		var mySwiper = new Swiper(' .swiper-container', {
				autoplay: 2000,//可选选项，自动滑动
				//操作swiper之后，还可以继续自动播放
				autoplayDisableOnInteraction : false,
				//分页器
				pagination : '.swiper-pagination',
				//环路(注意：设置这个后每个分页原理会改变，写样式的时候小心)
				loop : true,
			})
		
	}])
	//清单分类控制器
	.controller('ItemTypeCtrl',["$css",'$stateParams','mineService','$state',function ($css,$stateParams,mineService,$state) {
		$css.add('css/itemType.css');
		var self = this;
		self.typeList = [];
		self.type = $stateParams.type;
		self.itemTypeList = mineService.getMineList();
//		console.log(self.type);
		for(item of self.itemTypeList){
			if(self.type == item.type){
				self.typeList.push(item);
			}
		}
//		
	}])
	.controller('MineCtrl',['$css','mineService',function ($css,mineService) {
		$css.add('css/mine.css');
		var self = this;
		self.itemList = mineService.getMineList();
	}])
	.controller('XiangQingCtrl',['$css','$stateParams','pulicService',function ($css,$stateParams,pulicService) {
		$css.add("css/xiangqing.css");
		//$routeParams 可以获取到通过路由传过来的所有参数，
		//我们可以通过点语法获取相应的参数
		var self = this;
		self.name = $stateParams.name;
		self.list = pulicService.getlist();
		var lists = [];
		//添加详情页的参数
		for(item of pulicService.getlist()){
			if(self.name == item.id ){
				self.itemImg = item.itemImg;
				self.itemTit = item.itemTit;
				self.itemPrice = item.itemPrice;
				self.itemNum = item.itemNum;
			}
//			lists.push(item.id);
		}
//		self.lists = lists;
		//点击添加到购物车事件
		$(".add").on('click',function () {
			for(item of pulicService.getlist()){
				if(self.name == item.id ){
					
					item.itemNum += 1;
					console.log(item.itemNum);
					item.newPrice = item.itemNum*item.itemPrice;
				}
			}
		})
	}])
	.controller('MoreCtrl',['$css','pulicService',function ($css,pulicService) {
		$css.add('css/more.css');
		var self = this;
		//购物车添加商品功能
		var content = "";
		var newContent = "";
		var userOrderList = [{id : "000",itemde : "nike 官网7折",itemIm :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTi:"全新升级！UA 安德玛 Clutchfit Drive 3 男子篮球鞋",itemPric:559,itemNu : 0,newPric : 0}];
//		var id
		for(item of pulicService.getlist()){
			//新的数据处理方法  创建新数组，不使用模板字符串，直接使用angularJS ng-repeat 循环数据，添加到页面上 
			if(item.itemNum >= 1 ){
				for(liItem of userOrderList) {
					if (liItem.id  == item.id) {
						break;
					}
				}   
//				id = item.ido8]]]]]]]][7]
				userOrderList.push(item);

				self.itemList = userOrderList;
			}
		}
		console.log(userOrderList)

		
		
		//数量加减功能 需要使用递归 模板字符串方式实现页面效果差,不建议使用
		//减法功能
		self.jian = function (id) { 
			console.log("--------")
			for(item of userOrderList) {
				if (id == item.id && item.itemNum >= 2){				
					item.itemNum -=1; 
					item.newPrice = item.itemPrice*item.itemNum;

				}
			}

		}
		//加法功能
		self.add = function (id) {
			for(item of userOrderList) {
				if (id == item.id ){				
					item.itemNum +=1; 
					item.newPrice = item.itemPrice*item.itemNum;

				}
			}

		}
	
	}])

	