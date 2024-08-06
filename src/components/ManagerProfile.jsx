import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Panel from './Panel';
import Footer from './Footer1';

const ManagerProfile = () => {
  const [managerData, setManagerData] = useState({
    name: '',
    username: '',
    password: '',
    company: {
      name: '',
      address: '',
      email: '',
      contactNumber: '',
      businessRegistrationNumber: '',
      vatGstNumber: '',
      businessLicenseDocument: '',
    },
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setManagerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCompanyInputChange = (event) => {
    const { name, value } = event.target;
    setManagerData((prevData) => ({
      ...prevData,
      company: {
        ...prevData.company,
        [name]: value,
      },
    }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put('/api/managers/me', managerData); // Update API endpoint
      console.log('Manager data updated successfully:', response.data);
      setIsEditing(false); // Set editing mode to false after successful update
    } catch (error) {
      console.error('Error updating manager data:', error);
    }
  };

  useEffect(() => {
    // Fetch manager data from API
    const fetchManagerData = async () => {
      try {
        const response = await axios.get('/api/managers/me');
        setManagerData(response.data);
      } catch (error) {
        console.error('Error fetching manager data:', error);
      }
    };

    fetchManagerData();
  }, []);

  return (
    <>
    <Header/>
    <Panel/>
    <div className="manager-profile">
      <h2>Manager Profile</h2>
      <button onClick={() => setIsEditing(!isEditing)}>Edit Profile</button>
      <div className="manager-details">
        <h3>Manager Information</h3>
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={managerData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="username"
              value={managerData.username}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              value={managerData.password}
              onChange={handleInputChange}
            />
          </>
        ) : (
          <>
            <p>Name: {managerData.name}</p>
            <p>Username: {managerData.username}</p>
            <p>Password: {managerData.password}</p> {/* Consider not displaying password directly */}
          </>
        )}
      </div>
      <div className="company-details">
        <h3>Company Information</h3>
        {isEditing ? (
          <>
            <input
              type="text"
              name="company.name"
              value={managerData.company.name}
              onChange={handleCompanyInputChange}
            />
            <input
              type="text"
              name="company.address"
              value={managerData.company.address}
              onChange={handleCompanyInputChange}
            />
            <input
              type="email"
              name="company.email"
              value={managerData.company.email}
              onChange={handleCompanyInputChange}
            />
            <input
              type="text"
              name="company.contactNumber"
              value={managerData.company.contactNumber}
              onChange={handleCompanyInputChange}
            />
            <input
              type="text"
              name="company.businessRegistrationNumber"
              value={managerData.company.businessRegistrationNumber}
              onChange={handleCompanyInputChange}
            />
            <input
              type="text"
              name="company.vatGstNumber"
              value={managerData.company.vatGstNumber}
              onChange={handleCompanyInputChange}
            />
            {/* Handle business license document */}
          </>
        ) : (
          <>
            <p>Name: {managerData.company.name}</p>
            <p>Address: {managerData.company.address}</p>
            <p>Email: {managerData.company.email}</p>
            <p>Contact Number: {managerData.company.contactNumber}</p>
            <p>Business Registration Number: {managerData.company.businessRegistrationNumber}</p>
            <p>VAT/GST Number: {managerData.company.vatGstNumber}</p>
            <p>Business License: {managerData.company.businessLicenseDocument}</p> {/* Replace with appropriate display logic */}
          </>
        )}
      </div>
      {isEditing && (
        <button onClick={handleSave}>Save Changes</button>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default ManagerProfile;
