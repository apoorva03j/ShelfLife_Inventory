import React, { useState } from 'react';
import './EmployeeDetail.css';

const EmployeeDetail = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeId: '',
    employeeAddress: '',
    employeeEmail: '',
    employeePhno: '',
    employeeSalary: '',
    employeeAttendance: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can add more logic here to handle form submission
  };

  return (
    <div className="emp-form-container">
      <form className="employe-form" onSubmit={handleSubmit}>
        <h2>Employee Details</h2>
        <div className="emp-form-group">
          <input
            type="text"
            name="employeeName"
            placeholder="Employee Name"
            value={formData.employeeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="emp-form-group">
          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            value={formData.employeeId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="emp-form-group">
          <input
            type="text"
            name="employeeAddress"
            placeholder="Employee Address"
            value={formData.employeeAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="emp-form-group">
          <input
            type="email"
            name="employeeEmail"
            placeholder="Employee Email"
            value={formData.employeeEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="emp-form-group">
          <input
            type="tel"
            name="employeePhno"
            placeholder="Employee Phone Number"
            value={formData.employeePhno}
            onChange={handleChange}
            required
          />
        </div>
        <div className="emp-form-group">
          <input
            type="number"
            name="employeetype"
            placeholder="Employee Type"
            value={formData.employeeAttendance}
            onChange={handleChange}
            required
          />
        </div>
        <div className="emp-form-group full-width">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeDetail;