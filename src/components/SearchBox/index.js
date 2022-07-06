import * as React from "react";
import {
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function SearchBox(props) {
  const { label, name, type, value, variant, handleChange } = props;
  return (
    <FormControl variant={variant} sx={{ width: { md: "30%" } }}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        name={name}
        id={name}
        label={label}
        type={type}
        value={value}
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
