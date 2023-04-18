import { Button, TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderRow = ({ order }) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    const id = order._id;

    navigate(`/orders/${id}`);
  };

  return (
    <>
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
        <TableCell>
          <Button variant="contained" color="info" onClick={handleViewClick}>
            View
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default OrderRow;
