import { Q } from '@nozbe/watermelondb';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { HomeScreenNavigationProp } from '../..';
import { database } from '../../../models';
import Category from '../../../models/category';
import Post from '../../../models/post';
import User from '../../../models/user';
import CategoryNameContainer from '../CategoryNameContainer';
import {
	ItemContainer,
	PicContainer,
	FadedLabel,
	AuthorLabel,
	TitleContainer,
	TitleLabel,
} from './styles';

const ListCard = ({ item: post }: { item: Post }) => {
	const [category, setCategory] = useState<Category>();
	const [author, setAuthor] = useState<User>();

	const { navigate } = useNavigation<HomeScreenNavigationProp>();

	useEffect(() => {
		getPostData();
	}, [post.id]);

	const getPostData = async () => {
		const categoryCollection = await database
			.get<Category>('categories')
			.query(Q.where('wordpress_id', Q.eq(post.categoryId)))
			.fetch();

		const authorCollection = await database
			.get<User>('users')
			.query(Q.where('wordpress_id', Q.eq(post.authorId)))
			.fetch();

		setAuthor(authorCollection[0]);
		setCategory(categoryCollection[0]);
	};

	return (
		<ItemContainer
			activeOpacity={0.9}
			onPress={() => navigate('Post', { wordpressId: post.wordpressId })}
		>
			<PicContainer source={{ uri: post.pictureUrl }} resizeMode="cover" />
			{category && <CategoryNameContainer name={category.name} />}
			<TitleContainer>
				<TitleLabel numberOfLines={2}>{post.title}</TitleLabel>
			</TitleContainer>
			<FadedLabel>
				Por <AuthorLabel>{author?.name}</AuthorLabel> |{' '}
				{format(new Date(post.publicatedAt), 'MMM dd, yyyy')}
			</FadedLabel>
		</ItemContainer>
	);
};

export default ListCard;
