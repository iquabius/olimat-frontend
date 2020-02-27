import { Button, createStyles, Theme, withStyles } from '@material-ui/core';
import Router from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'react-apollo';
import { withState } from 'recompose';

import CancelDialog from '../CancelDialog';

const styles = (theme: Theme) =>
  createStyles({
    actionBox: {
      display: 'flex',
      flex: '0 0 auto',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      marginTop: theme.spacing(),
    },
    saveButton: {
      width: '33%',
    },
    cancelButton: {
      width: '25%',
      marginRight: theme.spacing(),
    },
    [theme.breakpoints.down('xs')]: {
      saveButton: {
        width: '100%',
      },
      cancelButton: {
        marginRight: 0,
        marginTop: theme.spacing(),
        width: '100%',
        order: 1,
      },
    },
  });

const createCancelEditingHandler = (formikProps, showWarning) => () => {
  if (formikProps.dirty) {
    showWarning(true);
    return;
  }
  Router.push(`/admin/questao?id=${formikProps.values.id}`);
};

const QuestionFormActionBox = ({
  classes,
  formikProps,
  setWarningDialogOpen,
  warningDialogOpen,
}) => (
  <div className={classes.actionBox}>
    <Button
      disabled={formikProps.isSubmitting}
      onClick={createCancelEditingHandler(formikProps, setWarningDialogOpen)}
      className={classes.cancelButton}
      size="large"
      variant="outlined"
      data-testid="cancel-button"
    >
      Cancelar
    </Button>
    <CancelDialog
      onCancel={() => setWarningDialogOpen(false)}
      onContinue={() => {
        Router.push(`/admin/questao?id=${formikProps.values.id}`);
      }}
      open={warningDialogOpen}
    />
    <Button
      disabled={formikProps.isSubmitting}
      type="submit"
      className={classes.saveButton}
      color="secondary"
      size="large"
      variant="contained"
      data-testid="save-button"
    >
      Salvar
    </Button>
  </div>
);

QuestionFormActionBox.propTypes = {
  classes: PropTypes.object.isRequired,
  formikProps: PropTypes.object.isRequired,
  setWarningDialogOpen: PropTypes.func.isRequired,
  warningDialogOpen: PropTypes.bool.isRequired,
};

export default compose(
  withState('warningDialogOpen', 'setWarningDialogOpen', false),
  withStyles(styles),
)(QuestionFormActionBox);
