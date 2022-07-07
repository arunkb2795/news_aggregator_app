import * as React from "react";
import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

/**
 * NotFound: component used for showing empty result.
 */

export default function NotFound(props) {
  const { message } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <InfoOutlinedIcon sx={{ mb: "1rem" }} fontSize="large" color="primary" />
      <Typography>{message}</Typography>
    </Box>
  );
}
