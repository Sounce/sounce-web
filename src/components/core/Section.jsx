import React from "react";
const Section = props => {
  const height = 700;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: `${height}px`,
        minHeight: "100vh",
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
