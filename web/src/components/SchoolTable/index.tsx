import {
  createStyles,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
  Theme,
  WithStyles,
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import gql from 'graphql-tag';
import React from 'react';
import { compose, graphql } from 'react-apollo';

import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import SchoolAddDialog from './SchoolAddDialog';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 6,
    },
    table: {
      minWidth: 800,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
  });

export interface City {
  name: string;
}

interface School {
  id: string;
  name: string;
  city: City;
  phone: string;
}
interface Props extends WithStyles<typeof styles> {
  data: {
    schools: School[];
  };
}

type SchoolTableOrder = 'asc' | 'desc';

interface State {
  addDialogOpen: boolean;
  order: SchoolTableOrder;
  orderBy: 'name' | 'city' | 'fone';
  selected: string[];
  schools: School[];
  page: number;
  rowsPerPage: number;
}

class SchoolTable extends React.Component<Props, State> {
  constructor(props, context) {
    super(props, context);

    this.state = {
      addDialogOpen: false,
      order: 'asc',
      orderBy: 'name',
      selected: [],
      schools: [],
      page: 0,
      rowsPerPage: 10,
    };
  }

  handleOpenAddSchool = () => {
    this.setState({ addDialogOpen: true });
  };

  handleCloseAddSchool = () => {
    this.setState({ addDialogOpen: false });
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order: SchoolTableOrder = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const schools =
      order === 'desc'
        ? this.state.schools.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.schools.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ schools, order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({ selected: this.state.schools.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { order, orderBy, selected, rowsPerPage, page } = this.state;
    const schools = this.props.data.schools
      .slice()
      .sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1));
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, schools.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar
          onOpenAddSchool={this.handleOpenAddSchool}
          numSelected={selected.length}
        />
        <SchoolAddDialog open={this.state.addDialogOpen} onClose={this.handleCloseAddSchool} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={schools.length}
            />
            <TableBody>
              {schools.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(school => {
                const isSelected = this.isSelected(school.id);
                return (
                  <TableRow
                    hover
                    onClick={event => this.handleClick(event, school.id)}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={school.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isSelected} />
                    </TableCell>
                    <TableCell padding="none">{school.name}</TableCell>
                    <TableCell>{school.city.name}</TableCell>
                    <TableCell>{school.phone}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={6}
                  count={schools.length}
                  labelRowsPerPage="Linhas por página:"
                  rowsPerPage={rowsPerPage}
                  page={page}
                  backIconButtonProps={{
                    'aria-label': 'Página Anterior',
                  }}
                  nextIconButtonProps={{
                    'aria-label': 'Próxima Página',
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

export const allSchoolsQuery = gql`
  query allSchoolsQuery {
    schools {
      id
      name
      city {
        name
      }
      phone
    }
  }
`;

export default compose(
  graphql(allSchoolsQuery),
  withStyles(styles),
)(SchoolTable);
