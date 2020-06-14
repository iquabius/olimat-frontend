// Este arquivo só é usado no servidor, pra testes.
// Podemos importar dependências de desenvolvimento.
// Talvez não funcione num ambiente de Integração Contínua (CI).
import { InMemoryCache, ApolloClient } from '@apollo/client';
import { SchemaLink } from '@apollo/link-schema';
import faker from 'faker/locale/pt_BR';
import {
	addMockFunctionsToSchema,
	makeExecutableSchema,
	MockList,
} from 'graphql-tools';
import PropTypes from 'prop-types';
import React from 'react';
import { ApolloProvider } from '@apollo/react-components';
import { typeDefs } from '@olimat/api';

import mergeResolvers from './mergeResolvers';

// Make a GraphQL schema with no resolvers
// https://www.apollographql.com/docs/apollo-server/v2/api/graphql-tools.html#makeExecutableSchema
export const schema = makeExecutableSchema({
	resolverValidationOptions: { requireResolversForResolveType: false },
	typeDefs,
});

const globalMocks = {
	// Makes all ID types random ids instead of a hello world string
	ID: () => faker.random.uuid(),
	// Uses 'faker' to generate more meaninful data
	Exam: () => ({
		title: () => faker.lorem.sentence(),
		questions: () => new MockList(10),
	}),
	Question: () => ({
		wording: () => faker.lorem.sentences(),
		imageFullUrl: () => faker.image.technics(300, 300),
		secondaryWording: () => faker.lorem.sentences(),
	}),
	QuestionChoice: () => ({
		text: () => faker.hacker.phrase(),
	}),
};

// globalMocks uses fake data generated by faker.js
// It is merged with customResolvers, which can be used to customize the data
// returned by specific fields.
const FakeDataProvider = props => {
	const { children, customResolvers = {} } = props;
	const mocks = mergeResolvers(globalMocks, customResolvers);
	addMockFunctionsToSchema({ schema, mocks });

	// Check out <MockedProvider/> and <MockLink/> from react-apollo to see how
	// to implement error and loading links.
	const client = new ApolloClient({
		link: new SchemaLink({ schema }),
		cache: new InMemoryCache(),
	});

	return (
		// Wait until we remove @apollo/react-hoc and @apollo/react-components
		// @ts-ignore
		<ApolloProvider client={client}>{children}</ApolloProvider>
	);
};

FakeDataProvider.propTypes = {
	/**
	 * Used to render any component that uses a <Query/> or <Mutation/>
	 * from '@apollo/react-components'.
	 * The component is wrapped by <ApolloProvider/>, with a mocked ApolloClient.
	 */
	children: PropTypes.node.isRequired,
	/**
	 * An object with resolvers to be merged with the fake data resolvers.
	 * It can be used to override fake data of specific fields:
	 * customResolvers = {
	 *   Question: () => ({
	 *     wording: 'Maria comprou três maças...',
	 *     secondaryWording: null,
	 *     imageFullUrl: 'http://host.test/image.jpg',
	 *     choices: [{ text: '5 maças' }, { text: '3 maças' }],
	 *   }),
	 * }
	 */
	customResolvers: PropTypes.object,
};

export default FakeDataProvider;
