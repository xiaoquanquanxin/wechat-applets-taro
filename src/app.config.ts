export default defineAppConfig({
	pages: [
		'pages/index/index',
		'pages/demo/demo',
		'pages/icon/icon',
		'pages/mine/mine',
		'pages/wxParse/wxParse',
		'pages/mainSearch/mainSearch',
		'pages/selectLocation/selectLocation',
		'pages/commodityDetails/commodityDetails',
	],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#ffdb09',
		navigationBarTitleText: "美团",
	},
	tabBar: {
		custom: false,
		list: [
			{
				pagePath: 'pages/index/index',
				text: "首页",
				iconPath: "assets/img/tab.png",
				selectedIconPath: "assets/img/active.png",
			},
			{
				pagePath: 'pages/demo/demo',
				text: "分类",
				iconPath: "assets/img/tab.png",
				selectedIconPath: "assets/img/active.png",
			},
			{
				pagePath: 'pages/icon/icon',
				text: "赚钱",
				iconPath: "assets/img/tab.png",
				selectedIconPath: "assets/img/active.png",
			},
			{
				pagePath: 'pages/mine/mine',
				text: "我的",
				iconPath: "assets/img/tab.png",
				selectedIconPath: "assets/img/active.png",
			},
		],
	}
});
