import React from 'react';
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="navbar ">
      <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navbar-items">
            <li className="nav-item">
                  <Link className="" aria-current="page" to="/">
                    Home
                  </Link>
                 
                </li>
                <li className="nav-item">
                <Link className="" aria-current="page" to="/game">
                    Start-game
                  </Link>
                 
                </li>
                
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
