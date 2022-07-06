import * as React from "react";
import { TextField, MenuItem } from "@mui/material";

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
