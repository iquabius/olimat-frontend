import React from 'react';
import AppFrame from '../../components/AppFrame';
import AppContent from '../../components/AppContent';
import QuestionUpdateForm from '../../components/Question/UpdateForm';

const PageQuestionUpdate: React.FunctionComponent = () => (
  <AppFrame>
    <AppContent>
      <QuestionUpdateForm />
    </AppContent>
  </AppFrame>
);

export default PageQuestionUpdate;