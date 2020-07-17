import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'

import './App.css';
import Home from "./Components/home.js";
import Gallery from "./Components/gallery.js";
import Members from "./Components/members.js";
import Rush from "./Components/rush.js";

function App() {
  return (
    <Router>
      <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light">
  
            <Link to="/" className="navbar-brand"><img src={require('./images/logo.jpg')} height="25px" alt="Logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/members" className="nav-link" activeClassName="active">Members</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/rush" className="nav-link" activeClassName="active">Rush</NavLink>
                </li>
                {/*<li className="nav-item">
                <NavLink to="/gallery" className="nav-link" activeClassName="active">Gallery</NavLink>
                </li>*/}
                </ul>
            </div>
          </nav>
  
    
      <Route path="/" exact component={Home} />
      <Route path="/members" component={Members} />
      <Route path="/rush" exact component={Rush} />
      <Route path="/gallery" component={Gallery} />

      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-4 space">
              <h4 className="footer-text">Social Media</h4>
              <ul className="social-network social-circle">
              <li><a href="https://www.facebook.com/thetataunau/" rel="noopener noreferrer" className="icoFacebook" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li><a  href="https://twitter.com/thetataunau" rel="noopener noreferrer" className="icoTwitter" title="Facebook" target="_blank"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/thetataunau/" rel="noopener noreferrer" className="icoInsta" title="Facebook" target="_blank"><i className="fa fa-instagram"></i></a></li>
              </ul>				
            </div>
          </div>
          <div className="row copy">
            <div className="col-md-12">
              <small>Copyright &copy; <span id="year"></span> Omicron Epsilon</small>
              </div>
            </div>
          </div>
      </footer>
     </div>
    </Router>

  );
}

export default App;
