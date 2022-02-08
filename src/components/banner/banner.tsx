import {Swiper, SwiperItem, View, CoverImage, ITouchEvent} from '@tarojs/components';
import {navigateTo} from '@tarojs/taro';
import './banner.less';

const imgSrc = '/assets/img/active.png';
//	每一项
const BannerItem = ({list}: { list: Array<{ name: string }> }) => {
	return (
		<View className='banner-item'>
			{
				list.map((item, index) => {
					return (
						<View key={index} className='banner-merchant-wrap'
							  onClick={(e: ITouchEvent) => {
								  console.log(e);
								  console.log(item);
								  navigateTo({
									  url: '/pages/commodityDetails/commodityDetails'
								  });
							  }}
						>
							<View className='banner-merchant'>
								<View className='banner-merchant-img-wrap'>
									<CoverImage className='banner-merchant-img'
												src={imgSrc}
									/>
								</View>
								<View className='banner-merchant-text'>
									{item.name}
								</View>
							</View>
						</View>
					);
				})
			}
		</View>
	);
};
const list1 = [
	{name: '外卖'},
	{name: '美食'},
	{name: '酒店'},
	{name: '外卖'},
	{name: '美食'},
	{name: '酒店'},
];
const Banner = () => {
	return (
		<Swiper
			className='banner'
			autoplay={false}
			interval={1000}
			indicatorColor='#999'
			onClick={() => {
			}}
			onAnimationFinish={() => {
			}}
		>
			<SwiperItem>
				<BannerItem list={list1}/>
			</SwiperItem>
			<SwiperItem>
				<BannerItem list={list1}/>
			</SwiperItem>
			<SwiperItem>
				<BannerItem list={list1}/>
			</SwiperItem>
		</Swiper>
	);
};


export default Banner;
