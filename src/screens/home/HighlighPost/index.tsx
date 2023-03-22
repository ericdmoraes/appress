//import liraries
import React from 'react';

import { SectionContainer, TitleLabel } from './styles';

import ItemCard from '../../_components/ItemCard';

import Post from '../../../models/post';

const HighlightPost = ({
	item,
	navigateTo,
}: {
	item: Post;
	navigateTo: (itemId: number) => void;
}) => {
	return (
		<SectionContainer>
			<TitleLabel>Destaque</TitleLabel>
			<ItemCard handleNavigationPost={navigateTo} item={item} />
		</SectionContainer>
	);
};

export default HighlightPost;
