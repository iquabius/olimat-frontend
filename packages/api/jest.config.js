module.exports = {
	displayName: 'API',
	// ts-jest has a helper that can be used for this:
	// https://kulshekhar.github.io/ts-jest/user/config/#paths-mapping
	moduleNameMapper: {
		'\\@olimat/api/(.*)': '<rootDir>/dist/$1',
	},
	setupFiles: ['<rootDir>/jest.setup.ts'],
	transform: {
		'\\.ts$': 'ts-jest',
	},
	testPathIgnorePatterns: ['dist', '/node_modules/', '/__utils'],
};
