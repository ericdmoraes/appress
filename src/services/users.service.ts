import { formatUserObject } from '../helpers/users.helper';
import { database } from '../models';
import User from '../models/user';
import { rawUser } from '../types/users';

const apiUrl = process.env.API_URL;
const usersUrl = process.env.USERS;

export const serviceGetUsers = async () => {
	const response = await fetch(`${apiUrl}/${usersUrl}`);
	const users: rawUser[] = await response.json();
	const formatedUsers = formatUserObject(users);

	const usersCollection = database.get<User>('users');

	await database.write(async () => {
		await database.batch(
			...formatedUsers.map((formatedUser) =>
				usersCollection.prepareCreate((newUser) => {
					newUser.wordpressId = formatedUser.wordpressId;
					newUser.name = formatedUser.name;
				})
			)
		);
	});
};
