import react, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
	createNativeStackNavigator,
	NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import theme from '../themes/theme';

import Home from './home/';
import Post from './post/';
import { serviceGetPosts } from '../services/posts.service';
import { serviceGetCategories } from '../services/categories.service';
import ModelPost from '../models/post';

type RootStackParamList = {
	Home: undefined;
	Post: { postId: number };
};

export type HomeScreenProp = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type PostScreenProp = NativeStackScreenProps<RootStackParamList, 'Post'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		async function init() {
			await serviceGetPosts();
			await serviceGetCategories();
			setLoading(false);
		}
		init();
	});

	return (
		<ThemeProvider theme={theme}>
			{!isLoading && (
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Home">
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="Post" component={Post} />
					</Stack.Navigator>
				</NavigationContainer>
			)}
		</ThemeProvider>
	);
}
