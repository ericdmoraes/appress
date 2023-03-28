import styled from 'styled-components/native';

export const ItemContainer = styled.TouchableOpacity`
	width: 100%;
	margin-bottom: 30px;
`;

export const PicContainer = styled.Image`
	width: 100%;
	height: 200px;
`;

export const LabelContainer = styled.View`
	background-color: #0f0e0ebb;
	justify-content: flex-end;
	width: 100%;
	height: 35%;
	padding: 5px;
`;

export const FadedLabel = styled.Text`
	font-size: 15px;
	color: ${({ theme }) => theme.gray[4]};
	margin-bottom: 5px;
`;

export const AuthorLabel = styled.Text`
	font-size: 15px;
	color: black;
`;

export const TitleContainer = styled.View`
	justify-content: center;
	max-height: 60px;
	margin-vertical: 5px;
`;

export const TitleLabel = styled.Text`
	font-size: 20px;
	color: black;
	align-self: flex-start;
`;

export const CategoryContainer = styled.View`
	padding: 8px 10px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.product.secondary};
	align-self: flex-start;
	border-radius: 2px;
	margin-bottom: 5px;
	margin-top: 18px;
`;

export const CategoryLabel = styled.Text`
	color: ${({ theme }) => theme.product.secondary};
	font-weight: bold;
	align-self: flex-start;
	letter-spacing: 1.5px;
`;
