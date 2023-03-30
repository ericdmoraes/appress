import styled from 'styled-components/native';

export const ItemContainer = styled.TouchableOpacity`
	width: 100%;
	margin-bottom: 30px;
	padding-horizontal: 10px;
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
