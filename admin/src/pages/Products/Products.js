import styles from "./Products.module.scss";
import { useSelector } from "react-redux";
import OrderList from "../../components/Orders/OrderList";
import { useParams } from "react-router-dom";
const ProductPage = () => {
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  const { orders } = useSelector((state) => state.order);
  const { id } = useParams();
  console.log(id);

  return (
    <div
      className={`${styles.container} ${sidebarOpen ? "" : styles.sidebarOpen}`}
    >
      <OrderList orders={orders} />
    </div>
  );
};

export default ProductPage;
