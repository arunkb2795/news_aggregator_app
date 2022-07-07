import React from "react";
import { Divider, Box, Chip } from "@mui/material";

export default function TitleChip(props) {
  const { heading, variant, textAlign } = props;
  return (
    <Box sx={{ mb: "2rem" }}>
      <Divider textAlign={textAlign}>
        <Chip label={heading} color={"primary"} variant={variant} />
      </Divider>
    </Box>
  );
}
