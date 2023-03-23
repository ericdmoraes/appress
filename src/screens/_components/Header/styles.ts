import styled from 'styled-components/native';

export const Container = styled.View`
	flex-direction: row;
	width: 100%;
	height: 60px;
	justify-content: space-around;
	align-items: center;
	padding: 10px;
	background-color: white;
	border-bottom-color: silver;
	border-bottom-width: 0.5px;
`;

interface IItemMenu {
	isSelected: boolean;
}

export const ItemMenu = styled.Text<IItemMenu>`
	color: ${({ isSelected, theme: { gray } }) =>
		isSelected ? gray[1] : gray[4]};
	font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'thin')};
`;

export const AppLogoContainer = styled.View`
	width: 100%;
	height: 30px;
	justify-content: center;
	align-items: center;
	background-color: white;
`;

export const Title = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: black;
`;
