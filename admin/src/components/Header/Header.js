import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { toggleSidebar } from "../../store/slices/sidebar-slice";
import { clearUserToken } from "../../store/slices/auth-slice";

const Header = () => {
  const dispatch = useDispatch();

  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleLogout = () => {
    dispatch(clearUserToken());
  };

  return (
    <AppBar
      position="sticky"
      style={{
        height: 60,
        backgroundColor: "#FFFFFF",
        width: sidebarOpen ? `calc(100% - 60px)` : `calc(100% - 220px)`,
        marginLeft: sidebarOpen ? 70 : 220,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          style={{ marginRight: 16 }}
          color="inherit"
          onClick={handleToggleSidebar}
        >
          <MenuIcon style={{ color: "#000" }} />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center" }}>
          App Title
        </Typography>
        <Box display="flex" alignItems="center">
          <Box style={{ marginRight: 16, color: "#000" }}>
            <Typography variant="subtitle1">Hey Bahtyar</Typography>
            <Typography variant="subtitle2">admin</Typography>
          </Box>
          <Avatar
            alt="Baho"
            src="https://example.com/profile-picture.jpg"
            style={{ marginRight: 16, color: "#000" }}
          />
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon style={{ color: "#000" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
