import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";

/**
 * Spinner: spinner used for showing the loading state
 * @params {message},
 */

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
