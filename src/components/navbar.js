import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Toolbar } from "@mui/material";
import "../styles/navbar.css"
const pages = ["Home", "Bio", "Portfolio", "Contact"];
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navBarMain">
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography className="dashboardHeader">Tanmay Srinath</Typography>
          </div>
          <div className="navbarButtons">
            <Button className="navbarTabs" color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button className="navbarTabs" color="inherit" onClick={() => navigate("/bio")}>
              Bio
            </Button>
            <Button className="navbarTabs" color="inherit" onClick={() => navigate("/portfolio")}>
              Portfolio
            </Button>
            <Button className="navbarTabs" color="inherit" onClick={() => navigate("/contact")}>
              Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
