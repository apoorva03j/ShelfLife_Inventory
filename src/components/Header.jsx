import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Header.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import dp from '../assets/images/dp.png';


const Header = ({userType}) => {
  const { userId, logout } = useAuth(); 
  const [adminData, setAdminData] = useState({
    name: '',
    photo: ''
  });
  const navigate = useNavigate();

  const findUser = async () => {
    try {
      const response = await axios.get(`http://localhost:/users/${userId}`);
      const { name } = response.data;
      setAdminData({ name });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = () => {
    logout();
  }

  return (
    <header className='header-h with-sidebar'>
      <nav className="navigation-h">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/manager" className="nav-link">
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
              src={dp}
              alt="Admin"
              className="admin-photo"
            /> 
            <button className='login-btn' onClick={handleLogout}>Logout</button> 
          
          </div>
          
    </header>
  );
};

export default Header;
