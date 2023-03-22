import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${({ theme }) => theme.gray[7]};
`;

export const SectionContainer = styled.View`
	padding: 15px;
`;

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

export const Separator = styled.View`
	height: 2px;
	width: 100%;
	background-color: ${({ theme }) => theme.gray[6]};
	margin-top: 5px;
	margin-bottom: 5px;
`;

export const ItemName = styled.Text`
	font-size: 20px;
	max-height: 50%;
	font-weight: 300;
	color: #fff;
`;
