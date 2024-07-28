import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Header.css';

const Header = () => {
  const [adminData, setAdminData] = useState({});

  useEffect(() => {
    setAdminData({ name: 'Admin' });
  }, []);

  return (
    <header className="header-h">
      <nav className="navigation-h">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#footer" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#footer" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="admin-profile">
        <img
          src={adminData.photo || 'admin-photo.jpg'}
          alt="Admin Photo"
          className="admin-photo"
        />
        <span className="admin-name">{adminData.name}</span>
      </div>
    </header>
  );
};

export default Header;
