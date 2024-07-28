import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/VendorDetails.css';

const VendorDetails = () => {
  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: 'Praveen',
      address: '123 Main St, Anytown, USA',
      gst: '1234567890',
      type: 'Individual',
      productname: 'Bank of America',
      number: '1234567890',
      contactName: 'Praveen',
      email: 'praveen@example.com'
    },
    {
      id: 2,
      name: 'Yuva',
      address: '456 Elm St, Othertown, USA',
      gst: '9876543210',
      type: 'Business',
      productname: 'Wells Fargo',
      number: '9876543210',
      contactName: 'Yuva',
      email: 'yuva@example.com'
    },
    {
      id: 3,
      name: 'Rahul',
      address: '789 Oak St, Anytown, USA',
      gst: '1111111111',
      type: 'Individual',
      productname: 'Chase Bank',
      number: '1111111111',
      contactName: 'Rahul',
      email: 'rahul@example.com'
    },
    {
      id: 4,
      name: 'Suresh',
      address: '321 Maple St, Othertown, USA',
      gst: '2222222222',
      type: 'Business',
      productname: 'Bank of America',
      number: '2222222222',
      contactName: 'Suresh',
      email: 'suresh@example.com'
    },
    {
      id: 5,
      name: 'Kumar',
      address: '901 Pine St, Anytown, USA',
      gst: '3333333333',
      type: 'Individual',
      productname: 'Wells Fargo',
      number: '3333333333',
      contactName: 'Kumar',
      email: 'kumar@example.com'
    },
    {
      id: 6,
      name: 'Kumar',
      address: '901 Pine St, Anytown, USA',
      gst: '3333333333',
      type: 'Individual',
      productname: 'Wells Fargo',
      number: '3333333333',
      contactName: 'Kumar',
      email: 'kumar@example.com'
    },
    {
      id: 7,
      name: 'Kumar',
      address: '901 Pine St, Anytown, USA',
      gst: '3333333333',
      type: 'Individual',
      productname: 'Wells Fargo',
      number: '3333333333',
      contactName: 'Kumar',
      email: 'kumar@example.com'
    },
    {
      id: 8,
      name: 'Kumar',
      address: '901 Pine St, Anytown, USA',
      gst: '3333333333',
      type: 'Individual',
      productname: 'Wells Fargo',
      number: '3333333333',
      contactName: 'Kumar',
      email: 'kumar@example.com'
    },
    {
      id: 9,
      name: 'Kumar',
      address: '901 Pine St, Anytown, USA',
      gst: '3333333333',
      type: 'Individual',
      productname: 'Wells Fargo',
      number: '3333333333',
      contactName: 'Kumar',
      email: 'kumar@example.com'
    },
    {
      id: 10,
      name: 'Kumar',
      address: '901 Pine St, Anytown, USA',
      gst: '3333333333',
      type: 'Individual',
      productname: 'Wells Fargo',
      number: '3333333333',
      contactName: 'Kumar',
      email: 'kumar@example.com'
    },
    {
      id: 11,
      name: 'Kumar',
      address: '901 Pine St, Anytown, USA',
      gst: '3333333333',
      type: 'Individual',
      productname: 'Wells Fargo',
      number: '3333333333',
      contactName: 'Kumar',
      email: 'kumar@example.com'
    },
    {
      id: 12,
      name: 'Kumar',
      address: '901 Pine St, Anytown, USA',
      gst: '3333333333',
      type: 'Individual',
      productname: 'Wells Fargo',
      number: '3333333333',
      contactName: 'Kumar',
      email: 'kumar@example.com'
    },
    {
      id: `13`,
      name: 'Kumar',
      address: '901 Pine St, Anytown, USA',
      gst: '3333333333',
      type: 'Individual',
      productname: 'Wells Fargo',
      number: '3333333333',
      contactName: 'Kumar',
      email: 'kumar@example.com'
    }
  ]);

  return (
    <div className="vendor-table">
      <header className='header-table1'>
        <h1>Vendor Details</h1>
      </header>
      <table className="vendor-table__table">
        <thead>
          <tr>
            <th className="vendor-table__th">ID</th>
            <th className="vendor-table__th">Name</th>
            <th className="vendor-table__th">Address</th>
            <th className="vendor-table__th">GST</th>
            <th className="vendor-table__th">Type</th>
            <th className="vendor-table__th">Product Name</th>
            <th className="vendor-table__th">Number</th>
            <th className="vendor-table__th">Contact Name</th>
            <th className="vendor-table__th">Email</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id} className="vendor-table__tr">
              <td className="vendor-table__td">{vendor.id}</td>
              <td className="vendor-table__td">{vendor.name}</td>
              <td className="vendor-table__td">{vendor.address}</td>
              <td className="vendor-table__td">{vendor.gst}</td>
              <td className="vendor-table__td">{vendor.type}</td>
              <td className="vendor-table__td">{vendor.productname}</td>
              <td className="vendor-table__td">{vendor.number}</td>
              <td className="vendor-table__td">{vendor.contactName}</td>
              <td className="vendor-table__td">{vendor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorDetails;