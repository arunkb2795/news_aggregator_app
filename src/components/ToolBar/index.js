import React from "react";
import { Stack } from "@mui/material";

export default function ToolBar({ children }) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{ justifyContent: "space-between", mb: "2rem", width: "100%" }}
      spacing={2}
    >
      {children}
    </Stack>
  );
}
