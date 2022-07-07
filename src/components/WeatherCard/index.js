import * as React from "react";
import { Box, Typography, Stack } from "@mui/material";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import { styled } from "@mui/system";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  width: "100%",
  alignItems: "center",
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

  const renderWeatherInfo = () => {
    if (isLoadingWeatherData) {
      return <Box>Loading...</Box>;
    }
    if (isErrorWeatherData || !temperature) {
      return <Box>No weather details found.</Box>;
    }
    return (
      <Stack direction={{ xs: "row", md: "column" }}>
        <Typography variant="h6">
          {temperature && (temperature - 273.15).toFixed(1)}
          <sup>O</sup>C,
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 2 }}>
          {climate} {location}
        </Typography>
      </Stack>
    );
  };

  return (
    <Container>
      <CloudOutlinedIcon
        color="primary"
        sx={{ mr: "1rem" }}
        fontSize={"large"}
      />
      <Stack direction="row">{renderWeatherInfo()}</Stack>
    </Container>
  );
}
