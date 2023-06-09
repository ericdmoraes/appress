export type rawCategory = {
	id: number;
	count: number;
	description: string;
	link: string;
	name: string;
	slug: string;
	taxonomy: string;
	parent: number;
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
		'wp:post_type': [
			{
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

export type formatedCategory = {
	id: number;
	description: string;
	name: string;
	parentId: number;
};
