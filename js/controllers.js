//所有控制器的文件

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
		
		//精选swiper
//		var jxSwiper = new Swiper('.jingxuan .swiper-container', {
//				observer:true,//修改swiper自己或子元素时，自动初始化swiper
//				observeParents:true,//修改swiper的父元素时，自动初始化swiper
//		        slidesPerView: "auto",
//		        paginationClickable: true,
//				
//		});
		var jxSwiper = new Swiper('.jingxuan .swiper-container', {
//			        pagination: '.swiper-pagination',
			        slidesPerView: 'auto',
			        paginationClickable: true,
			        spaceBetween: 30,
			        observer:true,//修改swiper自己或子元素时，自动初始化swiper
					observeParents:true,
			    });
//		//上划搜索框变色事件
//		$(".home").on('up',upScroll);
//		function upScroll(){
//			$(".nav").css({"background":"black"});
//		}
//		var firX ,firY;
//		$(".home").mousemove(function(event){
//			console.log("_______")
//			firX = event.pageX
//			firY = event.pageY
//		})
//				.mouseup(function(event){
//			var lasX = event.pageX
//			var lasY = event.pageY
//
//			if(lasY-firY<=-50 &&Math.abs(lasX-firX")<"50){
//				$(this).trigger("up");
//			}
//			else if(lasY-firY>=50 &&Math.abs(lasX-firX)<50){
//				$(this).trigger("down");
//			}
//			else if(lasX-firX>=50 &&Math.abs(lasY-firY)<50){
//				$(this).trigger("right");
//			}
//			else if(lasX-firX<=-50 &&Math.abs(lasY-firY)<50){
//				$(this).trigger("left");
//			}
//		})
	}])
	.controller('MarketCtrl',['$location',function ($location) {
		var self = this;
		self.goBack = function () {
			//默认浏览器历史记录
//			window.history.back();
			//跳到指定的路由
			$location.path('home');
		};
		$('.market h1').css({
			color : 'white'
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
	.controller('MineCtrl',['$css','mineService',function ($css,mineService) {
		$css.add('css/mine.css');
		var self = this;
		self.itemList = mineService.getMineList();
	}])
	.controller('XiangQingCtrl',['$css','$routeParams','pulicService',function ($css,$routeParams,pulicService) {
		$css.add("css/xiangqing.css");
		//$routeParams 可以获取到通过路由传过来的所有参数，
		//我们可以通过点语法获取相应的参数
		var self = this;
		self.name = $routeParams.name;
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
		for(item of pulicService.getlist()){
			//新的数据处理方法  创建新数组，不使用模板字符串，直接使用angularJS ng-repeat 循环数据，添加到页面上 
			if(item.itemNum >= 1 ){
				for(liItem of userOrderList) {
					if (liItem.id  == item.id) {
						break;
					}
				}
				userOrderList.push(item);
//				self.orderImg = item.itemImg
//				self.orderInf = item.itemTit;
//				self.orderAddress = item.itemPrice;
//				self.itemNum = item.itemNum;
//				self.newPrice = item.newPrice;
				self.itemList = userOrderList;
//				console.log("————————————")
//				//保存该商品ID
//				self.itemId = item.id
//				content += `<div class = "itemInf">
//							<img class="orderImg" src="${item.itemImg}"></img>
//							<div class="orderDes">
//								<p>${item.itemTit}</p>
//								<div class="address">￥${item.newPrice}.00 <input class="jianItem" type="button"  value="-" />数量 ：${item.itemNum}<input class="addItem" type="button"  value="+" /></div>
//							</div>
//						</div>`
//				self.orderImg = item.itemImg
//				self.orderInf = item.itemTit;
//				self.orderAddress = item.itemPrice;
//				self.itemNum = item.itemNum;
//				self.newPrice = item.newPrice;
				//清空该项，放到购物车移除商品事件
//				item.itemNum = 0;
			}
//			lists.push(item.id);
		}
		console.log(userOrderList)
//		$('.orderInf').html(content);
		
		
		//数量加减功能 需要使用递归 模板字符串方式实现页面效果差,不建议使用
//		$(".jianItem").on('click',jian);
//		function jian() {
//			for(item of pulicService.getlist()) {
//				if (self.itemId == item.id && item.itemNum >= 2){
//					
//					item.itemNum -=1; 
//					item.newPrice = item.itemPrice*item.itemNum;
//					
//					newContent = `<div class = "itemInf">
//							<img class="orderImg" src="${item.itemImg}"></img>
//							<div class="orderDes">
//								<p>${item.itemTit}</p>
//								<div class="address">￥${item.newPrice}.00 <input class="jianItem" type="button"  value="-" />数量 ：${item.itemNum}<input class="addItem" type="button"  value="+" /></div>
//							</div>
//						</div>`
//				}
//			}
//			//更新内容
//			$('.orderInf').html(newContent);
//			$(".addItem").on('click',add);
//			$(".jianItem").on('click',jian);
//		}
//		
//		$(".addItem").on('click',add);
//		
//		function add() {
//			console.log("++++++++");
//			for(item of pulicService.getlist()) {
//				if (self.itemId == item.id){
//					
//					item.itemNum +=1; 
//					item.newPrice = item.itemPrice*item.itemNum;
//					
//					newContent = `<div class = "itemInf">
//							<img class="orderImg" src="${item.itemImg}"></img>
//							<div class="orderDes">
//								<p>${item.itemTit}</p>
//								<div class="address">￥${item.newPrice}.00 <input class="jianItem" type="button"  value="-" />数量 ：${item.itemNum}<input class="addItem" type="button"  value="+" /></div>
//							</div>
//						</div>`
//				}
//			}
//			//更新内容
//			$('.orderInf').html(newContent);
//			$(".addItem").on('click',add);
//			$(".jianItem").on('click',jian);
//		 }
		
		
	}])