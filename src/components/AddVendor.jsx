import React, { useState } from 'react';
import '../assets/css/AddVendor.css';
import Header from './Header';
import Panel from './Panel';
import Footer from './Footer';

const AddVendor = ({userType}) => {
  const [formData, setFormData] = useState({
    email: '',
    vendorName: '',
    vendorAddress: '',
    vendorCategory: '',
    contactName: '',
    contactNumber: '',
    product: '',
    productType: '',
    gstTin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <>
    <Header/>
    {/* <Panel userType={userType}/> */}
    <div className="form-container-vendor">
      <form className="vendor-form" onSubmit={handleSubmit}>
        <h1 className='header-vendor'>Add Vendor Details</h1>
        <div className="form-group-v1">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-v1">
          <input
            type="text"
            name="vendorName"
            placeholder="Vendor Name"
            value={formData.vendorName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-v1">
          <input
            type="text"
            name="vendorAddress"
            placeholder="Vendor Address"
            value={formData.vendorAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-v1">
          <input
            type="text"
            name="vendorCategory"
            placeholder="Vendor Category"
            value={formData.vendorCategory}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-v1">
          <input
            type="text"
            name="contactName"
            placeholder="Contact Name"
            value={formData.contactName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-v1">
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-v1">
          <input
            type="text"
            name="product"
            placeholder="Product Name"
            value={formData.product}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-v1">
          <input
            type="text"
            name="productType"
            placeholder="Product Type"
            value={formData.productType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-v1">
          <input
            type="text"
            name="gstTin"
            placeholder="GST/TIN"
            value={formData.gstTin}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-v1 full-width">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default AddVendor;
