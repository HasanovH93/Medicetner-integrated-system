import React from "react";
import { Box } from "@mui/material";

const Topbar = () => {
  const imageUrl = "/assets/logo1.png";
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
    >
      <Box
        display={"flex"}
        component="a"
        href="/"
        title="Praxis-Kerim"
        width={{ xs: 60, md: 80 }}
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
    </Box>
  );
};

export default Topbar;
