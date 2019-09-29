import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import TryItOut from "./components/TryItOut/TryItOut";
import ContactUs from "./components/ContactUs/ContactUs";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes
} from "@material-ui/core";
import Motivation from "./components/Motivation/Motivation";
import HowToUse from "./components/HowToUse/HowToUse";

import grey from "@material-ui/core/colors/grey";
function App() {
  let theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Montserrat",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(",")
    }
  });
  theme = responsiveFontSizes(theme);

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Welcome />
        <HowToUse />
        <Motivation />
        <TryItOut />
        <ContactUs />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
