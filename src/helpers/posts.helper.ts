import { formatedPost, rawPost } from '../types/posts';

export const formatPostObject = async (
	posts: rawPost[]
): Promise<formatedPost[]> => {
	const formatedPosts = await Promise.all(
		posts.map(async (post, index) => {
			const picUrl: string = post._links['wp:featuredmedia'][0].href;

			const picData = await handleGetImage(picUrl);
			return {
				title: post.title.rendered,
				description: post.excerpt.rendered.replace(/<\/?[^>]+>/gi, ''),
				htmlDescription: post.content.rendered,
				id: index,
				pictureUrl: picData.url,
				pictureCaption: picData.description.replace(/<\/?[^>]+>/gi, ''),
				categories: post.categories,
				authorId: post.author,
				publicatedAt: post.date,
				updatedPostAt: post.modified,
			};
		})
	);

	return formatedPosts;
};

const handleGetImage = async (
	picUrl: string
): Promise<{ url: string; description: string }> => {
	const response = await fetch(picUrl);
	const data = await response.json();
	return {
		url: data.guid.rendered,
		description: data.caption.rendered,
	};
};
