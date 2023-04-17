import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/slices/sidebar-slice";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdAdd,
  MdPeople,
  MdProductionQuantityLimits,
} from "react-icons/md";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const isCollapsed = useSelector((state) => state.sidebar.sidebarOpen);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const imageUrl = "/assets/logo.png";

  return (
    <div
      className={`${styles.sidebar}${
        isCollapsed ? ` ${styles.collapsed}` : ""
      }`}
    >
      {/* <div className={styles.dashboardLogo}>
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img alt="" src={process.env.PUBLIC_URL + imageUrl} />
        </Link>
      </div> */}
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarListItem}>
          <Link to="/dashboard" className={styles.sidebarLink}>
            <MdDashboard className={styles.sidebarIcon} />
            <span className={styles.sidebarText}>Dashboard</span>
          </Link>
        </li>
        <li className={styles.sidebarListItem}>
          <Link to="/dashboard/all-products" className={styles.sidebarLink}>
            <MdProductionQuantityLimits className={styles.sidebarIcon} />
            <span className={styles.sidebarText}>Products</span>
          </Link>
        </li>
        <li className={styles.sidebarListItem}>
          <Link to="/dashboard/add-product" className={styles.sidebarLink}>
            <MdAdd className={styles.sidebarIcon} />
            <span className={styles.sidebarText}>Add Product</span>
          </Link>
        </li>
        <li className={styles.sidebarListItem}>
          <Link to="/admin-panel/users" className={styles.sidebarLink}>
            <MdPeople className={styles.sidebarIcon} />
            <span className={styles.sidebarText}>Users</span>
          </Link>
        </li>
      </ul>
      <button className={styles.toggleSidebar} onClick={handleToggleSidebar}>
        <i className={`fa fa-chevron-left ${styles.toggleSidebarIcon}`}></i>
      </button>
    </div>
  );
};

export default Sidebar;
