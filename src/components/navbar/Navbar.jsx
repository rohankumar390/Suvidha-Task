import React from "react";
import { useState } from "react";

// import {FacebookIcon,InstagramIcon} from '@material-ui/icons';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import "./navbar.css";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className="navbar">
      <div className="container">
          <img src="https://suvidhafoundationedutech.org/AppTheme/images/SuvidhaLogo.png" />
        <div className="bottom">
          <h5>Home</h5>
          <h5>About</h5>
          <h5>Causes</h5>
          <h5>Blog</h5>
          <h5>Contact</h5>
        </div>
        <button className="button">Join Us</button>
      </div>
    </div>
  );
};

export default Navbar;
