import React, { Fragment } from "react";
import { Box, CssBaseline } from "@mui/material";

export default function Layout(props) {
  const { children } = props;
  return (
    <Fragment>
      <CssBaseline />
      <Box sx={{ m: "1rem" }}>{children}</Box>
    </Fragment>
  );
}
