import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <div className="navigation">
    <div className="logoWrapper">
      <img src="https://wallpapersprinted.com/download/2/books_3-wallpaper-960x600.jpg" height="80" width="160" alt="logo" />
    </div>
    <nav>
      <ul className="nav">
        <li><NavLink exact="true" to="/">Home</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
