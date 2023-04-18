import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/slices/sidebar-slice";
import { Box } from "@mui/material";
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
  const imageUrl = "/assets/logo1.jpg";

  return (
    <div
      className={`${styles.sidebar}${
        isCollapsed ? ` ${styles.collapsed}` : ""
      }`}
    >
      <Box
        display={"flex"}
        component="a"
        href="/"
        title="Praxis-Kerim"
        width={{ xs: 20, md: 45 }}
        sx={{
          mt: 1,
          ml: 1,
        }}
      >
        <Box
          component={"img"}
          src={process.env.PUBLIC_URL + imageUrl}
          height={1}
          width={1}
        />
      </Box>
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
