import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Camera from "./components/Camera/Camera";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <AboutUs />
      <Camera />
      <ContactUs />
    </div>
  );
}

export default App;
