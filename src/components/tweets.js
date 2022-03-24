import * as React from "react";
import { Typography, Box } from "@mui/material";

let isLoadwidgets = false;

export default function Tweets() {
  React.useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      s.setAttribute("charset", "utf-8");
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom component="div">
        Tweets
      </Typography>
      <a
        className="twitter-timeline"
        data-height="400"
        data-dnt="true"
        data-theme="light"
        data-chrome="noheadernofooternoborders"
        href="https://twitter.com/tanshicyu?ref_src=twsrc%5Etfw"
      >
        Tweets by tanshicyu
      </a>
    </Box>
  );
}
