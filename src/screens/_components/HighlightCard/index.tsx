//import liraries
import { Q } from '@nozbe/watermelondb';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { database } from '../../../models';
import Category from '../../../models/category';
import Post from '../../../models/post';
import User from '../../../models/user';

const HighlightCard = ({ postId }: { postId: string }) => {
	const [post, setPost] = useState<Post>();
	const [category, setCategory] = useState<Category>();
	const [author, setAuthor] = useState<User>();

	useEffect(() => {
		getPostHighlight();
	}, [postId]);

	const getPostHighlight = async () => {
		const postCollection = await database
			.get<Post>('posts')
			.query(Q.where('id', Q.eq(postId)))
			.fetch();

		const categoryCollection = await database
			.get<Category>('categories')
			.query(Q.where('wordpress_id', Q.eq(postCollection[0].categoryId)))
			.fetch();

		const authorCollection = await database
			.get<User>('users')
			.query(Q.where('wordpress_id', Q.eq(postCollection[0].authorId)))
			.fetch();

		setAuthor(authorCollection[0]);
		setCategory(categoryCollection[0]);
		setPost(postCollection[0]);
	};

	return (
		<View>
			{post && category && author && (
				<>
					<Text>{category.name}</Text>
					<Text>{post.title}</Text>
					<Text>{post.pictureUrl}</Text>
					<Text>Por: {author.name}</Text>
				</>
			)}
		</View>
	);
};

export default HighlightCard;
