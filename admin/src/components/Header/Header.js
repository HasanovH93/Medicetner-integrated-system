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
  const userData = useSelector((state) => state.auth.userData);
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
          sx={{ marginRight: 2 }}
          color="inherit"
          onClick={handleToggleSidebar}
        >
          <MenuIcon sx={{ color: "#000" }} />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            color: "#000",
            "@media (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          Praxis Kerim
        </Typography>
        <Box display="flex" alignItems="center">
          <Box sx={{ marginRight: 2, color: "#000" }}>
            <Typography variant="subtitle1">
              Hey, {userData.username}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                "@media (max-width: 600px)": {
                  display: "none",
                },
              }}
            >
              admin
            </Typography>
          </Box>
          <Avatar
            alt="User"
            src={userData.imageUrl}
            sx={{ marginRight: 2, color: "#000" }}
          />
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon sx={{ color: "#000" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
