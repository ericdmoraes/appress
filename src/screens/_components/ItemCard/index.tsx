//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Post from '../../../models/post';
import {
	ItemContainer,
	PicContainer,
	LabelContainer,
	ItemName,
} from './styles';

// create a component
const ItemCard = ({
	item,
	handleNavigationPost,
}: {
	item: Post;
	handleNavigationPost: (itemId: number) => void;
}) => {
	return (
		<ItemContainer onPress={() => handleNavigationPost(item.wordpressId)}>
			<PicContainer source={{ uri: item.pictureUrl }} resizeMode="cover">
				<LabelContainer>
					<ItemName>{item.title}</ItemName>
				</LabelContainer>
			</PicContainer>
		</ItemContainer>
	);
};

export default ItemCard;
