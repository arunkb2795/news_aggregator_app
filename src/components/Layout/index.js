import React, { Fragment } from "react";
import { Box, CssBaseline } from "@mui/material";

/**
 * Layout: component used for setup the common layout
 */

export default function Layout(props) {
  const { children } = props;
  return (
    <Fragment>
      <CssBaseline />
      <Box sx={{ m: "1rem" }}>{children}</Box>
    </Fragment>
  );
}
