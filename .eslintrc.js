export default {
	env: {
		es2021: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'eslint:recommended',
		'plugin:react/recommended',
		'standard-with-typescript',
		'@react-native-community',
		'prettier/prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/no-unused-vars': 'error',
				'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
				'@typescript-eslint/no-shadow': ['error'],
				'no-shadow': 'off',
				'no-undef': 'off',
			},
		},
	],
};
