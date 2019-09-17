import React from "react";
import { Typography, Button } from "@material-ui/core";
import Section from "../core/Section";
const Welcome = props => {
  return (
    <Section
      style={{
        background:
          "linear-gradient(to bottom,#94e1ff 0%, rgba(255,255,255,1) 100%)"
      }}
    >
      <Typography variant="h1" style={{ color: "white", fontWeight: 600 }}>
        Speak without bounds
      </Typography>
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
