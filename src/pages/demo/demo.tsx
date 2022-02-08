import {Component} from 'react';
import {View, Text} from '@tarojs/components';
import './demo.less';

export default class Demo extends Component {

	render() {
		return (
			<View className='demo'>
				<Text>我是demo!</Text>
			</View>
		);
	}
}
