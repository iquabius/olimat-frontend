import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { questionsConnectionQuery } from './ListConnector';

export const newQuestionMutation = gql`
  mutation newQuestionMutation($input: QuestionCreateInput!) {
    createQuestion(input: $input) {
      question {
        id
        type
        wording
        imageUrl
        choices {
          id
          text
        }
      }
    }
  }
`;

// Atualiza o cache do Apollo com a nova questão
const updateApolloStore = (proxy, { data: { createQuestion } }) => {
  try {
    const data = proxy.readQuery({ query: questionsConnectionQuery });
    const questionEdge = {
      cursor: createQuestion.question.id,
      node: createQuestion.question,
    };
    data.questionsConnection.unshift(questionEdge);

    proxy.writeQuery({ query: questionsConnectionQuery, data });
  } catch (error) {
    // Do nothing. Questions were not fetched yet.
  }
};

const CreateConnector = ({ children }) => (
  <Mutation mutation={newQuestionMutation} update={updateApolloStore}>
    {createQuestion => children({ createQuestion })}
  </Mutation>
);

CreateConnector.propTypes = {
  children: PropTypes.func.isRequired,
};

export default CreateConnector;
