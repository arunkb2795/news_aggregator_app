import React from "react";
import { Divider, Box, Chip } from "@mui/material";

export default function Title(props) {
  const { heading } = props;
  return (
    <Box sx={{ mb: "2rem" }}>
      <Divider>
        <Chip label={heading} color={"primary"} />
      </Divider>
    </Box>
  );
}
