export default {
  spacing: (m) => `${m * 4}px`,
  typography: {
    fontSize: "18px",
  },
  palette: {
    default: {
      light: "#ffffff",
      main: "#f2f3f4",
      dark: "#bdc2c7",
      contrastText: "#5d5d5d",
      border: "#dcdcdc",
    },
    primary: {
      light: "#a132f0",
      main: "#8510d8",
      dark: "#6a0dad",
      contrastText: "#f2f3f4",
    },
    secondary: {
      light: "#a2f468",
      main: "#7aef27",
      dark: "#5fcf0f",
      contrastText: "#8510d8",
    },
    error: {
      light: "#ffffff",
      main: "#ffded3",
      dark: "#ff9876",
      contrastText: "#e80000",
      border: "#ff9a7f",
    },
    success: {
      light: "#ffffff",
      main: "#d4f4c9",
      dark: "#99e57f",
      contrastText: "#006d00",
      border: "#70b060",
    },
  },
};
