import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/SignUpPage.css';
import Header1 from './Header1';
import Footer from './Footer';
import axios from 'axios';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyAddress: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    businessRegNumber: '',
    vatNumber: '',
    businessLicense: null,
    adminName: '',
    adminPosition: '',
    adminContactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 


    // Validation (optional)
    // Add checks for required fields, password confirmation, etc.

    try {
      const formDataToSend = new FormData(); // Create a FormData object

      // Add data to FormData
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post('http://localhost:8080/signup', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' } // Set content type for file uploads
      });

      console.log('Sign Up Response:', response.data);

      // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
      console.error('Sign Up Error:', error);

      // Handle signup errors (e.g., display error message)
    }
  };


  return (
    <>
    <Header1/>
    <div className="form-container-s">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Sign Up for ShelfLife</h2>

        <div className="form-group-s">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-s">
          <input
            type="text"
            name="companyAddress"
            placeholder="Company Address"
            value={formData.companyAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-s">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-s">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-s">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-s">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Contact Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-s">
          <input
            type="text"
            name="businessRegNumber"
            placeholder="Business Registration Number"
            value={formData.businessRegNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-s">
          <input
            type="text"
            name="vatNumber"
            placeholder="VAT/GST Number"
            value={formData.vatNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-s">
          <input
            type="file"
            name="businessLicense"
            onChange={handleChange}
            required
          />
          <p>Upload Business License Document</p>
        </div>
        <div className="form-group-s">
          <input
            type="text"
            name="adminName"
            placeholder="Admin Full Name"
            value={formData.adminName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-s">
          <input
            type="text"
            name="adminPosition"
            placeholder="Position (e.g., Owner, CEO)"
            value={formData.adminPosition}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-s">
          <input
            type="tel"
            name="adminContactNumber"
            placeholder="Admin Contact Number"
            value={formData.adminContactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-s full-width">
          <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </div>
        <div className="form-group-s full-width">
          <p>Already have an account? <Link to="/login">Sign In</Link></p>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default SignUpPage;
