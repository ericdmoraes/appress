import { Model } from '@nozbe/watermelondb';
import { field, text } from '@nozbe/watermelondb/decorators';

export default class Category extends Model {
	static table = 'categories';

	@text('description') description!: string;
	@text('name') name!: string;
	@field('parent_id') parentId!: number;
	@field('wordpress_id') wordpressId!: number;
}
