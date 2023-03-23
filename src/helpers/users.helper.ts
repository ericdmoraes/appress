import { formatedUser, rawUser } from '../types/users';

export const formatUserObject = (users: rawUser[]): formatedUser[] => {
	const formatedUsers = users.map((user, index) => {
		return {
			wordpressId: user.id,
			name: user.name,
		};
	});

	return formatedUsers;
};
