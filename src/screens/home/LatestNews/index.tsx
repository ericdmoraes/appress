import React from 'react';
import { FlatList } from 'react-native';
import Post from '../../../models/post';
import ItemCard from '../../_components/ItemCard';
import { SectionContainer, TitleLabel } from './styles';

const LatestNews = ({
	items,
	navigateTo,
}: {
	items: Post[];
	navigateTo: (postId: number) => void;
}) => {
	return (
		<SectionContainer>
			<TitleLabel>Últimas Notícias</TitleLabel>
			<FlatList
				horizontal={true}
				data={items.slice(3, items.length)}
				renderItem={({ item }) => (
					<ItemCard handleNavigationPost={navigateTo} item={item} />
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</SectionContainer>
	);
};

export default LatestNews;
