import styled from 'styled-components/native';

export const Container = styled.View`
	padding: 5px 20px;
`;

export const PicContainer = styled.View`
	width: 100%;
	margin-top: 10px;
`;

export const TitleLabel = styled.Text`
	font-size: 30px;
	color: black;
	margin-vertical: 10px;
`;

export const KeepReading = styled.Text`
	color: black;
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 15px;
	text-align: center;
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

export const Separator = styled.View`
	height: 1px;
	width: 100%;
	background-color: ${({ theme }) => theme.gray[5]};
`;
