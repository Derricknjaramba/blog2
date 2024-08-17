// src/components/Header.js
import React from 'react';
import './Header.css'; // For optional styling

const Header = () => {
  return (
    <header className="header">
      <h1>Simple Blog</h1>
      <nav>
        <a href="/">Home</a>
        <a href="#create-post">Create Post</a>
      </nav>
    </header>
  );
};

export default Header;
