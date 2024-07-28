import React, { Fragment, useState } from 'react';
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
  const [discountValue, setDiscountValue] = useState(10); // default discount value

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleAddProduct = (event) => {
    if (event.key === 'Enter') {
      const productName = event.target.value;
      const quantity = 1; // default quantity
      const gstRate = 0; // default gst rate
      const mrp = 0; // default mrp
      const amount = mrp * quantity; // calculate amount
      const newProduct = { name: productName, quantity, gstRate, mrp, amount };
      setProducts([...products, newProduct]);
      setTotalItemsSold(totalItemsSold + 1);
      setGrandTotal(grandTotal + amount);
    }
  };

  const handleRemoveProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
    setTotalItemsSold(totalItemsSold - 1);
    setGrandTotal(grandTotal - newProducts[index].amount);
  };

  const handleDiscountTypeChange = (event) => {
    setDiscountType(event.target.value);
  };

  const handleDiscountValueChange = (event) => {
    setDiscountValue(event.target.value);
    calculateGrandTotal();
  };

  const calculateGrandTotal = () => {
    let discountedTotal = grandTotal;
    if (discountType === 'Percentage') {
      discountedTotal = grandTotal - (grandTotal * discountValue / 100);
    } else if (discountType === 'Amount') {
      discountedTotal = grandTotal - discountValue;
    }
    setGrandTotal(discountedTotal);
  };

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
                <th>Action</th>
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
                    <input type="number" value={product.quantity} onChange={(event) => {
                      const newProduct = {...product, quantity: event.target.value };
                      const newProducts = [...products];
                      newProducts[index] = newProduct;
                      setProducts(newProducts);
                      setGrandTotal(grandTotal - product.amount + newProduct.quantity * newProduct.mrp);
                    }} />
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
                      const newProduct = {...product, mrp: event.target.value };
                      const newProducts = [...products];
                      newProducts[index] = newProduct;
                      setProducts(newProducts);
                      setGrandTotal(grandTotal - product.amount + newProduct.quantity * newProduct.mrp);
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
          <label>Payment Mode:</label>
          <select>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="upi">UPI</option>
          </select>
          <br />
          <label>Discount Type:</label>
          <select value={discountType} onChange={handleDiscountTypeChange}>
            <option value="Percentage">Percentage</option>
            <option value="Amount">Amount</option>
          </select>
          <br />
          <label>Discount Value:</label>
          <input type="number" value={discountValue} onChange={handleDiscountValueChange} />
          <br />
          <label>Total Items Sold: {totalItemsSold}</label>
          <br />
          <label>Grand Total: ₹ {grandTotal.toFixed(2)}</label>
        </div>
        <div className="actions">
          <button onClick={() => console.log('Bill save successfully!')}>Save Bill</button>
          
          <button onClick={() => console.log('Print Bill!')}>Print Bill</button>
          <button onClick={() => console.log('Quit Bill!')}>Quit Bill</button>
        </div>
      </div>
    </Fragment>
  );
};

export default BillingPage;