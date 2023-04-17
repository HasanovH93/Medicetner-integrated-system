import { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import { useSelector } from "react-redux";
import { fetchAllOrders } from "../../api";
import OrderList from "../../components/Orders/OrderList";

const ProductPage = () => {
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllOrders();
      setOrders(data);
    };

    fetchData();
  }, []);

  return (
    <div
      className={`${styles.container} ${sidebarOpen ? "" : styles.sidebarOpen}`}
    >
      <OrderList orders={orders} />
    </div>
  );
};

export default ProductPage;
