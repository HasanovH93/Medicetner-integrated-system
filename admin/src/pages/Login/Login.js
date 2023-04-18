import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "../../components/Container";
import Form from "./Form/Form";
import Main from "../../layouts/Main";

const Login = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const imageUrl = "/assets/3350444.jpg";

  return (
    <Main>
      <Box
        position={"relative"}
        minHeight={"calc(100vh - 247px)"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={1}
      >
        <Container>
          <Grid container spacing={6}>
            {isMd ? (
              <Grid item container justifyContent={"center"} xs={12} md={6}>
                <Box height={1} width={1} maxWidth={500}>
                  <Box
                    component={"img"}
                    src={process.env.PUBLIC_URL + imageUrl}
                    width={1}
                    height={1}
                    sx={{
                      filter:
                        theme.palette.mode === "dark"
                          ? "brightness(0.8)"
                          : "none",
                    }}
                  />
                </Box>
              </Grid>
            ) : null}
            <Grid
              item
              container
              alignItems={"center"}
              justifyContent={"center"}
              xs={12}
              md={6}
            >
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default Login;
