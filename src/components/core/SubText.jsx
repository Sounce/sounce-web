import React from "react";
import { Typography } from "@material-ui/core";
const SubText = props => {
  return (
    <Typography
      {...props}
      variant="h5"
      style={{
        color: props.color || "black",
        fontWeight: 300,
        lineHeight: 2,
        ...props.style
      }}
    >
      {props.children}
    </Typography>
  );
};
export default SubText;
