//import liraries
import React from 'react';

import { SectionContainer, TitleLabel } from './styles';

import Post from '../../../models/post';
import HighlightCard from '../../_components/HighlightCard';

const HighlightPost = ({
	item,
	navigateTo,
}: {
	item: Post;
	navigateTo: (itemId: number) => void;
}) => {
	return (
		<SectionContainer>
			<HighlightCard postId={item.id} />
		</SectionContainer>
	);
};

export default HighlightPost;
