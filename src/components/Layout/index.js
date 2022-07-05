import React, { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function Layout(props) {
  const { children } = props;
  return (
    <Fragment>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{ display: "flex", justifyContent: "center", p: 0 }}
      >
        {children}
      </Container>
    </Fragment>
  );
}
