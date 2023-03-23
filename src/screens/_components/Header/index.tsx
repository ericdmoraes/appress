//import liraries
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { database } from '../../../models';
import Category from '../../../models/category';
import {
	setCategory,
	clearCategory,
	useCategory,
} from '../../../store/useCategory';
import { AppLogoContainer, Container, ItemMenu, Title } from './styles';

const Header = () => {
	const [categories, setCategories] = useState<Category[]>();

	const { isSelected, wordpressId } = useCategory();

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		setCategories(await database.get<Category>('categories').query().fetch());
	};

	return (
		<>
			<AppLogoContainer>
				<Title>Appress</Title>
			</AppLogoContainer>
			<Container>
				<TouchableOpacity onPress={() => clearCategory()} key={0}>
					<ItemMenu isSelected={!isSelected}>Home</ItemMenu>
				</TouchableOpacity>

				{categories?.map((cat, index) => (
					<TouchableOpacity
						onPress={() => setCategory(cat.id, cat.name, cat.wordpressId)}
						key={index + 1}
					>
						<ItemMenu
							isSelected={wordpressId === cat.wordpressId && isSelected}
						>
							{cat.name}
						</ItemMenu>
					</TouchableOpacity>
				))}
			</Container>
		</>
	);
};

export default Header;
