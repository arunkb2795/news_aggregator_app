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
  FabIcon,
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
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * Main page of the application
 */

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [sort, setSort] = useState(DEFAULT_SORT);
  const dispatch = useDispatch();
  const matches = useMediaQuery("(min-width:600px)");

  const { isLoadingWeatherData, isErrorWeatherData, weatherData } = useSelector(
    (state) => state.weather
  );
  const { isNewsLoading, newsData } = useSelector((state) => state.news);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  /**
   * getCurrentLocationData
   * function used for getting the current weather information using the user's geoLocation
   */

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

  /**
   * Initial call for the weather information using geolocation
   */

  useEffect(() => {
    getCurrentLocationData();
  }, []);

  /**
   * dispatch the getTopNewsHeadLines with sort and language parameters
   * dispatch the function on sort and language change
   */

  useEffect(() => {
    dispatch(getTopNewsHeadLines({ sort: sort, language: language }));
  }, [dispatch, sort, language]);

  /**
   * dispatch the getSearchedNewsDetails with search key,sort and language parameters
   * dispatch the function on search term change
   */

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

  /**
   * weather card function for rendering weather info on main component
   */

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

  /**
   * renderNewsCards  function for rendering news cards main component
   */

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

  /**
   * main component for render all the UI including navbar,toolbar,weather card and news card
   */

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
        <Box sx={{ position: "fixed", bottom: 0, right: 0 }}>
          {!matches && <FabIcon />}
        </Box>
        <ToastContainer position="bottom-left" />
      </Layout>
    </>
  );
}
