//import liraries
import React, { createRef, useState } from 'react';

import { SectionContainer } from './styles';

import { Text, TouchableOpacity, View } from 'react-native';

import Post from '../../../models/post';
import HighlightCard from '../../_components/HighlightCard';

import PagerView from 'react-native-pager-view';

const HighlightPost = ({ item: posts }: { item: Post[] }) => {
	const [position, setPostion] = useState(0);

	const pagerViewRef = createRef<PagerView>();

	return (
		<SectionContainer>
			<PagerView
				ref={pagerViewRef}
				onPageSelected={({ nativeEvent }) => {
					setPostion(nativeEvent.position);
				}}
				pageMargin={10}
				style={{ height: 450 }}
				initialPage={0}
			>
				{posts.map((post, index) => (
					<View key={index + 1}>
						<HighlightCard postId={post.id} />
					</View>
				))}
			</PagerView>

			<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
				{posts.length > 1 &&
					posts.map((post, index) => (
						<TouchableOpacity
							onPress={() => {
								pagerViewRef.current?.setPage(index);
							}}
							key={index}
							hitSlop={30}
							style={{
								width: `${100 / posts.length - posts.length}%`,
								height: 2,
								backgroundColor: position === index ? 'black' : 'silver',
							}}
						/>
					))}
			</View>
		</SectionContainer>
	);
};

export default HighlightPost;
