import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    flex: '1 0 100%',
    maxWidth: '100%',
  },
  hero: {
    minHeight: 128,
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  breadcrumbs: theme.mixins.gutters({
    paddingTop: 70,
    margin: '0 auto',
    maxWidth: '100%',
  }),
  [theme.breakpoints.up(900 + theme.spacing.unit * 6)]: {
    breadcrumbs: {
      maxWidth: 900,
    },
  },
});

const BreadcrumbBox = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.hero}>
      <div className={classes.breadcrumbs}>
        <Typography variant="subtitle1" color="inherit" noWrap>
          Admin > Questões > Detalhes
        </Typography>
      </div>
    </div>
  </div>
);

BreadcrumbBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BreadcrumbBox);