//这里统一管理service（服务）
angular.module('myApp')
	.factory('HomeService',[function () {
		var 
		var list = [
					{ label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "001",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 男子篮球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "002",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 ",itemPrice:"$62.99（转运到手约￥559）"},
					{ label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "003",itemdes: "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/3000/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "004",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 子篮球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "005",itemdes: "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "006",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 鞋",itemPrice:"$62.99（转运到手约￥559）"},
				];
		var swiperImgS = [
			{img:"http://shihuo.hupucdn.com/appHome/201702/1017/48f7249b76003a3d4e4de6c1b3dbb631.jpg?imageView2/2/w/750/h/380/interlace/1"},
			{img:"http://shihuo.hupucdn.com/appHome/201702/1111/514ee3a04d10a4b9879918fadc5d15f9.jpg?imageView2/2/w/750/h/380/interlace/1"},
			{img:"http://shihuo.hupucdn.com/appHome/201702/1010/f67feec79b0a4585ceda43cecafe7124.jpg?imageView2/2/w/750/h/380/interlace/1"},
			{img:"http://shihuo.hupucdn.com/appHome/201702/1017/48f7249b76003a3d4e4de6c1b3dbb631.jpg?imageView2/2/w/750/h/380/interlace/1"},
			{img:"http://shihuo.hupucdn.com/appHome/201702/1111/514ee3a04d10a4b9879918fadc5d15f9.jpg?imageView2/2/w/750/h/380/interlace/1"},
			{img:"http://shihuo.hupucdn.com/appHome/201702/1010/f67feec79b0a4585ceda43cecafe7124.jpg?imageView2/2/w/750/h/380/interlace/1"}
		];
		var jxSwiperImgs = [
			{img:"http://shihuo.hupucdn.com/appHome/201701/1018/5c9a64f527bbaac4ba196525c56d6d6e.jpg?imageView2/2/w/480/h/240/interlace/1"},
			{img:"http://shihuo.hupucdn.com/appHome/201701/1018/5c9a64f527bbaac4ba196525c56d6d6e.jpg?imageView2/2/w/480/h/240/interlace/1"},
			{img:"http://shihuo.hupucdn.com/appHome/201701/1018/5c9a64f527bbaac4ba196525c56d6d6e.jpg?imageView2/2/w/480/h/240/interlace/1"},
			{img:"http://shihuo.hupucdn.com/appHome/201701/1018/5c9a64f527bbaac4ba196525c56d6d6e.jpg?imageView2/2/w/480/h/240/interlace/1"},
			{img:"http://shihuo.hupucdn.com/appHome/201701/1018/5c9a64f527bbaac4ba196525c56d6d6e.jpg?imageView2/2/w/480/h/240/interlace/1"},
			{img:"http://shihuo.hupucdn.com/appHome/201701/1018/5c9a64f527bbaac4ba196525c56d6d6e.jpg?imageView2/2/w/480/h/240/interlace/1"},
			{img:"http://shihuo.hupucdn.com/appHome/201701/1018/5c9a64f527bbaac4ba196525c56d6d6e.jpg?imageView2/2/w/480/h/240/interlace/1"}	
		];
		
		return {
			getTuiJianList : function () {
				//模拟用户列表数据
				return list
				
			},
			getSwiperImgS : function () {
				return swiperImgS
			},
			jxSwiperImgs : jxSwiperImgs
		}
	}])
	//创建公共服务，存放公共数据
	.factory('pulicService',[function () {
					//模拟后台获取的数据,将数据放入到服务里，实现数据共享的目的
					var list = [
						{id : "001",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 男子篮球鞋",itemPrice:"$62.99（转运到手约￥559）",itemNum : 0},
						{id : "002",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球鞋",itemPrice:"$62.99（转运到手约￥559）",itemNum : 0},
						{id : "003",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 鞋",itemPrice:"$62.99（转运到手约￥559）",itemNum : 0},
						{id : "004",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 男篮球鞋",itemPrice:"$62.99（转运到手约￥559）",itemNum : 0},
						{id : "005",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 ",itemPrice:"$62.99（转运到手约￥559）",itemNum : 0},
						{id : "006",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 球鞋",itemPrice:"$62.99（转运到手约￥559）",itemNum : 0},
						{id : "007",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球",itemPrice:"$62.99（转运到手约￥559）",itemNum : 0},
					]
					//返回一个对象，这个对象就是这个服务的实例对象（单例）
					//以上的list 属于私有变量，
					//在其他控制器中无法直接访问到list，
					//我们可以通过在服务的对象中，
					//设置一些方法进行数据访问
					return {
						//list 作为一种方法，不能直接访问数据，能对数据进行惭怍
						getlist : function () {
							return list;
						},
						//添加数据的接口
						addItem : function (item) {
							list.push(item);
						}
					}
				}])