import { formatPostObject } from '../helpers/posts.helper';
import { database } from '../models';
import Post from '../models/post';

const apiUrl = process.env.API_URL;
const allPosts = process.env.POSTS;

export const serviceGetPosts = async () => {
	const response = await fetch(`${apiUrl}/${allPosts}`);
	const posts: [] = await response.json();
	const formatedPosts = await formatPostObject(posts);

	const postsCollection = database.get<Post>('posts');

	await database.write(async () => {
		await database.unsafeResetDatabase();
		await database.batch(
			...formatedPosts.map((formatedPost) =>
				postsCollection.prepareCreate((newPost) => {
					newPost.wordpressId = formatedPost.id;
					newPost.title = formatedPost.title;
					newPost.pictureUrl = formatedPost.pictureUrl;
					newPost.description = formatedPost.description;
					newPost.htmlDescription = formatedPost.htmlDescription;
					newPost.categoryId = formatedPost.categories[0];
					newPost.authorId = formatedPost.authorId;
					newPost.publicatedAt = formatedPost.publicatedAt;
					newPost.updatedPostAt = formatedPost.updatedPostAt;
				})
			)
		);
	});
};
