import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import OrderRow from "./OrderRow";

const OrderList = ({ orders }) => {
  if (!Array.isArray(orders)) {
    return null;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="order table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Vorname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Geburtsdatum</TableCell>
            <TableCell>View</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <OrderRow key={order._id} order={order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderList;
