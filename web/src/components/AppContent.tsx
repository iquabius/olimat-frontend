import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import BreadcrumbBox from './Question/BreadcrumbBox';

const styles = theme => ({
  wrapper: {
    width: '100%',
  },
  root: theme.mixins.gutters({
    paddingTop: 64 + theme.spacing.unit * 2,
    position: 'relative',
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto',
    marginBottom: theme.spacing.unit * 8,
  }),
  [theme.breakpoints.up(900 + theme.spacing.unit * 6)]: {
    root: {
      maxWidth: 900,
    },
  },
});

function AppContent(props) {
  const { className, classes, children } = props;

  return (
    <div className={classes.wrapper}>
      {/* <BreadcrumbBox /> */}
      <div className={classNames(classes.root, className)}>{children}</div>
    </div>
  );
}

AppContent.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(AppContent);