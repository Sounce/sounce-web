import React from "react";
import { Typography } from "@material-ui/core";
const H1 = props => {
  return (
    <Typography
      variant="h1"
      style={{ color: props.color || "white", fontWeight: 600, ...props.style }}
    >
      {props.children}
    </Typography>
  );
};
export default H1;
