import * as React from "react";
import { CssBaseline } from "@mui/material";
import { Container, Box, AppBar, Toolbar, Typography, Stack } from "@mui/material";

import Products from "./components/products";
import Tweets from "./components/tweets";
import Contacts from "./components/contacts";
import AdsCard from "./components/ads-card";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ alignItems: "center" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">
            shosukemomotani.github.io
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ height: "100vh" }}>
        <Box sx={{ height: 48 + 12 }} />
        <Stack spacing={2}>
          <Products></Products>
          <Tweets></Tweets>
          <Contacts></Contacts>
        </Stack>
        <AdsCard />
      </Container>
    </React.Fragment>
  );
}

export default App;
