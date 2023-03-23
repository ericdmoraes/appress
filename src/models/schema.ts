import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
	version: 5,
	tables: [
		tableSchema({
			name: 'posts',
			columns: [
				{ name: 'wordpress_id', type: 'number' },
				{ name: 'title', type: 'string' },
				{ name: 'pictureUrl', type: 'string' },
				{ name: 'description', type: 'string' },
				{ name: 'htmlDescription', type: 'string' },
				{ name: 'category_id', type: 'number' },
				{ name: 'author_id', type: 'number' },
			],
		}),
		tableSchema({
			name: 'categories',
			columns: [
				// { name: 'id', type: 'number' },
				{ name: 'description', type: 'string' },
				{ name: 'name', type: 'string' },
				{ name: 'wordpress_id', type: 'number' },
				{ name: 'parent_id', type: 'number' },
				{ name: 'wordpress_id', type: 'number' },
			],
		}),
		tableSchema({
			name: 'users',
			columns: [
				{ name: 'name', type: 'string' },
				{ name: 'wordpress_id', type: 'number' },
			],
		}),
	],
});
