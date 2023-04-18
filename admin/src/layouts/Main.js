import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";

import Container from "../components/Container";

import TopBar from "../components/TopBar/TopBar";

const Main = ({ children }) => {
  const theme = useTheme();

  return (
    <Box>
      <AppBar
        position={"static"}
        sx={{
          top: 0,
          backgroundColor: theme.palette.background.paper,
        }}
        elevation={0}
      >
        <Container paddingY={1}>
          <TopBar />
        </Container>
      </AppBar>
      <main>
        {children}
        <Divider />
      </main>
    </Box>
  );
};

export default Main;
