import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Fab } from '@material-ui/core';

const styles = theme => ({
  FAButton: {
    position: 'fixed',
    top: 'auto',
    left: 'auto',
    bottom: 23,
    right: 23,
    // Para o botão ficar por cima das imagens do Card
    zIndex: theme.zIndex.mobileStepper,
  },
});

const FAButton = ({ children, classes, onClick, ...rest }) => (
  <Fab onClick={onClick} color="secondary" className={classes.FAButton} {...rest}>
    {children}
  </Fab>
);

FAButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(FAButton);