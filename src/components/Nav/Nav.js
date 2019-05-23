import React from 'react';
import Logo from '../Logo/Logo';
import './Nav.css';
//plantilla nav tomada de template bootstrap
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg top-navbar-condor fixed-top text-uppercase " id="mainNav">
      <div className="container">
        <Logo />
        <button className="navbar-toggler navbar-toggler-right text-uppercase bg-menu text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
      </button>
        <div className="col-8 collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto text-black">
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="https://condorlabs.io/#perksContainer" target="_blank" rel="noopener noreferrer">Perks</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="https://condorlabs.io/hiring" target="_blank" rel="noopener noreferrer">Hiring</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="https://condorlabs.io/team" target="_blank" rel="noopener noreferrer">Team</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="https://condorlabs.io/about" target="_blank" rel="noopener noreferrer">About us</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="https://condorlabs.io/#connectContainer" target="_blank" rel="noopener noreferrer">Connect</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;