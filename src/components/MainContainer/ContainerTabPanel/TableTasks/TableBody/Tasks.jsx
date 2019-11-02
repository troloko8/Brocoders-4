import React from 'react';
import { styled } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import blue from '@material-ui/core/colors/blue';
import { connect } from 'react-redux';
import { deleteRowTask } from "../../../../../store/tableTasks/actions"
import moment from 'moment';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'
import Hidden from '@material-ui/core/Hidden';

const blue900 = blue[900];
const blue50 = blue[50];

const StyledTableCell = styled(TableCell)({
  backgroundColor: blue50,
  fontSize: '14px',
  fontWeight: '500'
})

const StyledButton = styled(Button)({
  color: blue900,
  backgroundColor: 'white',
  boxShadow: '0 0  5px -1px grey',
})

const StyledLink = styled(Link)({
  textDecoration: 'none'
})

function Tasks(props) {
  localStorage.setItem('tasks', JSON.stringify(props.rows))

  const deleteTask = (e) => {
    const index = e.target.closest('button').getAttribute('tabindex')
    props.deleteRowTask(parseInt(index))
  }
  const mapTableTasks = props.rows.map(row => (
    <TableRow key={row.number}>
      <Hidden smDown>
        <StyledTableCell component="th" scope="row">
          {row.number}
        </StyledTableCell>
      </Hidden>
      <StyledTableCell align="left">
        {row.nameTask}
      </StyledTableCell>
      <Hidden smDown>
        <StyledTableCell align="left">
          {moment(row.timeStart).format("HH:mm:ss")}
        </StyledTableCell>
      </Hidden>
      <Hidden smDown>
        <StyledTableCell align="left">
          {moment(row.timeEnd).format("HH:mm:ss")}
        </StyledTableCell>
      </Hidden>
      <Hidden smDown>
        <StyledTableCell align="left">
          {moment.utc(row.timeSpend).format("HH:mm:ss")}
        </StyledTableCell>
      </Hidden>
      <StyledTableCell align="left" >
        <StyledLink to={`/task/${row.number}`}>
          <StyledButton
            tabIndex={row.number}
            key={row.number}
          >info
          </StyledButton>
        </StyledLink>
      </StyledTableCell>
      <StyledTableCell align="left">
        <StyledButton tabIndex={row.number} key={row.number} onClick={deleteTask}>
          Delete
          </StyledButton>
      </StyledTableCell>
    </TableRow>
  ))

  return (
    <TableBody>
      {mapTableTasks}
    </TableBody>
  );
}

const mapStateToProps = (state) => {
  return {
    rows: state.tableTasks
  }
}

const mapDispatchToProps = {
  deleteRowTask
}

Tasks.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number,
    nameTask: PropTypes.string,
    timeStart: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
    timeEnd: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
    timeSpend: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  })),
  deleteRowTask: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)