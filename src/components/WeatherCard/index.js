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

/**
 * WeatherCard - WeatherCard component used for display the  current weather details.
 * @param {climate} props is a string of current climate (Misty/Sunny etc)
 * @param {location} is a string of current weather location.
 * @param {temperature} is a number of current weather temperature in degree celsius.
 * @param {isLoadingWeatherData} is a boolean for loading state of the api.
 * @param {isErrorWeatherData} is a boolean for error state of the api.
 * @returns 
 */

export default function WeatherCard(props) {
  const {
    climate,
    location,
    temperature,
    isLoadingWeatherData,
    isErrorWeatherData,
  } = props;

  if (isLoadingWeatherData) {
    return (
      <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
        Loading...
      </Box>
    );
  }

  if (isErrorWeatherData) {
    return (
      <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
        No weather details found.
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
      <Typography variant="body2">
        {temperature.toFixed(2)} 31<sup>O</sup>C, {climate} {location}
      </Typography>
    </Box>
  );
}
