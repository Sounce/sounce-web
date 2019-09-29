import React from "react";
import { Typography, Button } from "@material-ui/core";
import Section from "../core/Section";
import H1 from "../core/H1";
import bg from "./bg.jpg";
const Welcome = props => {
  return (
    <Section
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover"
      }}
    >
      <H1 style={{ filter: "brightness(200%) !important" }}>
        Speak without bounds
      </H1>
      <Button
        color="primary"
        size="large"
        variant="contained"
        style={{ width: "200px" }}
      >
        Try it out
      </Button>
    </Section>
  );
};
export default Welcome;
