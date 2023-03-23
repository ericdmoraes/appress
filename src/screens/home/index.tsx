//import liraries
import React, { useEffect, useState } from 'react';
import { HomeScreenProp } from '..';

import { Container, Separator } from './styles';

import Post from '../../models/post';
import { database } from '../../models';

import HighlightPositon from './HighlighPost';
import LatestNews from './LatestNews';

import { useCategory } from '../../store/useCategory';

const Home = ({ navigation }: HomeScreenProp) => {
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

	const handleNavigationPost = (itemId: number) => {
		navigation.navigate('Post', { postId: itemId });
	};

	return (
		<Container>
			{posts.length > 0 && (
				<>
					<HighlightPositon item={posts.slice(0, 3)} />
					{posts.length > 3 && (
						<>
							<Separator />
							<LatestNews navigateTo={handleNavigationPost} items={posts} />
						</>
					)}
				</>
			)}
		</Container>
	);
};

export default Home;
