import React, { useEffect, useState } from 'react';
import { Text, useWindowDimensions, ScrollView, Image } from 'react-native';

import { PostScreenProp } from '..';

import RenderHtml from 'react-native-render-html';
import { Container, PicContainer } from './styles';
import { database } from '../../models';
import PostModel from '../../models/post';
import { Q } from '@nozbe/watermelondb';
import Category from '../../models/category';
import User from '../../models/user';

const Post = ({ route }: PostScreenProp) => {
	const { width } = useWindowDimensions();

	const { wordpressId } = route.params;

	const [post, setPost] = useState<PostModel>();
	const [category, setCategory] = useState<Category>();
	const [author, setAuthor] = useState<User>();

	useEffect(() => {
		handlePostData();
	}, [wordpressId]);

	const handlePostData = async () => {
		const postsCollection = await database
			.get<PostModel>('posts')
			.query(Q.where('wordpress_id', Q.eq(wordpressId)))
			.fetch();

		const categoryCollection = await database
			.get<Category>('categories')
			.query(Q.where('wordpress_id', Q.eq(postsCollection[0].categoryId)))
			.fetch();

		const authorCollection = await database
			.get<User>('users')
			.query(Q.where('wordpress_id', Q.eq(postsCollection[0].authorId)))
			.fetch();

		setAuthor(authorCollection[0]);
		setCategory(categoryCollection[0]);
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
