import React, { useEffect, useState } from 'react';
import { withStyles, styled } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import { connect } from 'react-redux';

const blue900 = blue[900];
const blue50 = blue[50];

const ButtonTable = styled(Button)({
  color: blue900,
  backgroundColor: 'white',
  boxShadow: '0 0  5px -1px grey',
})

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

function createData(number, nameTask, timeStart, timeEnd, timeSpend, info, buttonDelete) {
  return { number, nameTask, timeStart, timeEnd, timeSpend, info, buttonDelete };
}

export const rows = [
  createData(1, 'some name', 'some time to start', 'some time to end', 'some time to spend', <ButtonTable>info</ButtonTable>, <ButtonTable>delete</ButtonTable>),
];

function TableTasks(props) {


  // useEffect(() => {
  //   console.log(props)
  //   rows.push({
  //     nameTask: props.name,
  //     number: rows.length + 1,
  //     timeEnd: props.timeToStop,
  //     timeSpend: props.timeToSpend,
  //     timeStart: props.timeToStart,
  //     info: <Button>info</Button>,
  //     buttonDelete: <Button>Delete</Button>
  //   })
  // }, [props.timeToSpend])

  return (
    <Table  >
      <TableHead>
        <TableRow>
          <StyledTableCell>№</StyledTableCell>
          <StyledTableCell align="left">Task</StyledTableCell>
          <StyledTableCell align="left">Time start</StyledTableCell>
          <StyledTableCell align="left">Time end</StyledTableCell>
          <StyledTableCell align="left">Time spend</StyledTableCell>
          <StyledTableCell align="left">Info</StyledTableCell>
          <StyledTableCell align="left">Delete</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <StyledTableRow key={row.number}>
            <StyledTableCell component="th" scope="row">
              {row.number}
            </StyledTableCell>
            <StyledTableCell align="left">{row.nameTask}</StyledTableCell>
            <StyledTableCell align="left">{row.timeStart}</StyledTableCell>
            <StyledTableCell align="left">{row.timeEnd}</StyledTableCell>
            <StyledTableCell align="left">{row.timeSpend}</StyledTableCell>
            <StyledTableCell align="left">{row.info}</StyledTableCell>
            <StyledTableCell align="left">{row.buttonDelete}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.stopwatch.name,
    timeToStart: state.stopwatch.timeToStart,
    timeToStop: state.stopwatch.timeToStop,
    timeToSpend: state.stopwatch.timeToSpend,
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TableTasks)