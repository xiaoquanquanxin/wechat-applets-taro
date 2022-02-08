import Taro from "@tarojs/taro";

function getRect() {
	if (getRect.rect) {
		return getRect.rect;
	}
	try {
		const systemInfo = wx.getSystemInfoSync();
		const isIos = systemInfo.system.toLowerCase().includes('ios');
		try {
			const rect = Taro.getMenuButtonBoundingClientRect ? Taro.getMenuButtonBoundingClientRect() : null;
			if (rect === null) {
				throw 'getMenuButtonBoundingClientRect error';
			}
			//取值为0的情况
			if (!rect.width) {
				throw 'getMenuButtonBoundingClientRect error';
			}
			//取值为0的情况
			if (!rect.width) {
				throw 'getMenuButtonBoundingClientRect error';
			}
			getRect.rect = rect;
			return rect;
		} catch (error) {
			let gap = 0; //胶囊按钮上下间距 使导航内容居中
			let width = 96; //胶囊的宽度，android大部分96，ios为88
			if (systemInfo.platform === 'android') {
				gap = 8;
				width = 96;
			} else if (systemInfo.platform === 'devtools') {
				if (isIos) {
					gap = 5.5; //开发工具中ios手机
				} else {
					gap = 7.5; //开发工具中android和其他手机
				}
			} else {
				gap = 4;
				width = 88;
			}
			if (!systemInfo.statusBarHeight) {
				//开启wifi的情况下修复statusBarHeight值获取不到
				systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
			}
			const rect = {
				//获取不到胶囊信息就自定义重置一个
				bottom: systemInfo.statusBarHeight + gap + 32,
				height: 32,
				left: systemInfo.windowWidth - width - 10,
				right: systemInfo.windowWidth - 10,
				top: systemInfo.statusBarHeight + gap,
				width: width
			};
			console.log('error', error);
			console.log('rect', rect);
			getRect.rect = rect;
			return rect;
		}
	} catch (e) {
		console.log(e);
	}

}

export {
	getRect
};
