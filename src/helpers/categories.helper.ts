import { formatedCategory, rawCategory } from '../types/categories';

export const formatCategoriesObject = (
	categories: rawCategory[]
): formatedCategory[] => {
	const formatedCategories = categories.map((category, index) => {
		return {
			id: category.id,
			description: category.description,
			name: category.name,
			parentId: category.parent,
		};
	});

	return formatedCategories;
};
