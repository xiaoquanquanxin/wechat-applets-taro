import React, {Component} from 'react';
import {getRect} from "../../utils/utils";
import {View, Text, Button, Input} from '@tarojs/components';
import {navigateTo} from '@tarojs/taro';
import './index.less';
import Banner from "../../components/banner/banner";
import MoveArea from "../../components/moveArea/moveArea";
import Nav from "./nav";

const Index = () => {
	return (
		<View className='index'>
			{/*黄色导航*/}
			<Nav/>
			{/*滚动的banner*/}
			<Banner/>
			{/*<MoveArea/>*/}
			<Button onClick={() => {
				navigateTo({
					url: '/pages/wxParse/wxParse'
				});
			}}
			>
				去demo
			</Button>
		</View>
	);
};

export default Index;
