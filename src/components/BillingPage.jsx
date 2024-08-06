import React, { Fragment, useEffect, useState } from 'react';
import '../assets/css/BillingPage.css';

const BillingPage = () => {
  const [billNo, setBillNo] = useState(Math.floor(100000 + Math.random() * 900000)); // auto-generated bill no
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // current date
  const [search, setSearch] = useState('');
  const [cashierName, setCashierName] = useState('John Doe'); // cashier name
  const [cashierId, setCashierId] = useState('CASH001'); // cashier id
  const [products, setProducts] = useState([]);
  const [totalItemsSold, setTotalItemsSold] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [discountType, setDiscountType] = useState('Percentage'); // default discount type
  const [discountValue, setDiscountValue] = useState(0); // default discount value

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleQuantityChange = (index, event) => {
    const newQuantity = Number(event.target.value);
    const newProducts = [...products];
    const oldProduct = products[index];
    const oldAmount = oldProduct.quantity * oldProduct.mrp;
    const newAmount = newQuantity * oldProduct.mrp;
    newProducts[index] = { ...oldProduct, quantity: newQuantity, amount: newAmount };
    setProducts(newProducts);
    calculateGrandTotal(); // Call calculateGrandTotal after updating products
  };

  const handleMRPChange = (index, event) => {
    const newMRP = Number(event.target.value);
    const newProducts = [...products];
    const oldProduct = products[index];
    const oldAmount = oldProduct.quantity * oldProduct.mrp;
    const newAmount = oldProduct.quantity * newMRP;
    newProducts[index] = { ...oldProduct, mrp: newMRP, amount: newAmount };
    setProducts(newProducts);
    calculateGrandTotal(); // Call calculateGrandTotal after updating products
  };

  const calculateGrandTotal = () => {
    let totalTax = 0;
    let totalAmount = 0;

    products.forEach((product) => {
      const taxAmount = product.mrp * product.gstRate / 100;
      totalAmount += product.quantity * product.mrp;
      totalTax += taxAmount;
    });

    let discountedTotal = totalAmount;
    if (discountType === 'Percentage') {
      discountedTotal = totalAmount - (totalAmount * discountValue / 100);
    } else if (discountType === 'Amount') {
      discountedTotal = totalAmount - discountValue;
    }

    setGrandTotal(discountedTotal + totalTax);
  };

  const handleDiscountTypeChange = (event) => {
    setDiscountType(event.target.value);
    calculateGrandTotal(); // Recalculate grand total on discount type change
  };

  const handleDiscountValueChange = (event) => {
    setDiscountValue(Number(event.target.value));
    calculateGrandTotal(); // Recalculate grand total on discount value change
  };

  const handleAddProduct = (event) => {
    if (event.key === 'Enter') {
      const productName = event.target.value;
      const quantity = 1; // Default quantity
      const gstRate = 0; // Default GST rate
      const mrp = 0; // Default MRP
      const amount = mrp * quantity; // Calculate amount
      const newProduct = { name: productName, quantity, gstRate, mrp, amount };
      setProducts([...products, newProduct]);
      setTotalItemsSold(totalItemsSold + 1);
      calculateGrandTotal(); // Call calculateGrandTotal after adding product
    }
  };

  useEffect(() => {
    calculateGrandTotal();
  }, [products]);
  
  const handleRemoveProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
    setTotalItemsSold(totalItemsSold - 1);
    calculateGrandTotal(); // Call calculateGrandTotal after removing product
  };
  
  
  const handlePrint = () => {
    window.print();
  }
  
  return (
    <Fragment>
      <div className="billing-page">
        <div className="bill-no-date">
          <label>Bill No.: {billNo}</label>
          <label>Date: {date}</label>
          <label>Cashier Name: {cashierName}</label>
          <label>Cashier ID: {cashierId}</label>
        </div>
       
        <div className="add-product">
          <label>Add Product:</label>
          <input type="text" placeholder="Enter product name..." onKeyDown={handleAddProduct} />
        </div>
        <div className="product-table">
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>GST Rate</th>
                <th>MRP</th>
                <th>Tax</th>
                <th>Total Amount</th>
                <th className='nodisplay'>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <input type="text" value={product.name} onChange={(event) => {
                      const newProduct = {...product, name: event.target.value };
                      const newProducts = [...products];
                      newProducts[index] = newProduct;
                      setProducts(newProducts);
                    }} />
                  </td>
                  <td>
                    <input type="number" value={product.quantity} onChange={(event) => handleQuantityChange(index, event)}  />
                  </td>
                  <td>
                    <input type="number" value={product.gstRate} onChange={(event) => {
                      const newProduct = {...product, gstRate: event.target.value };
                      const newProducts = [...products];
                      newProducts[index] = newProduct;
                      setProducts(newProducts);
                    }} />
                  </td>
                  <td>
                    <input type="number" value={product.mrp} onChange={(event) => {
                      handleMRPChange(index, event)
                    }} />
                  </td>
                  <td>
                    {(product.mrp * product.gstRate / 100).toFixed(2)}
                  </td>
                  <td>
                    {(product.quantity * product.mrp).toFixed(2)}
                  </td>
                  <td>
                    <button onClick={() => handleRemoveProduct(index)}>Remove</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><strong>{grandTotal.toFixed(2)}</strong></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="billing-requirements">
  <div className='bill-1'>
    <div className='bill-2'>
    <label>Payment Mode:</label>
    <select>
      <option value="cash">Cash</option>
      <option value="card">Card</option>
      <option value="upi">UPI</option>
    </select>
    </div>

    <div className='bill-2'>
    <label>Discount Type:</label>
    <select value={discountType} onChange={handleDiscountTypeChange}>
      <option value="Percentage">Percentage</option>
      <option value="Amount">Amount</option>
    </select>
    </div>

    <div className='bill-2'>
    <label>Discount Value:</label>
    <input className="select-bill" type="number" value={discountValue} onChange={handleDiscountValueChange} />
    </div>
  </div>
  <div>
    <label>Total Items Sold: {totalItemsSold}</label>
    <label>Grand Total: ₹ {grandTotal.toFixed(2)}</label>
  </div>
</div>
      <button className='login-btn' onClick={handlePrint}>Print</button>
</div>


    </Fragment>
  );
};

export default BillingPage;