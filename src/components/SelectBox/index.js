import * as React from "react";
import { TextField, MenuItem } from "@mui/material";

/**
 * SelectBox: component used for select the sortBy or language.
 * @params {label} label of the select box
 * @params {name} name of the select box
 * @params {options} array of available options
 * @params {value} value of the select box
 * @params {variant} variant of the select box {outline,filled}
 * @params {handleChange} function to change select value
 */

export default function SelectBox(props) {
  const { label, name, value, options, variant, handleChange } = props;
  return (
    <TextField
      id={name}
      name={name}
      select
      label={label}
      variant={variant}
      value={value}
      onChange={handleChange}
      sx={{ width: "200px" }}
    >
      {options.map((option) => (
        <MenuItem key={option.code} value={option.code}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
}
