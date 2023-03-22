import React, { useEffect, useState } from 'react';
import { Text, useWindowDimensions, ScrollView, Image } from 'react-native';

import { PostScreenProp } from '..';

import RenderHtml from 'react-native-render-html';
import { Container, PicContainer } from './styles';
import { database } from '../../models';
import PostModel from '../../models/post';
import { Q } from '@nozbe/watermelondb';

const Post = ({ route, navigation }: PostScreenProp) => {
	const { width } = useWindowDimensions();

	const { postId } = route.params;

	const [post, setPost] = useState<PostModel>();

	useEffect(() => {
		handlePostData();
	}, [postId]);

	const handlePostData = async () => {
		const postsCollection = await database
			.get<PostModel>('posts')
			.query(Q.where('wordpress_id', Q.eq(postId)))
			.fetch();

		setPost(postsCollection[0]);
	};

	return (
		<ScrollView>
			{post && (
				<>
					<PicContainer>
						<Image
							style={{ width: '100%', height: 200 }}
							source={{ uri: post.pictureUrl }}
							resizeMode={'cover'}
						/>
					</PicContainer>
					<Container>
						<RenderHtml
							contentWidth={width}
							source={{ html: post.htmlDescription }}
						/>
					</Container>
				</>
			)}
		</ScrollView>
	);
};

export default Post;
