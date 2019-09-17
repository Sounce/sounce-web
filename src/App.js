import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Camera from "./components/Camera/Camera";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

function App() {
  const theme = createMuiTheme({
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

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Welcome />
        <AboutUs />
        <Camera />
        <ContactUs />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
