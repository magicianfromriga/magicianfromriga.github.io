import React from "react";
import "../styles/bio.css"
import Navbar from "./navbar";
import logo from '../assets/blueHorse.jpg';
const Contact = () => {
return(
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the Contact page where I tell you how you can contact me.
        </p>
      </header>
    </div>
)
}
export default Contact;