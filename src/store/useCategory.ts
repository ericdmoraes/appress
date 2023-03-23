import { create } from 'zustand';

interface CategoryZustand {
	name: string;
	id: string;
	wordpressId: number;
	isSelected: boolean;
	setName: (name: string) => void;
	setWordpressId: (id: number) => void;
	setId: (id: string) => void;
	setSelected: (status: boolean) => void;
}

export const useCategory = create<CategoryZustand>((set) => ({
	name: '',
	id: '',
	wordpressId: 0,
	isSelected: false,
	setSelected: (status) => {
		set((state) => {
			return {
				...state,
				isSelected: status,
			};
		});
	},
	setName: (name) => {
		set((state) => {
			return {
				...state,
				name,
			};
		});
	},
	setWordpressId: (id) => {
		set((state) => {
			return {
				...state,
				wordpressId: id,
			};
		});
	},
	setId: (id) => {
		set((state) => {
			return {
				...state,
				id,
			};
		});
	},
}));

export const setCategory = (id: string, name: string, wordpressId: number) => {
	const { setName, setWordpressId, setId, setSelected } =
		useCategory.getState();
	setName(name);
	setWordpressId(wordpressId);
	setId(id);
	setSelected(true);
};

export const clearCategory = () => {
	const { setSelected } = useCategory.getState();
	setSelected(false);
};
