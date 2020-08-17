export default {
  spacing: (value) => `${value * 4}px`,
  typography: {
    fontSize: "18px",
  },
  palette: {
    default: {
      contrastText: "#5d5d5d",
      border: "#dcdcdc",
    },
    primary: {
      main: "#8510d8",
      contrastText: "#f2f3f4",
    },
    secondary: {
      main: "#6a0dad",
      contrastText: "#efdbfa",
    },
    tertiary: {
      main: "#7aef27",
      contrastText: "#441766",
    },
    error: {
      main: "#ffded3",
      contrastText: "#e80000",
      border: "#ff9a7f",
    },
    success: {
      main: "#d4f4c9",
      contrastText: "#006d00",
      border: "#70b060",
    },
  },
};
