import React from "react";
import { useState } from "react";

// import {FacebookIcon,InstagramIcon} from '@material-ui/icons';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

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
            <div className="bottom">
                <img src="https://suvidhafoundationedutech.org/AppTheme/images/SuvidhaLogo.png"/>
                <span>Home</span>
                <span>About</span>
                <span>Causes</span>
                <span>Blog</span>
                <span>Contact</span>
            </div>
            <button className="button">Join Us</button>
        </div>
    </div>
  );
};

export default Navbar;
