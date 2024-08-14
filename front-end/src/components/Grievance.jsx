import React, { useContext, useState } from 'react';
import axios from 'axios';
import '../assets/css/Grievance.css';
import Header from './Header';
import Panel from './Panel';
import { UserContext } from './UserContext';

function Grievance() {
  const {user} = useContext(UserContext);
  const [formData, setFormData] = useState({
    uId: user.uid,
    date: new Date().toISOString().split('T')[0],
    userName: user.name,
    subject: '',
    text: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:8080/grievance-submit', formData);
      console.log('Grievance submitted:', response.data);
  
      setFormData({
        userName: '',
        subject: '',
        text: '',
      });
    } catch (error) {
      console.error('Error submitting grievance:', error);
    }
  };
  

  return (
    <>
    <Header/>
    {/* <Panel userType={userType}/> */}
    <form onSubmit={handleSubmit} className="grievance-form">
        <h1>Grievance Form</h1>
      <input
        type="text"
        id="cashierName"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
        placeholder="Enter Name"
        required
        className="form-input-g"
      />

      <input
        type="text"
        id="grievanceSubject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Enter Subject"
        required
        className="form-input-g"
      />

      <textarea
        id="grievanceText"
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Your grievance here"
        required
        className="form-textarea-g"
      />

      <button type="submit" className="submit-button-g">Submit Grievance</button>
    </form>

    </>
  );
}

export default Grievance;
