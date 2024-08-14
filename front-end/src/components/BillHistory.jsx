import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/StockDetails.css';
import Header from './Header';

const BillHistory = () => {
  const [billData, setBillData] = useState([]);

  useEffect(() => {
    const fetchBillData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/get-bill-details');
        console.log(response);
        setBillData(response.data);
      } catch (error) {
        console.error('Error fetching bill data:', error);
      }
    };

    fetchBillData();
  }, []);

  return (
    <>
      <Header />
      <header className='header-table-st'>
        <h1>Bill Details</h1>
      </header>
      <main>
        <table className="product-table-st">
          <thead>
            <tr>
              <th className="table-header-cell">Date</th>
              <th className="table-header-cell">Bill No</th>
              <th className="table-header-cell">Payment Mode</th>
              <th className="table-header-cell">Cashier Name</th>
              <th className="table-header-cell">Cashier ID</th>
              <th className="table-header-cell">Total Items</th>
              <th className="table-header-cell">Grand Total</th>
            </tr>
          </thead>
          <tbody>
            {billData.map((bill, index) => (
              <tr key={index} className={index % 2 === 0 ? "alternate-row" : ""}>
                <td className="table-data-cell">{bill.date}</td>
                <td className="table-data-cell">{bill.billNo}</td>
                <td className="table-data-cell">{bill.paymentMode}</td>
                <td className="table-data-cell">{bill.cashierName}</td>
                <td className="table-data-cell">{bill.cashierId}</td>
                <td className="table-data-cell">{bill.totalItems}</td>
                <td className="table-data-cell">{bill.grandTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default BillHistory;
