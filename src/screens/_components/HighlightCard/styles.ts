import styled from 'styled-components/native';

export const Container = styled.View`
	flex-grow: 1;
	margin-top: 10px;
	margin-bottom: 20px;
`;

export const CategoryContainer = styled.View`
	padding: 8px 10px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.product.secondary};
	align-self: flex-start;
	border-radius: 2px;
	margin-bottom: 5px;
`;

export const CategoryLabel = styled.Text`
	color: ${({ theme }) => theme.product.secondary};
	font-weight: bold;
	align-self: flex-start;
	letter-spacing: 1.5px;
`;

export const TitleLabel = styled.Text`
	font-size: 30px;
	color: black;
	align-self: flex-start;
`;

export const TitleContainer = styled.View`
	justify-content: center;
	margin-bottom: 5px;
	height: 90px;
`;

export const PicContainer = styled.Image`
	width: 100%;
	height: 200px;
	margin-bottom: 10px;
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
