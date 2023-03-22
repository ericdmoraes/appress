import { formatedCategory, rawCategory } from '../types/categories';

export const formatCategoriesObject = async (
	categories: rawCategory[]
): Promise<formatedCategory[]> => {
	const formatedCategories = await Promise.all(
		categories.map(async (category, index) => {
			return {
				id: category.id,
				description: category.description,
				name: category.name,
				parentId: category.parent,
			};
		})
	);

	return formatedCategories;
};
