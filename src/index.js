import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './components/home';
import Biography from './components/bio';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = (
  <BrowserRouter>
    <div className='mainPage'>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/bio" element={<Biography/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
    </div>
  </BrowserRouter>
)
root.render(routes);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
