import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import AbcIcon from "@mui/icons-material/Abc";
import CasinoIcon from "@mui/icons-material/Casino";
import { Typography } from "@mui/material";

export default function Products() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom component="div">
        Products
      </Typography>
      <Box sx={{ my: 1 }}>
        <nav aria-label="main mailbox folders">
          <List dense>
            {[
              [
                "Mollky Score Board",
                "https://shosukemomotani.github.io/molkky-score-board/",
                <GolfCourseIcon />,
              ],
              [
                "Karura Reader",
                "https://shosukemomotani.github.io/karuta-reader/",
                <AbcIcon />,
              ],
              [
                "Baroque Dice",
                "https://shosukemomotani.github.io/baroque-dice/",
                <CasinoIcon />,
              ],
            ].map(([label, url, icon]) => {
              return (
                <ListItem disablePadding button component="a" href={url}>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </nav>
      </Box>
    </Box>
  );
}
