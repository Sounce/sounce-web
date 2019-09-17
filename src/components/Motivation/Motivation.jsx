import React from "react";
import Section from "../core/Section";
import H1 from "../core/H1";
import SubText from "../core/SubText";
const Motivation = props => {
  const motivationTxt =
    "Today, 360 million people in the world are deaf or hard of hearing. Our " +
    "product was createdto support moralnd ethical relations in society. We " +
    "want to help people with hearing impairments to better communicate in so" +
    "ciety";
  return (
    <Section>
      <H1 color={"#cccccc"}>Motivation</H1>
      <SubText>{motivationTxt}</SubText>
    </Section>
  );
};

export default Motivation;
