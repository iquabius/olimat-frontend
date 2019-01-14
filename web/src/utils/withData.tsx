import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import Head from 'next/head';
import initApollo from './initApollo';
import { parseCookies } from './helpers';

// Gets the display name of a JSX component for dev tools
const getDisplayName = ({ displayName, name }) => displayName || name || 'Unknown';

export default App => {
  return class WithData extends React.Component {
    static displayName = `WithData(${getDisplayName(App)})`;

    static propTypes = {
      apolloState: PropTypes.object.isRequired,
    };

    static async getInitialProps(ctx) {
      const {
        Component,
        router,
        ctx: { req, res },
      } = ctx;

      // One-time-use apollo client for initial props and rendering (on server)
      const apollo = initApollo({}, { getToken: () => parseCookies(req).token });
      ctx.ctx.apolloClient = apollo;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      // When redirecting, the response is finished. No point in continuing to render.
      if (res && res.finished) {
        return {};
      }

      // Run all GraphQL queries in the component tree and extract the resulting data
      if (!process.browser) {
        try {
          // Run all GraphQL queries
          const app = (
            <ApolloProvider client={apollo}>
              <App {...appProps} Component={Component} router={router} apolloClient={apollo} />
            </ApolloProvider>
          );
          await getDataFromTree(app);
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo's store
      const apolloState = apollo.cache.extract();

      return {
        apolloState,
        ...appProps,
      };
    }

    constructor(props) {
      super(props);
      // Note: Apollo should never be used on the server side beyond the initial
      // render within `getInitialProps()` above (since the entire prop tree
      // will be initialized there), meaning the below will only ever be
      // executed on the client.
      this.apolloClient = initApollo(props.apolloState, {
        getToken: () => parseCookies().token,
      });
    }

    render() {
      return (
        <ApolloProvider client={this.apolloClient}>
          <App {...this.props} />
        </ApolloProvider>
      );
    }
  };
};