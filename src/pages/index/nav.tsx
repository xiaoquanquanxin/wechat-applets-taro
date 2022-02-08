import {Button, CoverImage, Icon, Text, View} from "@tarojs/components";
import {getRect} from "../../utils/utils";
import {navigateTo} from '@tarojs/taro';
import './nav.less';
import {Component} from "react";

const activeImgSrc = '/assets/img/active.png';
const rect = getRect();

// console.log(rect);

class ReminderWrap extends Component<any, { open: boolean }> {

	constructor(props) {
		super(props);
		this.state = {
			open: true
		};
	}

	render() {
		const {open} = this.state;
		return open && (
			<View className='reminder-wrap'>
				<View className="reminder">
					<View className='reminder-left'>
						<CoverImage className='reminder-location'
									src={activeImgSrc}
						/>
						<View className='reminder-info'>
							<Text className='reminder-info-title'>定位服务尚未开启</Text>
							<Text className='reminder-info-desc'>开启后才能开启后才能开启后才能</Text>
						</View>
					</View>
					<View className='reminder-right'>
						<Button className='reminder-open'>去开启</Button>
						<Icon size='16' type='clear' color='black'
							  onClick={() => {
								  this.setState(() => ({
									  open: false
								  }));
							  }}
						/>
					</View>
				</View>
			</View>
		) || null;
	}
}

const Nav = () => {
	return (
		<View className='nav-wrap' style={{minHeight: rect.bottom + 10 + 'px'}}>
			<View className='nav'
				  style={
					  {
						  width: rect.left - 16 + 'px',
						  height: rect.height + 'px',
						  marginTop: rect.top + 'px'
					  }
				  }>
				<View className='position'
					  onClick={() => {
						  navigateTo({
							  url: '/pages/selectLocation/selectLocation'
						  });
					  }}
				>
					<Text>北京</Text>
					<CoverImage className='position-icon'
								src={activeImgSrc}
					/>
				</View>
				<View className='input-wrap' style={{height: rect.height - 4 + 'px'}}>
					<Icon size='20' type='search' className='input-icon'/>
					<Text className='input'
						  onClick={() => {
							  navigateTo({
								  url: '/pages/mainSearch/mainSearch'
							  });
						  }}
					>输入商家名、品类或商圈</Text>
				</View>
			</View>
			<ReminderWrap/>
		</View>
	);
};
export default Nav;
