import React from "react";
import logo from '../assets/blueHorse.jpg';
import "../styles/bio.css"
import Navbar from "./navbar";
const Biography = () => {
return(
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the bio page where I talk about myself.
        </p>
      </header>
    </div>
)
}
export default Biography;