import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import { AppBar, Stack, Typography, Toolbar, Box } from "@mui/material";
import ToggleSwitch from "../ToggleSwitch";
import { ThemeContext } from "../../context/ThemeContext";
import moment from "moment";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  "@media all": {
    minHeight: 160,
    width: "100%",
  },
}));

export default function NavBar({ children }) {
  const { mode, setMode } = useContext(ThemeContext);
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box>
      <AppBar position="fixed" color="secondary" elevation={0}>
        <Box sx={{ ml: 3, mt: 3, mr: 3 }}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <NewspaperRoundedIcon color={"primary"} />
              <Typography variant="h3">#NewsReader</Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{ mb: 2 }}
              alignItems="center"
            >
              {matches && (
                <ToggleSwitch
                  onChange={() => setMode(!mode)}
                  label={mode ? "Dark mode on" : "Dark mode off"}
                />
              )}
              <Typography variant="body1">
                {moment().format("hh:mm A")}
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <StyledToolbar>
          <Stack sx={{ width: "100%" }}>{children}</Stack>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
