import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from './schema';
import Post from './post';
import Category from './category';
import User from './user';

const adapter = new SQLiteAdapter({
	schema,
});

export const database = new Database({
	adapter,
	modelClasses: [Post, Category, User],
});
