import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4150FA",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ["Poppins, sans-serif"],
    fontSize: 14,
    body1: {
      fontSize: 13,
    },
    h3: {
      fontSize: 22,
      fontWeight: "bold",
    },
    h4: {
      fontSize: 18,
      fontWeight: "bold",
    },
    h6: {
      fontSize: 14,
      fontWeight: "bold",
    },
    subTitle: {
      fontSize: 12,
    },
  },
});

export default theme;
