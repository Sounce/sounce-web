import React from "react";
import Section from "../core/Section";
import H1 from "../core/H1";
import SubText from "../core/SubText";
const HowToUse = props => {
  const howToUse = [
    'Go to the "Use" tab',
    'Start working with the product by clicking the "Start" button',
    "You will see a window with the camera open, place your hand in a designated place",
    "Start showing gestures",
    "The program will display the translation",
    "After ",
    "The program will display the translation"
  ];
  return (
    <Section>
      <H1 color="black">How to use</H1>
      <div>
        {howToUse.map((value, id) => (
          <SubText key={id} variant="subtitle1">
            {id + 1}. {value}
          </SubText>
        ))}
      </div>
    </Section>
  );
};
export default HowToUse;
