import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";

export default function Spinner(props) {
  const { message } = props;
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CircularProgress sx={{ mb: "1rem" }} />
      <Typography>{message}</Typography>
    </Box>
  );
}
