//import liraries
import React, { useEffect, useState } from 'react';
import { HomeScreenProp } from '..';

import { Container, Separator, TitleLabel } from './styles';

import { database } from '../../models';
import Post from '../../models/post';

import HighlightPost from './HighlighPost';
import LatestNews from './LatestNews';
import CategoriesMenu from '../_components/CategoriesMenu';

const Home = ({ navigation }: HomeScreenProp) => {
	const [isLoading, setLoading] = useState(true);
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		handleLoadDataFromDb();
	}, []);

	const handleLoadDataFromDb = async () => {
		setLoading(true);
		setPosts(await database.get<Post>('posts').query().fetch());
		setLoading(false);
	};

	const handleNavigationPost = (itemId: number) => {
		navigation.navigate('Post', { postId: itemId });
	};

	return (
		<Container>
			{isLoading === true ? (
				<TitleLabel>Carregando...</TitleLabel>
			) : (
				<>
					<CategoriesMenu />
					<HighlightPost navigateTo={handleNavigationPost} item={posts[0]} />
					<Separator />
					<LatestNews navigateTo={handleNavigationPost} items={posts} />
				</>
			)}
		</Container>
	);
};

export default Home;
