// src/components/Footer.js
import React from 'react';
import './Footer.css'; // For optional styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Simple Blog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
