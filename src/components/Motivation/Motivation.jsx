import React from "react";
import Section from "../core/Section";
import H1 from "../core/H1";
import SubText from "../core/SubText";
import bg from "./bg2.jpg";
const Motivation = props => {
  const motivationTxt =
    "Today, 360 million people in the world are deaf or hard of hearing. Our " +
    "product was createdto support moralnd ethical relations in society. We " +
    "want to help people with hearing impairments to better communicate in so" +
    "ciety";
  return (
    <Section
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover"
      }}
    >
      <H1 color={"white"}>Motivation</H1>
      <div style={{ width: "80%" }}>
        <SubText color="white">{motivationTxt}</SubText>
      </div>
    </Section>
  );
};

export default Motivation;
