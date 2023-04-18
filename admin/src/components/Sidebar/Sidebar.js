import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/slices/sidebar-slice";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const isCollapsed = useSelector((state) => state.sidebar.sidebarOpen);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  const imageUrl = "/assets/logo1.png";
  const boxWidth = isCollapsed ? 30 : 65;
  return (
    <div
      className={`${styles.sidebar}${
        isCollapsed ? ` ${styles.collapsed}` : ""
      }`}
      style={{
        borderRight: `1px solid ${theme.palette.grey[300]}`,
      }}
    >
      <Box
        display={"flex"}
        component="a"
        href="/"
        title="Praxis-Kerim"
        width={{ xs: 20, md: boxWidth }}
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
            <DashboardIcon className={styles.sidebarIcon} />
            <span className={styles.sidebarText}>Dashboard</span>
          </Link>
        </li>
        <li className={styles.sidebarListItem}>
          <Link to="/dashboard/all-products" className={styles.sidebarLink}>
            <Inventory2Icon className={styles.sidebarIcon} />
            <span className={styles.sidebarText}>Bestellungen</span>
          </Link>
        </li>
        <li className={styles.sidebarListItem}>
          <Link to="/admin-panel/users" className={styles.sidebarLink}>
            <PeopleIcon className={styles.sidebarIcon} />
            <span className={styles.sidebarText}>Users</span>
          </Link>
        </li>
        <li className={styles.sidebarListItem}>
          <Link to="/dashboard/add-product" className={styles.sidebarLink}>
            <AddCircleOutlineIcon className={styles.sidebarIcon} />
            <span className={styles.sidebarText}>Add User</span>
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
