import { Table } from "react-bootstrap";
import OrderRow from "./OrderRow";

const OrderList = ({ orders }) => {
  if (!Array.isArray(orders)) {
    return null;
  }
  console.log(orders)
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Vorname</th>
          <th>Email</th>
          <th>Geburtsdatum</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {orders?.map((order) => (
          <OrderRow key={order._id} order={order} />
        ))}
      </tbody>
    </Table>
  );
};

export default OrderList;
