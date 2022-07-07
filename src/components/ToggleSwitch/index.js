import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function ToggleSwitch({ label, onChange }) {
  return (
    <FormControlLabel control={<Switch onChange={onChange} />} label={label} />
  );
}
