import React from "react";
import { Stack } from "@mui/material";
import SearchBox from "../SearchBox";
import SelectBox from "../SelectBox";

/**
 * ToolBar: Used for search,sort and select the language for the news list
 * @params {searchTerm} term searched using the search box
 * @params {language} selected language
 * @params {handleSearchChange} function for change the the search value
 * @params {countryOptions} available country options
 * @params {handleLanguageChange} function for change the language selected
 * @params {sort} selected sort option
 * @params {sortOptions} available sort options
 * @params {handleSortChange} function for change the sort option
 */

export default function ToolBar(props) {
  const {
    searchTerm,
    handleSearchChange,
    language,
    countryOptions,
    handleLanguageChange,
    sort,
    sortOptions,
    handleSortChange,
  } = props;
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{ justifyContent: "space-between", mb: "2rem", width: "100%" }}
      spacing={2}
    >
      <SearchBox
        name="Search News"
        label="Search News"
        type="text"
        variant="outlined"
        placeholder="Search Today's Highlights"
        value={searchTerm}
        handleChange={(e) => handleSearchChange(e.target.value)}
      />
      <Stack spacing={2} direction="row">
        <SelectBox
          label="Select Language"
          name="Select Language"
          variant="outlined"
          value={language}
          options={countryOptions}
          handleChange={(e) => handleLanguageChange(e.target.value)}
        />
        <SelectBox
          label="Sort By"
          name="Sort By"
          variant="outlined"
          value={sort}
          options={sortOptions}
          handleChange={(e) => handleSortChange(e.target.value)}
        />
      </Stack>
    </Stack>
  );
}
