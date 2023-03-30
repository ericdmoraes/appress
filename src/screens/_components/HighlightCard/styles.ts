import styled from 'styled-components/native';

export const Container = styled.View`
	flex-grow: 1;
	margin-top: 10px;
	margin-bottom: 20px;
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
