import OrderCard from "../../components/OrderCard/SingleOrder";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./OrderPage.module.scss";

const OrderCardPage = () => {
  const { orders } = useSelector((state) => state.order);
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  const { id } = useParams();

  const filteredOrder = orders.find((order) => order._id === id);
  console.log(filteredOrder);
  return (
    <div
      className={`${styles.container} ${sidebarOpen ? "" : styles.sidebarOpen}`}
    >
      <OrderCard order={filteredOrder} />
    </div>
  );
};

export default OrderCardPage;
