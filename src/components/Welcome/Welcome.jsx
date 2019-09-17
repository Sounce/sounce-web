import React from "react";
import { Typography, Button } from "@material-ui/core";
import Section from "../core/Section";
import H1 from "../core/H1";
const Welcome = props => {
  return (
    <Section
      style={{
        background:
          "linear-gradient(to bottom,#94e1ff 0%, rgba(255,255,255,1) 100%)"
      }}
    >
      <H1> Speak without bounds</H1>
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
