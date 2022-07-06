import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Layout,
  Navbar,
  Card,
  SearchBox,
  SelectBox,
  WeatherCard,
  Title,
  ToolBar,
} from "../../components";
import { Box, Grid, Stack } from "@mui/material";
import {
  SORT_BY,
  COUNTRIES,
  DEFAULT_LANGUAGE,
  DEFAULT_SORT,
} from "../../constants";
import { getWeatherDetails } from "../../redux/weatherDetailsSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MOCK_DATA } from "../../constants/mockData";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [sort, setSort] = useState(DEFAULT_SORT);
  const dispatch = useDispatch();

  const { isLoadingWeatherData, isErrorWeatherData, weatherData } = useSelector(
    (state) => state.weather
  );

  const getCurrentLocationData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        dispatch(
          getWeatherDetails({ latitude: latitude, longitude: longitude })
        );
      });
    }
  };

  useEffect(() => {
    getCurrentLocationData();
  }, []);

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };

  const handleCountryChange = (e) => {
    console.log(e.target.value);
    setLanguage(e.target.value);
  };

  const renderWeatherCard = () => {
    return (
      <WeatherCard
        climate={weatherData?.weather[0].main ?? null}
        location={weatherData?.name ?? null}
        temperature={parseInt(weatherData?.main.temp) - 273.15 ?? null}
        isLoadingWeatherData={isLoadingWeatherData}
        isErrorWeatherData={isErrorWeatherData}
      />
    );
  };

  return (
    <>
      <Navbar>
        <ToolBar>
          <SearchBox
            name="Search News"
            label="Search News"
            type="text"
            variant="outlined"
            value={searchTerm}
            handleChange={handleSearchChange}
          />
          <Stack spacing={2} direction="row">
            <SelectBox
              label="Select Language"
              name="Select Language"
              variant="outlined"
              value={language}
              options={COUNTRIES}
              handleChange={handleCountryChange}
            />
            <SelectBox
              label="Sort By"
              name="Sort By"
              variant="outlined"
              value={sort}
              options={SORT_BY}
              handleChange={handleSortChange}
            />
          </Stack>
        </ToolBar>
        {renderWeatherCard()}
      </Navbar>
      <Layout>
        <Box sx={{ mt: "16rem" }}>
          <Title heading="Top News Headings" />
          <Grid container spacing={3}>
            {MOCK_DATA?.articles?.map((item, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} lg={3}>
                  <Card
                    imageURL={item.urlToImage}
                    author={item.author}
                    title={item.title}
                    content={item.content}
                    description={item.description}
                    publishedAt={item.publishedAt}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <ToastContainer position="bottom-left" />
      </Layout>
    </>
  );
}
