import React from 'react';
import { CategoryContainer, CategoryLabel } from './styles';

const CategoryNameContainer = ({ name }: { name: string }) => {
	return (
		<CategoryContainer>
			<CategoryLabel>{name.toUpperCase()}</CategoryLabel>
		</CategoryContainer>
	);
};

export default CategoryNameContainer;
