import React from 'react';
import { withStyles, styled } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import blue from '@material-ui/core/colors/blue';
import { connect } from 'react-redux';
import { deleteRowTasks } from '../../../../store/tableTasks/actions'
import moment from 'moment';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'

const blue900 = blue[900];
const blue50 = blue[50];

const StyledTableCell = withStyles(theme => ({
  head: {
    color: theme.palette.common.grey,
  },
  body: {
    backgroundColor: blue50,
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const ButtonTable = styled(Button)({
  color: blue900,
  backgroundColor: 'white',
  boxShadow: '0 0  5px -1px grey',
})

function TableTasks(props) {

  localStorage.setItem('tasks', JSON.stringify(props.rows))

  const deleteTask = async (e) => {
    const index = e.target.closest('button').getAttribute('tabindex')

    props.deleteRowTasks(parseInt(index))
  }
  const mapTableTasks = props.rows.map(row => (
    <StyledTableRow key={row.number}>
      <StyledTableCell component="th" scope="row">
        {row.number}
      </StyledTableCell>
      <StyledTableCell align="left">
        {row.nameTask}
      </StyledTableCell>
      <StyledTableCell align="left">
        {moment(row.timeStart).format("HH:mm:ss")}
      </StyledTableCell>
      <StyledTableCell align="left">
        {moment(row.timeEnd).format("HH:mm:ss")}
      </StyledTableCell>
      <StyledTableCell align="left">
        {moment.utc(row.timeSpend).format("HH:mm:ss")}
      </StyledTableCell>
      <StyledTableCell align="left" >
        <Link to={`Brocoders-4/task/${row.number}`} style={{ textDecoration: 'none' }}>
          <ButtonTable
            tabIndex={row.number}
            key={row.number}
          >info</ButtonTable>
        </Link>
      </StyledTableCell>
      <StyledTableCell align="left">
        <ButtonTable tabIndex={row.number} key={row.number} onClick={deleteTask}>
          Delete
          </ButtonTable>
      </StyledTableCell>
    </StyledTableRow>
  ))

  return (
    <Table  >
      <TableHead>
        <TableRow>
          <StyledTableCell >№</StyledTableCell>
          <StyledTableCell align="left">Task</StyledTableCell>
          <StyledTableCell align="left">Time start</StyledTableCell>
          <StyledTableCell align="left">Time end</StyledTableCell>
          <StyledTableCell align="left">Time spend</StyledTableCell>
          <StyledTableCell align="left">Info</StyledTableCell>
          <StyledTableCell align="left">Delete</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {mapTableTasks}
      </TableBody>
    </Table>
  );
}

const mapStateToProps = (state) => {
  return {
    rows: state.tableTasks
  }
}

const mapDispatchToProps = {
  deleteRowTasks,
}

TableTasks.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number,
    nameTask: PropTypes.string,
    timeStart: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    timeEnd: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    timeSpend: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }))
}


export default connect(mapStateToProps, mapDispatchToProps)(TableTasks)