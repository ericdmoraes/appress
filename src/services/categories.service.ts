import { formatCategoriesObject } from '../helpers/categories.helper';
import { database } from '../models';
import Category from '../models/category';

const apiUrl = process.env.API_URL;
const allCategories = process.env.CATEGORIES;

export const serviceGetCategories = async () => {
	const response = await fetch(`${apiUrl}/${allCategories}`);
	const categories: [] = await response.json();
	const formatedCategories = await formatCategoriesObject(categories);

	const categoriesCollection = database.get<Category>('categories');
	await database.write(async () => {
		await database.batch(
			...formatedCategories.map((formatedCategory) =>
				categoriesCollection.prepareCreate((newCategory) => {
					newCategory.description = formatedCategory.description;
					newCategory.name = formatedCategory.name;
					newCategory.parentId = formatedCategory.parentId;
					newCategory.wordpressId = formatedCategory.id;
				})
			)
		);
	});
};
