import React from "react";
import { Typography } from "@material-ui/core";
const SubText = props => {
  return (
    <Typography {...props} variant="subtitle1">
      {props.children}
    </Typography>
  );
};
export default SubText;
