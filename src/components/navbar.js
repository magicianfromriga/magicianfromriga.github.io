import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Toolbar } from "@mui/material";
const pages = ["Home", "Bio", "Portfolio", "Contact"];
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography style={{ fontSize: 24 }}>Tanmay Srinath</Typography>
          </div>
          <div>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/bio")}>
              Bio
            </Button>
            <Button color="inherit" onClick={() => navigate("/portfolio")}>
              Portfolio
            </Button>
            <Button color="inherit" onClick={() => navigate("/contact")}>
              Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
