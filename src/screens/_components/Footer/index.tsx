//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Footer = () => {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>
				AppRess
			</Text>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		height: 400,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F3F3F3',
	},
});

//make this component available to the app
export default Footer;
