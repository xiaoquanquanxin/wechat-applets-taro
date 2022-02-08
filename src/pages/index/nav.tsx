import {CoverImage, Icon, Input, Text, View} from "@tarojs/components";
import {getRect} from "../../utils/utils";
import {navigateTo} from '@tarojs/taro';
import './nav.less';

const imgSrc = '/assets/img/active.png';
const rect = getRect();
console.log(rect.bottom);


const Nav = () => {
	return (
		<View className='nav-wrap' style={{height: rect.bottom + 20 + 'px'}}>
			<View className='nav' style={{width: rect.left - 16 + 'px'}}>
				<View className='position'
					  onClick={() => {
						  navigateTo({
							  url: '/pages/selectLocation/selectLocation'
						  });
					  }}
				>
					<Text>北京</Text>
					<CoverImage className='position-icon'
								src={imgSrc}
					/>
				</View>
				<View className='input-wrap'>
					<Icon size='20' type='search' className='input-icon'/>
					<Text className='input'
						  onClick={() => {
							  navigateTo({
								  url: '/pages/mainSearch/mainSearch'
							  });
						  }}
					>将会获取焦点</Text>
				</View>
			</View>
		</View>
	);
};
export default Nav;
