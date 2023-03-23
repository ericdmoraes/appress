//import liraries
import React, { useEffect, useState } from 'react';
import { database } from '../../../models';
import Category from '../../../models/category';
import Post from '../../../models/post';
import {
	ItemContainer,
	PicContainer,
	LabelContainer,
	ItemName,
	CategoryName,
} from './styles';

const ItemCard = ({
	item,
	handleNavigationPost,
}: {
	item: Post;
	handleNavigationPost: (itemId: number) => void;
}) => {
	const [categories, setCategories] = useState<Category[]>();

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		setCategories(await database.get<Category>('categories').query().fetch());
	};

	const handleCategoryName = () => {
		const selectedName = categories!.filter(
			(category) => category.wordpressId === item.categoryId
		);

		return selectedName[0].name;
	};

	return (
		<ItemContainer onPress={() => handleNavigationPost(item.wordpressId)}>
			<PicContainer source={{ uri: item.pictureUrl }} resizeMode="cover">
				<LabelContainer>
					<ItemName>{item.title}</ItemName>
					{categories && <CategoryName>{handleCategoryName()}</CategoryName>}
				</LabelContainer>
			</PicContainer>
		</ItemContainer>
	);
};

export default ItemCard;
