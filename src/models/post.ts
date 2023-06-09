import { Model } from '@nozbe/watermelondb';
import { text, field } from '@nozbe/watermelondb/decorators';

export default class Post extends Model {
	static table = 'posts';

	@field('wordpress_id') wordpressId!: number;
	@text('title') title!: string;
	@text('pictureUrl') pictureUrl!: string;
	@text('picture_caption') pictureCaption!: string;
	@text('description') description!: string;
	@text('htmlDescription') htmlDescription!: string;
	@field('category_id') categoryId!: number;
	@field('author_id') authorId!: number;
	@text('publicated_at') publicatedAt!: string;
	@text('updated_post_at') updatedPostAt!: string;
}
