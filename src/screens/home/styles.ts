import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${({ theme }) => theme.gray[7]};
`;

export const TitleLabel = styled.Text`
	font-size: 22px;
	font-weight: bold;
	color: #000;
`;

export const Separator = styled.View`
	height: 2px;
	width: 100%;
	background-color: ${({ theme }) => theme.gray[6]};
	margin-top: 5px;
	margin-bottom: 5px;
`;
