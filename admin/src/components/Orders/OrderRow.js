import { Button, TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/slices/orders-slice";

const OrderRow = ({ order }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleViewClick = () => {
    const id = order._id;

    navigate(`/dashboard/orders/${id}`);
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <TableRow>
        <TableCell>{order.firstName}</TableCell>
        <TableCell>{order.secondName}</TableCell>
        <TableCell>{order.email}</TableCell>
        <TableCell>{order.dateofbirth}</TableCell>
        <TableCell>
          <Button variant="contained" color="info" onClick={handleViewClick}>
            View
          </Button>
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDeleteProduct(order._id)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default OrderRow;
