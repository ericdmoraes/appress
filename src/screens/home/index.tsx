//import liraries
import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import Post from '../../models/post';
import { database } from '../../models';

import HighlightPositon from './HighlighPost';
import LatestNews from './LatestNews';

import { useCategory } from '../../store/useCategory';
import { FlatList } from 'react-native';

const Home = () => {
	const [posts, setPosts] = useState<Post[]>([]);

	const { wordpressId, isSelected } = useCategory();

	useEffect(() => {
		handleLoadDataFromDb();
	}, [wordpressId, isSelected]);

	const handleLoadDataFromDb = async () => {
		let postResult: Post[] = await database.get<Post>('posts').query().fetch();

		if (isSelected) {
			postResult = postResult.filter((post) => post.categoryId === wordpressId);
		}

		setPosts(postResult);
	};

	return (
		<Container>
			<FlatList
				data={posts.slice(3, posts.length)}
				ListHeaderComponent={() => (
					<HighlightPositon item={posts.slice(0, 3)} />
				)}
				ListFooterComponent={() => (
					<LatestNews items={posts.slice(3, posts.length)} />
				)}
				renderItem={({ item }) => <></>}
				keyExtractor={(item) => item.id}
			/>
		</Container>
	);
};

export default Home;
