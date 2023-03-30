import styled from 'styled-components/native';

export const CategoryContainer = styled.View`
	padding: 8px 10px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.product.secondary};
	align-self: flex-start;
	border-radius: 2px;
	margin-bottom: 5px;
	margin-top: 8px;
`;

export const CategoryLabel = styled.Text`
	color: ${({ theme }) => theme.product.secondary};
	font-weight: bold;
	align-self: flex-start;
	letter-spacing: 1.5px;
`;
