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
	.controller('MineCtrl',['$css',function ($css) {
		$css.add('css/mine.css');
		var self = this;
		//下拉刷新功能
//		function load () {  
//	        var myScroll,  
//	        	pullDown = $("#pullDown"),  
//	            pullUp = $("#pullUp"),  
//	            pullDownLabel = $(".pullDownLabel"),  
//	            pullUpLabel = $(".pullUpLabel"),  
//	            container = $('#list'),  
//	            loadingStep = 0;//加载状态0默认，1显示加载状态，2执行加载数据，只有当为0时才能再次加载，这是防止过快拉动刷新  
//	  
//	            pullDown.hide();  
//	            pullUp.hide();  
//	  
//	            myScroll = new IScroll("#wrapper", {  
//	                scrollbars: true,  
//	                mouseWheel: false,  
//	                interactiveScrollbars: true,  
//	                shrinkScrollbars: 'scale',  
//	                fadeScrollbars: true,  
//	                scrollY:true,  
//	                probeType: 2,  
//	                bindToWrapper:true  
//	            });  
//	            myScroll.on("scroll",function(){  
//	                if(loadingStep == 0 && !pullDown.attr("class").match('refresh|loading') && !pullUp.attr("class").match('refresh')){  
//	                    if(this.y > 40){//下拉刷新操作  
//	                        $(".pulldown-tips").hide();  
//	                        pullDown.addClass("refresh").show();  
//	                        pullDownLabel.text("松手刷新数据");  
//	                        loadingStep = 1;  
//	                        myScroll.refresh();  
//	                    }else if(this.y < (this.maxScrollY - 14)){//上拉加载更多  
//	                        pullUp.addClass("refresh").show();  
//	                        pullUpLabel.text("正在载入");  
//	                        loadingStep = 1;  
//	                        pullUpAction();  
//	                    }  
//	                }  
//	            });  
//	            myScroll.on("scrollEnd",function(){  
//	                if(loadingStep == 1){  
//	                    if( pullDown.attr("class").match("refresh") ){//下拉刷新操作  
//	                        pullDown.removeClass("refresh").addClass("loading");  
//	                        pullDownLabel.text("正在刷新");  
//	                        loadingStep = 2;  
//	                        pullDownAction();  
//	                    }  
//	                }  
//	            });  
//	  
//	        function pullDownAction(){  
//	            setTimeout(function(){  
//	                var li, i;  
//	                for (i = 0,li = ""; i < 3; i++) {  
//	                    li += "<li>" + "new Add " + new Date().toLocaleString() + " ！" + "</li>";  
//	                }  
//	                container.prepend(li);  
//	                pullDown.attr('class','').hide();  
//	                myScroll.refresh();  
//	                loadingStep = 0;  
//	                $(".pulldown-tips").show();  
//	            },1000);  
//	        }  
//	        function pullUpAction(){  
//	            setTimeout(function(){  
//	                var li, i;  
//	                for (i = 0,li = ""; i < 3; i++) {  
//	                    li += "<li>" + "new Add " + new Date().toLocaleString() + " ！" + "</li>";  
//	                }  
//	                container.append(li);  
//	                pullUp.attr('class','').hide();  
//	                myScroll.refresh();  
//	                loadingStep = 0;  
//	            },1000);  
//	        }  
//	  
//	        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);  
//	    }
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
				}
	//			lists.push(item.id);
			}
		})
	}])
	.controller('MoreCtrl',['$css','pulicService',function ($css,pulicService) {
		$css.add('css/more.css');
		var self = this;
		//购物车添加商品功能
		var content = "";
		for(item of pulicService.getlist()){
			if(item.itemNum >= 1 ){
				console.log("————————————")
				content += `<div class = "itemInf">
							<img class="orderImg" src="${item.itemImg}"></img>
							<div class="orderDes">
								<p>${item.itemTit}</p>
								<div class="address">${item.itemPrice} 数量 ：${item.itemNum}</div>
							</div>
						</div>`
//				self.orderImg = item.itemImg
//				self.orderInf = item.itemTit;
//				self.orderAddress = item.itemPrice;
//				self.itemNum = item.itemNum;
				//清空该项，放到购物车移除商品事件
//				item.itemNum = 0;
			}
//			lists.push(item.id);
		}
		
		console.log(content);
		
		$('.orderInf').html(content);
		console.log($('.orderInf').html());
		
	}])