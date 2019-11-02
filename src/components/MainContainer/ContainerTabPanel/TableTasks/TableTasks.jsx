import React from 'react';
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tasks from "./TableBody/Tasks";
import Hidden from '@material-ui/core/Hidden';

// const arrTableHead = ['№', 'Task', 'Time start', 'Time end', 'Time spend', 'Info', 'Delete']
const arrTableHead = [
  { name: '№', hidden: true },
  { name: 'Task', hidden: false },
  { name: 'Time start', hidden: true },
  { name: 'Time end', hidden: true },
  { name: 'Time spend', hidden: true },
  { name: 'Info', hidden: false },
  { name: 'Delete', hidden: false },
]

export const TableTasks = () => {
  const mapTableHeadCell = arrTableHead.map(cell => {
    if (cell.hidden) {
      return (
        <Hidden smDown key={cell.name}>
          <TableCell align="left" key={cell.name}>{cell.name}</TableCell>
        </Hidden>
      )
    } else {
      return <TableCell align="left" key={cell.name}>{cell.name}</TableCell>
    }
  })

  return (
    <Table  >
      <TableHead>
        <TableRow>
          {mapTableHeadCell}
        </TableRow>
      </TableHead>
      <Tasks />
    </Table>
  );
}
