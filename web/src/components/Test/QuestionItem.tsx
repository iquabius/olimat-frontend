import { createStyles, Theme, Typography, withStyles, WithStyles } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';

import ChoicesBox from '../Question/ChoicesBox';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'justify',
      padding: theme.spacing.unit * 2,
    },
    questionNumber: {
      fontWeight: 'bold',
    },
    questionImg: {
      display: 'block',
      margin: 'auto',
      marginBottom: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit,
      maxWidth: '100%',
    },
    choices: {
      marginBottom: theme.spacing.unit * 4,
    },
  });

interface Props extends WithStyles<typeof styles> {
  className?: string;
  question: {
    wording: string;
    choices: Array<{ id: string; text: string }>;
    imageFullUrl?: string;
  };
  questionNumber: number;
}

const TestQuestionItem: React.FunctionComponent<Props> = ({
  classes,
  className,
  questionNumber,
  question,
}) => (
  <div className={classNames(classes.root, className)}>
    <Typography gutterBottom paragraph>
      <span className={classes.questionNumber}>{`Questão ${questionNumber}) `}</span>
      {question.wording}
    </Typography>
    {question.imageFullUrl && (
      <img className={classes.questionImg} src={question.imageFullUrl} alt="Imagem da questão" />
    )}
    {question.choices && question.choices.length > 0 && (
      <ChoicesBox choices={question.choices} className={classes.choices} />
    )}
  </div>
);

export default withStyles(styles)(TestQuestionItem);
