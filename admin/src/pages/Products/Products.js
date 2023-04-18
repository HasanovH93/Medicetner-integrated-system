import styles from "./Products.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import OrderList from "../../components/Orders/OrderList";
import { fetchOrders } from "../../store/slices/orders-slice";
const ProductPage = () => {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  const { orders } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  return (
    <div
      className={`${styles.container} ${sidebarOpen ? "" : styles.sidebarOpen}`}
    >
      <OrderList orders={orders} />
    </div>
  );
};

export default ProductPage;
