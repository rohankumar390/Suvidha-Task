import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <section id="links">
      <div class="footer-grid">
        <div class="grid-item">
          <div class="footer-logo">
            <img
              src="https://suvidhafoundationedutech.org/AppTheme/images/SuvidhaLogo.png"
              alt="educator logo white"
            />
            Suvidha Mahila Mandal
          </div>

          <p class="footer-text">
            Suvidha Mahila Mandal is a non-profit organization working to impart
            education among the financially challenged sections to help them
            realize parity in education and strength of little minds in building
            a promising future. The organization has provisions of student
            internships, student mentorship and the scope to volunteer. Through
            these programmes, the organization aims to achieve the vision of
            imparting innovative education that stays with the students forever
            and equip them for the unforeseen future.
          </p>

          <div class="social-link"></div>
        </div>

        <ul class="grid-item">
          <h4 class="item-heading">Our Link</h4>

          <li class="list-item">
            <a href="#home">Home</a>
          </li>

          <li class="list-item">
            <a href="#about">About Us</a>
          </li>

          <li class="list-item">
            <a href="#course">Gallery</a>
          </li>

          <li class="list-item">
            <a href="#blog">Blog</a>
          </li>

          <li class="list-item">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        

        <div class="grid-item">
          <h4 class="item-heading">Subscribe Now</h4>

          <div class="wrapper">
            <input type="text" name="subscribe" placeholder="Email Address" />

            <button class="send-btn">
              <ion-icon name="paper-plane"></ion-icon>
            </button>
          </div>
        </div>
      </div>

      <p class="copyright">
        Copyright © 2023 <a href="#">Harsh Sharma</a>. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
