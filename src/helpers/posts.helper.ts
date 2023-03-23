import { formatedPost, rawPost } from '../types/posts';

export const formatPostObject = async (
	posts: rawPost[]
): Promise<formatedPost[]> => {
	const formatedPosts = await Promise.all(
		posts.map(async (post, index) => {
			const picUrl: string = post._links['wp:featuredmedia'][0].href;

			return {
				title: post.title.rendered,
				description: post.excerpt.rendered.replace(/<\/?[^>]+>/gi, ''),
				htmlDescription: post.content.rendered,
				id: index,
				pictureUrl: await handleGetImage(picUrl),
				categories: post.categories,
				authorId: post.author,
				publicatedAt: post.date,
				updatedPostAt: post.modified,
			};
		})
	);

	return formatedPosts;
};

const handleGetImage = async (picUrl: string): Promise<string> => {
	const response = await fetch(picUrl);
	const data = await response.json();
	return data.guid.rendered;
};
