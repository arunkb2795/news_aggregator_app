import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../../context/ThemeContext";

/**
 * FabIcon: Used for enable and disable dark mode in mobile
 */

export default function FabIcon() {
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <Box sx={{ m: 1 }}>
      <Fab color="primary" aria-label="add">
        <IconButton onClick={() => setMode(!mode)}>
          {mode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Fab>
    </Box>
  );
}
