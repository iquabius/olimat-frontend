import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Link from './Link';

/**
 * This callback function is used to create the styles
 * @param {Theme} theme Material-UI theme
 */
const styles = ({ palette, typography }) => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    letterSpacing: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
  },
  buttonLeaf: {
    letterSpacing: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    fontWeight: typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: typography.fontWeightMedium,
    },
  },
  active: {
    color: palette.type === 'light' ? palette.primary.main : palette.primary.light,
    fontWeight: typography.fontWeightMedium,
  },
});

class AppDrawerNavItem extends React.Component {
  state = {
    open: this.props.openImmediately,
  };

  componentDidMount() {
    // So we only run this logic once.
    if (!this.props.openImmediately) {
      return;
    }

    // Center the selected item in the list container.
    const activeElement = document.querySelector(`.${this.props.classes.active}`);
    if (activeElement && activeElement.scrollIntoView) {
      activeElement.scrollIntoView({});
    }
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const {
      children,
      classes,
      depth,
      href,
      onClick,
      openImmediately,
      title,
      ...other
    } = this.props;

    const style = {
      paddingLeft: 8 * (3 + 2 * depth),
    };

    if (href) {
      return (
        <ListItem className={classes.itemLeaf} disableGutters {...other}>
          <Button
            component={props => (
              <Link variant="button" activeClassName={classes.active} href={href} {...props} />
            )}
            className={classNames(classes.buttonLeaf, `depth-${depth}`)}
            disableRipple
            onClick={onClick}
            style={style}
          >
            {title}
          </Button>
        </ListItem>
      );
    }

    return (
      <ListItem className={classes.item} disableGutters {...other}>
        <Button
          classes={{
            root: classes.button,
            label: openImmediately ? 'algolia-lvl0' : '',
          }}
          onClick={this.handleClick}
          style={style}
        >
          {title}
        </Button>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </ListItem>
    );
  }
}

AppDrawerNavItem.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  openImmediately: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

AppDrawerNavItem.defaultProps = {
  openImmediately: false,
};

export default withStyles(styles)(AppDrawerNavItem);