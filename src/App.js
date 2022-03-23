import * as React from "react";
import { CssBaseline } from "@mui/material";
import { Container, Box, AppBar, Toolbar, Typography } from "@mui/material";

import LinkList from "./components/link-list";
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
        <Box sx={{ height: 48 }} />
        <Box>
          <LinkList></LinkList>
        </Box>
        <AdsCard />
      </Container>
    </React.Fragment>
  );
}

export default App;
