import {MovableArea, MovableView} from "@tarojs/components";

const MoveArea = () => {
	return (
		<MovableArea style='height: 200px; width: 200px; background: red;'>
			<MovableView style='height: 50px; width: 50px; background: blue;' direction='all'>我去</MovableView>
		</MovableArea>
	);
};
export default MoveArea;
