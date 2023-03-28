import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.white};
`;

export const TitleLabel = styled.Text`
	font-size: 22px;
	font-weight: bold;
	color: #000;
`;
