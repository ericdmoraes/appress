//import liraries
import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { HomeScreenProp } from '..';

import {
	Container,
	ItemContainer,
	ItemName,
	LabelContainer,
	PicContainer,
	SectionContainer,
	Separator,
	TitleLabel,
} from './styles';

import { database } from '../../models';
import Post from '../../models/post';
import Category from '../../models/category';

const Home = ({ navigation }: HomeScreenProp) => {
	const [isLoading, setLoading] = useState(true);
	const [posts, setPosts] = useState<Post[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		handleRequest();
	}, []);

	const handleRequest = async () => {
		setLoading(true);

		const postsCollection = await database.get<Post>('posts').query().fetch();
		const categoriesCollection = await database
			.get<Category>('categories')
			.query()
			.fetch();

		setPosts(postsCollection);
		setCategories(categoriesCollection);
		setLoading(false);
	};

	const handleNavigationPost = (itemId: number) => {
		navigation.navigate('Post', { postId: itemId });
	};

	const handleCategory = (categoryId: number) => {
		const category = categories.filter(
			(category) => category.wordpressId === categoryId
		);
		return category[0].name;
	};

	const ItemCard = ({ item }: { item: Post }) => {
		return (
			<ItemContainer onPress={() => handleNavigationPost(item.wordpressId)}>
				<PicContainer source={{ uri: item.pictureUrl }} resizeMode="cover">
					<LabelContainer>
						<ItemName>{item.title}</ItemName>
						<Text key={item.id} style={{ color: 'white', fontWeight: 'bold' }}>
							{handleCategory(item.categoryId)}
						</Text>
					</LabelContainer>
				</PicContainer>
			</ItemContainer>
		);
	};

	const HighLightPost = ({ item }: { item: Post }) => {
		return (
			<SectionContainer>
				<TitleLabel>Destaque</TitleLabel>
				<ItemCard item={item} />
			</SectionContainer>
		);
	};

	const LatestNews = ({ items }: { items: Post[] }) => {
		return (
			<SectionContainer>
				<TitleLabel>Últimas Notícias</TitleLabel>
				<FlatList
					horizontal={true}
					data={items.slice(1, items.length)}
					renderItem={({ item }) => <ItemCard item={item} />}
					keyExtractor={(item) => item.id.toString()}
				/>
			</SectionContainer>
		);
	};

	return (
		<Container>
			{isLoading === true ? (
				<TitleLabel>Carregando...</TitleLabel>
			) : (
				<>
					<HighLightPost item={posts[0]} />
					<Separator />
					<LatestNews items={posts} />
				</>
			)}
		</Container>
	);
};

export default Home;
