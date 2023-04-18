import { useParams } from "react-router-dom";

import OrderCard from "./OrderCard";
import { useSelector } from "react-redux";

const OrderCardPage = () => {
  const { id } = useParams();
  const { orders } = useSelector((state) => state.order);

  const filteredOrder = orders.filter(
    (order) => order.id === "643d2fe1f3e39626bf4b604c"
  );
  console.log(filteredOrder);

  return (
    <div>
      {filteredOrder ? (
        <OrderCard order={filteredOrder} />
      ) : (
        <p>Loading order data...</p>
      )}
    </div>
  );
};

export default OrderCardPage;
