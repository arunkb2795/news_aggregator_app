import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "./context/ThemeContext";
import { themeLight, themeDark } from "./theme";

export default function App() {
  const [mode, setMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={mode ? themeDark : themeLight}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
