import React from 'react';
import './Footer.css';

const Footer = () => (
  <>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <br />
            <br />

            <div className="address-bar">
              Perryman Keglovits Foundation
              <br />
              PO Box 274  | East Stroudsburg, PA 18301
              {' '}
              <br />
              Contact Rich Laverdure
              {' '}
              <span className="fas fa-phone" />
              <a href="tel:570-460-5156" className="address-bar">(570)460-5156</a>
            </div>
          </div>
          <div className="col-lg-12 text-center pb-4">

            <h3 className="intro-text"><small>All rights reserved &copy;2021</small></h3>

          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
