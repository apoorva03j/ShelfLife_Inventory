import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Header from './Header';
import Panel from './Panel';
import Footer from './Footer1';
import { UserContext } from './UserContext';
import '../assets/css/ManagerProfile.css';

const ManagerProfile = () => {
  const { user } = useContext(UserContext);

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
  const [loading, setLoading] = useState(true);

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
      const response = await axios.put('http://localhost:8080/update-profile', managerData);
      console.log('Manager data updated successfully:', response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating manager data:', error);
    }
  };

  useEffect(() => {
    if (user && user.uid) {
      const fetchManagerData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/get-profile/${user.uid}`);
          // Ensure that company is always defined
          const fetchedData = response.data;
          if (!fetchedData.company) {
            fetchedData.company = {
              name: '',
              address: '',
              email: '',
              contactNumber: '',
              businessRegistrationNumber: '',
              vatGstNumber: '',
              businessLicenseDocument: '',
            };
          }
          setManagerData(fetchedData);
        } catch (error) {
          console.error('Error fetching manager data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchManagerData();
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Panel />
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
                name="name"
                value={managerData.company?.name || ''}
                onChange={handleCompanyInputChange}
              />
              <input
                type="text"
                name="address"
                value={managerData.company?.address || ''}
                onChange={handleCompanyInputChange}
              />
              <input
                type="email"
                name="email"
                value={managerData.company?.email || ''}
                onChange={handleCompanyInputChange}
              />
              <input
                type="text"
                name="contactNumber"
                value={managerData.company?.contactNumber || ''}
                onChange={handleCompanyInputChange}
              />
              <input
                type="text"
                name="businessRegistrationNumber"
                value={managerData.company?.businessRegistrationNumber || ''}
                onChange={handleCompanyInputChange}
              />
              <input
                type="text"
                name="vatGstNumber"
                value={managerData.company?.vatGstNumber || ''}
                onChange={handleCompanyInputChange}
              />
            </>
          ) : (
            <>
              <p>Name: {managerData.company?.name || 'N/A'}</p>
              <p>Address: {managerData.company?.address || 'N/A'}</p>
              <p>Email: {managerData.company?.email || 'N/A'}</p>
              <p>Contact Number: {managerData.company?.contactNumber || 'N/A'}</p>
              <p>Business Registration Number: {managerData.company?.businessRegistrationNumber || 'N/A'}</p>
              <p>VAT/GST Number: {managerData.company?.vatGstNumber || 'N/A'}</p>
            </>
          )}
        </div>
        {isEditing && <button onClick={handleSave}>Save Changes</button>}
      </div>
      <Footer />
    </>
  );
};

export default ManagerProfile;
