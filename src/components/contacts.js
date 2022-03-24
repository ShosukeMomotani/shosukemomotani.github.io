import * as React from "react";

import { Typography, Link, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "./instagram-icon";

export default function Contacts() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom component="div">
        Contacts
      </Typography>
      <Box sx={{ my: 1 }}>
        <Link href="https://www.facebook.com/shosuke.momotani" target="_blank">
          <FacebookIcon />
        </Link>
        <Link href="https://www.instagram.com/shosukemomotani/" target="_blank">
          <InstagramIcon />
        </Link>
      </Box>
    </Box>
  );
}
