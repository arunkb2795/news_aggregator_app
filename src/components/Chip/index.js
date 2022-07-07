import React from "react";
import { Divider, Box, Chip } from "@mui/material";

/**
 * TitleChip: component used for show the title
 * @params {heading} label of the chip,
 * @params {variant} style variant of the chip,
 * @params {textAlign} align the chip,
 */

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
