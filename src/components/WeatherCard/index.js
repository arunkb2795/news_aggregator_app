import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  justifyContent: "center",
  marginTop: "50px",
  padding: "40px 30px",
  boxShadow: "rgb(0 0 0 / 2%) 0px 4px 12px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function WeatherCard(props) {
  const { climate, location, temperature } = props;
  return (
    <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
      <Typography variant="body2">
        {temperature.toFixed(2)} 31<sup>O</sup>C, {climate} {location}
      </Typography>
    </Box>
  );
}
