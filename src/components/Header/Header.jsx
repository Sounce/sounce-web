import React from "react";
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
const Header = props => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#000000 !important" }}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#000000 !important"
        }}
      >
        <Typography variant="h4">Sounce</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "50%"
          }}
        >
          <Button color="inherit">How to use</Button>
          <Button color="inherit">About us</Button>
          <Button color="inherit">Try it out</Button>
          <Button color="inherit">Contact Us</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
