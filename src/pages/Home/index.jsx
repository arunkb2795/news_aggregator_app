import React, { useState } from "react";
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
import { MOCK_DATA } from "../../constants/mockData";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [sort, setSort] = useState(DEFAULT_SORT);

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
        <WeatherCard climate={"Sunny"} location={"USA"} temperature={27.9} />
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
      </Layout>
    </>
  );
}
