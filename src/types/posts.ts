export type rawPost = {
	id: number;
	date: string;
	date_gmt: string;
	guid: {
		rendered: string;
	};
	modified: string;
	modified_gmt: string;
	slug: string;
	status: string;
	type: string;
	link: string;
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
		protected: boolean;
	};
	excerpt: {
		rendered: string;
		protected: boolean;
	};
	author: number;
	featured_media: number;
	comment_status: string;
	ping_status: string;
	sticky: boolean;
	template: string;
	format: string;
	meta: [];
	categories: number[];
	tags: number[];
	_links: {
		self: [
			{
				href: string;
			}
		];
		collection: [
			{
				href: string;
			}
		];
		about: [
			{
				href: string;
			}
		];
		author: [
			{
				embeddable: boolean;
				href: string;
			}
		];
		replies: [
			{
				embeddable: boolean;
				href: string;
			}
		];
		'version-history': [
			{
				count: number;
				href: string;
			}
		];
		'predecessor-version': [
			{
				id: number;
				href: string;
			}
		];
		'wp:featuredmedia': [
			{
				embeddable: boolean;
				href: string;
			}
		];
		'wp:attachment': [
			{
				href: string;
			}
		];
		'wp:term': [
			{
				taxonomy: string;
				embeddable: boolean;
				href: string;
			},
			{
				taxonomy: string;
				embeddable: boolean;
				href: string;
			}
		];
		curies: [
			{
				name: string;
				href: string;
				templated: boolean;
			}
		];
	};
};

export type formatedPost = {
	id: number;
	title: string;
	pictureUrl: string;
	description: string;
	htmlDescription: string;
	categories: number[];
};
