import React from 'react';
import { FlatList, Text } from 'react-native';
import Post from '../../../models/post';
import ListCard from '../../_components/ListCard';
import { SectionContainer, TitleLabel } from './styles';

const LatestNews = ({ items }: { items: Post[] }) => {
	return (
		<SectionContainer>
			{items.length > 0 ? (
				<>
					<TitleLabel>Mais Recentes</TitleLabel>
					<FlatList
						contentContainerStyle={{ width: '100%' }}
						data={items}
						renderItem={({ item }) => <ListCard item={item} />}
						keyExtractor={(item) => item.id.toString()}
					/>
				</>
			) : (
				<Text>Sem posts mais recentes</Text>
			)}
		</SectionContainer>
	);
};

export default LatestNews;
