import React from 'react';
import './Footer.css';
import assets from '../../assets';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <button className="btn-link footer-logo">Shortly</button>
        <div className="footer-nav">
          <h2>Features</h2>
          <div className="footer-nav-links">
            <button className="btn-link">Link Shortening</button>
            <button className="btn-link">Branded Links</button>
            <button className="btn-link">Analytics</button>
          </div>
        </div>
        <div className="footer-nav">
          <h2>Resources</h2>
          <div className="footer-nav-links">
            <button className="btn-link">Blog</button>
            <button className="btn-link">Developers</button>
            <button className="btn-link">Support</button>
          </div>
        </div>
        <div className="footer-nav">
          <h2>Company</h2>
          <div className="footer-nav-links">
            <button className="btn-link">About</button>
            <button className="btn-link">Our Team</button>
            <button className="btn-link">Careers</button>
            <button className="btn-link">Contact</button>
          </div>
        </div>
        <div className="footer-social">
          <button className="btn-link">
            <img src={assets.iconFacebook} alt="Facebook" />
          </button>
          <button className="btn-link">
            <img src={assets.icontwitter} alt="Twitter" />
          </button>
          <button className="btn-link">
            <img src={assets.iconPinterest} alt="Pinterest" />
          </button>
          <button className="btn-link">
            <img src={assets.iconInstagram} alt="Instagram" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
