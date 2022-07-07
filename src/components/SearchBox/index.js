import * as React from "react";
import {
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

/**
 * SearchBox: component used for search the news.
 * @params {label} label of the text box
 * @params {name} name of the text box
 * @params {placeholder} placeholder of the box
 * @params {type} type of the text box
 * @params {value} value of the text box
 * @params {variant} variant of the text box {outline,filled}
 * @params {handleChange} function to change text value
 */

export default function SearchBox(props) {
  const { label, name, placeholder, type, value, variant, handleChange } =
    props;
  return (
    <FormControl variant={variant} sx={{ width: { md: "30%" } }}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        name={name}
        id={name}
        label={label}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <IconButton aria-label="search icon" edge="start">
              <SearchOutlinedIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
