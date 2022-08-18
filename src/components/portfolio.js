import React from "react";
import "../styles/portfolio.css"
import Navbar from "./navbar";
import logo from '../assets/blueHorse.jpg';
const Portfolio = () => {
return(
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the Portfolio page where I talk about my work.
        </p>
      </header>
    </div>
)
}
export default Portfolio;