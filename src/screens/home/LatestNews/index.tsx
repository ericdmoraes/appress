import React from 'react';
import { FlatList, Text } from 'react-native';
import Post from '../../../models/post';
import ListCard from '../../_components/ListCard';
import { NoPostsContainer, SectionContainer, TitleLabel } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
				<NoPostsContainer>
					<Icon name="newspaper-remove" size={120} color="silver" />
					<Text>Sem mais publicações nessa categoria.</Text>
				</NoPostsContainer>
			)}
		</SectionContainer>
	);
};

export default LatestNews;
