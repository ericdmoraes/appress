export type rawUser = {
	id: number;
	name: string;
	url: string;
	description: string;
	link: string;
	slug: string;
	avatar_urls: {
		'24': string;
		'48': string;
		'96': string;
	};
	meta: [];
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
	};
};

export type formatedUser = {
	wordpressId: number;
	name: string;
};
