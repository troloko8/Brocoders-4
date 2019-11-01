import React from 'react';
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tasks from "./TableBody/Tasks";

const arrTableHead = ['№', 'Task', 'Time start', 'Time end', 'Time spend', 'Info', 'Delete']

export const TableTasks = () => {
  const mapTableHeadCell = arrTableHead.map(cell =>
    <TableCell align="left" key={cell}>{cell}</TableCell>
  )

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
