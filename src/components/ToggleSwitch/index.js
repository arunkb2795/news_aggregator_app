import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

/**
 * ToggleSwitch: Used for toggle the dark mode
 * @params {label } show the toggle button label
 * @params {onChange } function to change the toggle state
 */

export default function ToggleSwitch({ label, onChange }) {
  return (
    <FormControlLabel control={<Switch onChange={onChange} />} label={label} />
  );
}
