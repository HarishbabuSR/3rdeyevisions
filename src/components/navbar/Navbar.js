import React from "react";
import { NavLink as Link } from "react-router-dom";
import "../navbar/Navbar.css";

let Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar   sticky-top navbar-expand-lg navbar-mainbg">
        <div className="navbar-brand navbar-logo">
          <h1 className="animated zoomIn slower">3rd Eye Visions Technology</h1>
          {/* <img src={logo2} width="50" height="50"/> */}
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContentr"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars text-black"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item active">
              <Link className="nav-link" to="/" exact>
                <i className="fa fa-tachometer"></i>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services" exact>
                <i className="fa fa-clone"></i>
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" exact>
                <i className="fa fa-address-book"></i>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus" exact>
                <i className="fa fa-copy"></i>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
