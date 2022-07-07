import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Layout,
  Navbar,
  Card,
  WeatherCard,
  Title,
  ToolBar,
  Spinner,
  NotFound,
} from "../../components";
import { Box, Grid } from "@mui/material";
import {
  SORT_BY,
  COUNTRIES,
  DEFAULT_LANGUAGE,
  DEFAULT_SORT,
} from "../../constants";
import useDebounce from "../../hooks/useDebounce";
import { getWeatherDetails } from "../../redux/weatherDetailsSlice";
import {
  getTopNewsHeadLines,
  getSearchedNewsDetails,
} from "../../redux/newsDetailsSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [sort, setSort] = useState(DEFAULT_SORT);
  const dispatch = useDispatch();

  const { isLoadingWeatherData, isErrorWeatherData, weatherData } = useSelector(
    (state) => state.weather
  );
  const { isNewsLoading, newsData } = useSelector((state) => state.news);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

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

  useEffect(() => {
    dispatch(getTopNewsHeadLines({ sort: sort, language: language }));
  }, [dispatch, sort, language]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(
        getSearchedNewsDetails({
          searchKey: debouncedSearchTerm,
          sort: sort,
          language: language,
        })
      );
    }
  }, [dispatch, sort, language, debouncedSearchTerm]);

  const renderWeatherCard = () => {
    return (
      <WeatherCard
        climate={weatherData?.weather[0].main ?? null}
        location={weatherData?.name ?? null}
        temperature={weatherData?.main.temp ?? null}
        isLoadingWeatherData={isLoadingWeatherData}
        isErrorWeatherData={isErrorWeatherData}
      />
    );
  };

  const renderNewsCards = () => {
    if (isNewsLoading) {
      return (
        <Box sx={{ mt: "20rem", display: "flex", justifyContent: "center" }}>
          <Spinner message="Loading please wait..." />
        </Box>
      );
    }
    if (newsData?.length === 0 && !isNewsLoading) {
      return (
        <Box sx={{ mt: "20rem", display: "flex", justifyContent: "center" }}>
          <NotFound message="Sorry no news found please try again later." />
        </Box>
      );
    }
    return (
      <Box sx={{ mt: "16rem" }}>
        <Title
          heading="Today's Top News Headlines"
          searchTerm={debouncedSearchTerm}
        />
        <Grid container spacing={3}>
          {newsData?.map((item, index) => {
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
    );
  };

  return (
    <>
      <Navbar>
        <ToolBar
          searchTerm={searchTerm}
          handleSearchChange={setSearchTerm}
          language={language}
          countryOptions={COUNTRIES}
          handleLanguageChange={setLanguage}
          sort={sort}
          sortOptions={SORT_BY}
          handleSortChange={setSort}
        />
        {renderWeatherCard()}
      </Navbar>
      <Layout>
        {renderNewsCards()}
        <ToastContainer position="bottom-left" />
      </Layout>
    </>
  );
}
