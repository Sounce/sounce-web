import React from "react";
import Section from "../core/Section";
import H1 from "../core/H1";
import {
  FormControl,
  InputLabel,
  Input,
  TextareaAutosize,
  FormLabel
} from "@material-ui/core";

const ContactUs = props => {
  const headerText = "Contact Us";
  return (
    <Section>
      <H1 color="#dacbed">{headerText}</H1>
      <div>
        <FormControl>
          <InputLabel htmlFor="Name">Name</InputLabel>
          <Input id="Name"></Input>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Email">Email</InputLabel>
          <Input id="Email"></Input>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="Message">Message</FormLabel>
          <TextareaAutosize id="Message"></TextareaAutosize>
        </FormControl>
      </div>
    </Section>
  );
};
export default ContactUs;
