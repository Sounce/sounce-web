import React from "react";
const Section = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "500px",
        justifyContent: "space-evenly",
        alignItems: "center",
        ...props.style
      }}
    >
      {props.children}
    </div>
  );
};
export default Section;
