import { Button, TableCell, TableRow } from "@mui/material";

const OrderRow = ({ order }) => {
  return (
    <TableRow>
      <TableCell>{order.firstName}</TableCell>
      <TableCell>{order.secondName}</TableCell>
      <TableCell>{order.email}</TableCell>
      <TableCell>{order.dateofbirth}</TableCell>
      <TableCell>
        <Button variant="contained" color="primary">
          Edit
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;
