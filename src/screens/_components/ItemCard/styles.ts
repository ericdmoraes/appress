import styled from 'styled-components/native';

export const ItemContainer = styled.TouchableOpacity`
	height: 200px;
	margin: 10px;
`;

export const PicContainer = styled.ImageBackground.attrs({
	imageStyle: {
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
})`
	height: 100%;
	min-width: 300px;
	justify-content: flex-end;
`;

export const LabelContainer = styled.View`
	background-color: #0f0e0ebb;
	justify-content: flex-end;
	width: 100%;
	height: 35%;
	padding: 5px;
`;

export const TitleLabel = styled.Text`
	font-size: 22px;
	font-weight: bold;
	color: #000;
`;

export const ItemName = styled.Text`
	font-size: 18px;
	font-weight: thin;
	color: #fff;
`;
