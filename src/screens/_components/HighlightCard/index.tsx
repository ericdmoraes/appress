import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { Q } from '@nozbe/watermelondb';

import { database } from '../../../models';
import Category from '../../../models/category';
import Post from '../../../models/post';
import User from '../../../models/user';

import {
	AuthorLabel,
	CategoryContainer,
	CategoryLabel,
	Container,
	FadedLabel,
	PicContainer,
	TitleContainer,
	TitleLabel,
} from './styles';
import { HomeScreenNavigationProp } from '../..';

const HighlightCard = ({ postId }: { postId: string }) => {
	const [post, setPost] = useState<Post>();
	const [category, setCategory] = useState<Category>();
	const [author, setAuthor] = useState<User>();

	const navigation = useNavigation<HomeScreenNavigationProp>();

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

	const handleNavigation = (wordpressId: number) => {
		navigation.navigate('Post', { wordpressId });
	};

	return (
		<Container>
			{post && category && author && (
				<>
					<CategoryContainer>
						<CategoryLabel>{category.name.toUpperCase()}</CategoryLabel>
					</CategoryContainer>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={() => handleNavigation(post.wordpressId)}
					>
						<TitleContainer>
							<TitleLabel numberOfLines={2}>{post.title}</TitleLabel>
						</TitleContainer>
						<PicContainer source={{ uri: post.pictureUrl }} />
						<FadedLabel>
							Por <AuthorLabel>{author.name}</AuthorLabel>
						</FadedLabel>
						<FadedLabel>
							{format(new Date(post.publicatedAt), 'MMM dd, yyyy')}
						</FadedLabel>
					</TouchableOpacity>
				</>
			)}
		</Container>
	);
};

export default HighlightCard;
