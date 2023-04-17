import { Button } from "react-bootstrap";

const OrderRow = ({ order }) => {
  return (
    <tr>
      <td>
        <td>{order.firstName}</td>
      </td>
      <td>{order.secondName}</td>
      <td>{order.email}</td>
      <td>{order.dateofbirth}</td>
      <td>
        <Button variant="primary">Edit</Button>
      </td>
      <td>
        <Button variant="danger">Delete</Button>
      </td>
    </tr>
  );
};

export default OrderRow;
