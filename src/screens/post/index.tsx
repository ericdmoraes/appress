import React, { useEffect, useState } from 'react';
import { useWindowDimensions, Image, FlatList, View } from 'react-native';

import { PostScreenProp } from '..';

import RenderHtml from 'react-native-render-html';
import {
	AuthorLabel,
	FadedLabel,
	KeepReading,
	PicContainer,
	Separator,
	TitleLabel,
} from './styles';
import { database } from '../../models';
import PostModel from '../../models/post';
import { Q } from '@nozbe/watermelondb';
import Category from '../../models/category';
import User from '../../models/user';
import { format } from 'date-fns';
import CategoryNameContainer from '../_components/CategoryNameContainer';
import ListCard from '../_components/ListCard';
import Footer from '../_components/Footer';
import { useRoute } from '@react-navigation/native';

const Post = () => {
	const { width } = useWindowDimensions();

	const {
		params: { wordpressId },
	} = useRoute<PostScreenProp>();

	const [post, setPost] = useState<PostModel>();
	const [relatedPosts, setRelatedPost] = useState<PostModel[]>();
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

		const relatedPosts = await database
			.get<PostModel>('posts')
			.query(
				Q.where('category_id', Q.eq(postsCollection[0].categoryId)),
				Q.where('title', Q.notEq(postsCollection[0].title)),
				Q.take(5)
			)
			.fetch();

		const categoryCollection = await database
			.get<Category>('categories')
			.query(Q.where('wordpress_id', Q.eq(postsCollection[0].categoryId)))
			.fetch();

		const authorCollection = await database
			.get<User>('users')
			.query(Q.where('wordpress_id', Q.eq(postsCollection[0].authorId)))
			.fetch();

		setRelatedPost(relatedPosts);
		setAuthor(authorCollection[0]);
		setCategory(categoryCollection[0]);
		setPost(postsCollection[0]);
	};

	return post && relatedPosts ? (
		<FlatList
			contentContainerStyle={{
				backgroundColor: 'white',
			}}
			data={relatedPosts}
			renderItem={({ item }) => <ListCard item={item} />}
			ListFooterComponent={() => <Footer />}
			ListHeaderComponent={() => (
				<>
					<View style={{ paddingRight: 10, paddingLeft: 10 }}>
						<CategoryNameContainer name={category!.name} />
						<TitleLabel>{post.title}</TitleLabel>
						<FadedLabel>
							Por <AuthorLabel>{author?.name}</AuthorLabel>
						</FadedLabel>
						<FadedLabel>
							{format(new Date(post.publicatedAt), 'MMM dd, yyyy')}
						</FadedLabel>
						<PicContainer>
							<Image
								style={{ width: '100%', height: 200 }}
								source={{ uri: post.pictureUrl }}
								resizeMode={'cover'}
							/>
							<FadedLabel style={{ fontSize: 14 }}>
								{post.pictureCaption}
							</FadedLabel>
						</PicContainer>
					</View>
					<Separator style={{ marginTop: 20 }} />
					<View style={{ paddingRight: 10, paddingLeft: 10, marginBottom: 10 }}>
						<RenderHtml
							contentWidth={width}
							source={{ html: post.htmlDescription }}
						/>
						<FadedLabel>
							Por <AuthorLabel>{author?.name}</AuthorLabel>
						</FadedLabel>
					</View>
					{relatedPosts.length > 0 && (
						<>
							<Separator style={{ marginBottom: 20, marginTop: 20 }} />
							<KeepReading>Continue Lendo</KeepReading>
						</>
					)}
				</>
			)}
		/>
	) : (
		<></>
	);
};

export default Post;

// 	<ScrollView
// 		style={{ paddingRight: 10, paddingLeft: 10, backgroundColor: 'white' }}
// 	>
// {post && (
// <>
// 	<CategoryNameContainer name={category!.name} />
// 	<TitleLabel>{post.title}</TitleLabel>
// 	<FadedLabel>
// 		Por <AuthorLabel>{author?.name}</AuthorLabel>
// 	</FadedLabel>
// 	<FadedLabel>
// 		{format(new Date(post.publicatedAt), 'MMM dd, yyyy')}
// 	</FadedLabel>
// 	<PicContainer>
// 		<Image
// 			style={{ width: '100%', height: 200 }}
// 			source={{ uri: post.pictureUrl }}
// 			resizeMode={'cover'}
// 		/>
// 		<FadedLabel>{post.pictureCaption}</FadedLabel>
// 	</PicContainer>
// 	<RenderHtml
// 		contentWidth={width}
// 		source={{ html: post.htmlDescription }}
// 	/>
// </>
// )}
// 	</ScrollView>
// );
