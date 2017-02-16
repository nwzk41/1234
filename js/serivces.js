//这里统一管理service（服务）
angular.module('myApp')
	.factory('HomeService',[function () {
		var topList = [
			{img:'http://shihuo.hupucdn.com/trade/goods/style/20170204/2359e426827e1af3cbeb9f0ee16f8ef91486213414.jpg?imageView2/0/w/176/h/176/interlace/1',title:'篮球 BASKETBALL',dec:'球鞋90秒欧文3'},
			{img:'http://shihuo.hupucdn.com/trade/goods/style/20170207/2f87fbefdf57615e2468551bc03896fc1486432465.jpg?imageView2/0/w/120/h/120/interlace/1',title:'篮球 BASKETBALL',dec:'球鞋90秒欧文3'},
			{img:'http://shihuo.hupucdn.com/trade/goods/style/20161017/0ae1d2b201c1f8ca2b4a0babf1a8af691476710563.jpg?imageView2/0/w/120/h/120/interlace/1',title:'篮球 BASKETBALL',dec:'球鞋90秒欧文3'},
			{img:'http://shihuo.hupucdn.com/trade/goods/style/20161203/174cbf8c9ebdb7d58e9fb9faa9ce5de21480765642.jpg?imageView2/0/w/120/h/120/interlace/1',title:'篮球 BASKETBALL',dec:'球鞋90秒欧文3'}
		]
		var list = [
					{ label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/1417/f0056d8fee24c189b3dfb140cc4b885e.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "001",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 男子篮球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "002",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 ",itemPrice:"$62.99（转运到手约￥559）"},
					{ label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/1417/f0056d8fee24c189b3dfb140cc4b885e.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "003",itemdes: "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "004",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 子篮球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/1417/f0056d8fee24c189b3dfb140cc4b885e.jpg?imageView2/0/w/300/h/300/interlace/1'
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
			getTopList : function () {
				return topList
			},
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
	.factory('CartService',[function () {
		//专题数据
		var showlist = [
				{img:"http://shihuo.hupucdn.com/appShiwuHome/201612/2719/1267919777022d0516cc1b4cc8b18d31.png?imageView2/2/w/240/h/240/interlace/1",title : '最炫AJ缤纷来袭'},
				{img:"http://shihuo.hupucdn.com/appShiwuHome/201612/2719/1267919777022d0516cc1b4cc8b18d31.png?imageView2/2/w/240/h/240/interlace/1",title : '最炫AJ缤纷来袭'},
				{img:"http://shihuo.hupucdn.com/appShiwuHome/201612/2719/1267919777022d0516cc1b4cc8b18d31.png?imageView2/2/w/240/h/240/interlace/1",title : '最炫AJ缤纷来袭'},
				{img:"http://shihuo.hupucdn.com/appShiwuHome/201612/2719/1267919777022d0516cc1b4cc8b18d31.png?imageView2/2/w/240/h/240/interlace/1",title : '最炫AJ缤纷来袭'},
				{img:"http://shihuo.hupucdn.com/appShiwuHome/201612/2719/1267919777022d0516cc1b4cc8b18d31.png?imageView2/2/w/240/h/240/interlace/1",title : '最炫AJ缤纷来袭'},
				{img:"http://shihuo.hupucdn.com/appShiwuHome/201612/2719/1267919777022d0516cc1b4cc8b18d31.png?imageView2/2/w/240/h/240/interlace/1",title : '最炫AJ缤纷来袭'},
				{img:"http://shihuo.hupucdn.com/appShiwuHome/201612/2719/1267919777022d0516cc1b4cc8b18d31.png?imageView2/2/w/240/h/240/interlace/1",title : '最炫AJ缤纷来袭'},
				{img:"http://shihuo.hupucdn.com/appShiwuHome/201612/2719/1267919777022d0516cc1b4cc8b18d31.png?imageView2/2/w/240/h/240/interlace/1",title : '最炫AJ缤纷来袭'},
				{img:"http://shihuo.hupucdn.com/appShiwuHome/201612/2719/1267919777022d0516cc1b4cc8b18d31.png?imageView2/2/w/240/h/240/interlace/1",title : '最炫AJ缤纷来袭'},
		]
		//精选推荐
		var tuijian = [
				{title: '全部',type : 0},
				{title:'实战推荐' ,type : 1},
				{title:'潮流穿搭' ,type : 2},
				{title:'跑步有道' ,type : 3},
				{title:'品质生活' ,type : 4},
				{title:'开箱首晒' ,type : 5},
				{title:'健身党' ,type : 6},
				{title:'众测' ,type : 7},
				{title:'欲望清单' ,type : 8},
		
		]
		return {
			getShowList : function () {
				return showlist
			},
			getTuiJianList : function() {
				return tuijian
			}
		}
	}])
	.factory('mineService',[function () {
		var minelist = [
					{ type:3,label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/1417/f0056d8fee24c189b3dfb140cc4b885e.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "010",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 男子篮球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:4,label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/1417/f0056d8fee24c189b3dfb140cc4b885e.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "011",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 ",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:3,label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "012",itemdes: "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:5,label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/1417/f0056d8fee24c189b3dfb140cc4b885e.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "013",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 子篮球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:1,label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "014",itemdes: "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:2,label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/1417/f0056d8fee24c189b3dfb140cc4b885e.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "015",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:8,label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/1417/f0056d8fee24c189b3dfb140cc4b885e.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "016",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 男子篮球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:5,label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/1417/f0056d8fee24c189b3dfb140cc4b885e.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "017",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 ",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:4,label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "018",itemdes: "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:7,label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/1417/f0056d8fee24c189b3dfb140cc4b885e.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "019",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 子篮球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:2,label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "020",itemdes: "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:0,label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/1417/f0056d8fee24c189b3dfb140cc4b885e.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "021",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:6,label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "022",itemdes: "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:6,label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/1417/f0056d8fee24c189b3dfb140cc4b885e.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "023",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:0,label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/trade/goods/style/201603/2211/7246b79bcf783aeb4ff18b2cb8bb7b1a.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "024",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:5,label:'独家消息！又有机会捡一波白菜！',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/0923/8727d48ed7db2dc587406bb20c27c11d.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "025",itemdes: "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 球鞋",itemPrice:"$62.99（转运到手约￥559）"},
					{ type:3,label:'大热单品！Champion Jersey 男式 短袖T恤',itemDesc:"Nike官网折扣区再7折！",
					img : 'http://shihuo.hupucdn.com/newsIndex11/201702/1616/b1f47d5bf3ed477bf6a412faefb075a4.jpg?imageView2/0/w/300/h/300/interlace/1'
					,fatoryCsr:"JUST DO IT",fatoryName:"NIKE",id : "026",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 鞋",itemPrice:"$62.99（转运到手约￥559）"},
				];
		return {
			getMineList : function () {
				return minelist
			}
		}
	}])
	//创建公共服务，存放公共数据
	.factory('pulicService',[function () {
		//模拟后台获取的数据,将数据放入到服务里，实现数据共享的目的
		var list = [
				{id : "001",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 男子篮球鞋",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "002",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球鞋",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "003",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 鞋",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "004",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 男篮球鞋",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "005",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 ",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "006",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 球鞋",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "007",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "008",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "009",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "010",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1312/3948018c8cf84014fc23b31ce4baf937.jpg",itemTit:"纯棉百搭！Forever21 男士 撞色插肩袖 七分袖T恤00237365",itemPrice:90,itemNum : 0,newPrice : 0},
				{id : "011",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1312/3948018c8cf84014fc23b31ce4baf937.jpg",itemTit:"纯棉百搭！Forever21 男士 撞色插肩袖 七分袖T恤00237365",itemPrice:90,itemNum : 0,newPrice : 0},
				{id : "012",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "013",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1312/3948018c8cf84014fc23b31ce4baf937.jpg",itemTit:"纯棉百搭！Forever21 男士 撞色插肩袖 七分袖T恤00237365",itemPrice:90,itemNum : 0,newPrice : 0},
				{id : "014",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "015",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1312/3948018c8cf84014fc23b31ce4baf937.jpg",itemTit:"纯棉百搭！Forever21 男士 撞色插肩袖 七分袖T恤00237365",itemPrice:90,itemNum : 0,newPrice : 0},
				{id : "016",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "017",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1312/3948018c8cf84014fc23b31ce4baf937.jpg",itemTit:"纯棉百搭！Forever21 男士 撞色插肩袖 七分袖T恤00237365",itemPrice:90,itemNum : 0,newPrice : 0},
				{id : "018",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "019",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "020",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1312/3948018c8cf84014fc23b31ce4baf937.jpg",itemTit:"纯棉百搭！Forever21 男士 撞色插肩袖 七分袖T恤00237365",itemPrice:90,itemNum : 0,newPrice : 0},
				{id : "021",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1312/3948018c8cf84014fc23b31ce4baf937.jpg",itemTit:"纯棉百搭！Forever21 男士 撞色插肩袖 七分袖T恤00237365",itemPrice:90,itemNum : 0,newPrice : 0},
				{id : "022",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "023",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1312/3948018c8cf84014fc23b31ce4baf937.jpg",itemTit:"纯棉百搭！Forever21 男士 撞色插肩袖 七分袖T恤00237365",itemPrice:90,itemNum : 0,newPrice : 0},
				{id : "024",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "025",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1312/3948018c8cf84014fc23b31ce4baf937.jpg",itemTit:"纯棉百搭！Forever21 男士 撞色插肩袖 七分袖T恤00237365",itemPrice:90,itemNum : 0,newPrice : 0},
				{id : "026",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1309/d757f9731b961b7493797166c06e21df.jpg",itemTit:"全新升级！UA 安德玛 Clutchfit Drive 3 篮球",itemPrice:559,itemNum : 0,newPrice : 0},
				{id : "027",itemdes : "nike 官网7折",itemImg :"http://shihuo.hupucdn.com/newsIndex11/201702/1312/3948018c8cf84014fc23b31ce4baf937.jpg",itemTit:"纯棉百搭！Forever21 男士 撞色插肩袖 七分袖T恤00237365",itemPrice:90,itemNum : 0,newPrice : 0},
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