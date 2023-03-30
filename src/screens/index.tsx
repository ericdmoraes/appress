import react, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

import { ThemeProvider } from 'styled-components/native';
import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { NavigationContainer, RouteProp } from '@react-navigation/native';

import theme from '../themes/theme';

import Home from './home/';
import Post from './post/';
import { serviceGetPosts } from '../services/posts.service';
import { serviceGetCategories } from '../services/categories.service';
import Header from './_components/Header';
import { serviceGetUsers } from '../services/users.service';

type RootStackParamList = {
	Home: undefined;
	Post: { wordpressId: number };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'Home'
>;
export type PostScreenProp = RouteProp<RootStackParamList, 'Post'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		async function init() {
			const netInfo = await NetInfo.fetch();
			if (netInfo.isConnected) {
				await serviceGetPosts();
				await serviceGetCategories();
				await serviceGetUsers();
			} else {
				console.log('You are not connected.');
			}
			setLoading(false);
		}
		init();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			{!isLoading && (
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{ statusBarColor: 'white', statusBarStyle: 'dark' }}
						initialRouteName="Home"
					>
						<Stack.Screen
							name="Home"
							options={{
								header: () => <Header />,
							}}
							component={Home}
						/>
						<Stack.Screen
							name="Post"
							options={{
								headerTitle: '',
							}}
							component={Post}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			)}
		</ThemeProvider>
	);
}
