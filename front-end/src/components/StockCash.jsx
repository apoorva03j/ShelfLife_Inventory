import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/StockDetails.css';
import Header from './Header';
import Panel from './Panel';

const StockDetails = ({userType}) => {
  const [stockData, setStockData] = useState({
    products: [
      {
        id: 1,
        name: 'Product 1',
        unitPrice: 10.99,
        mrp: 12.99,
        threshold: 5,
        category: 'Brand 1',
        stockQuantity: 10,
        vendorId: 1,
      },
      {
        id: 2,
        name: 'Product 2',
        unitPrice: 5.99,
        mrp: 7.99,
        threshold: 10,
        category: 'Brand 2',
        stockQuantity: 20,
        vendorId: 2,
      },
      {
        id: 3,
        name: 'Product 3',
        unitPrice: 7.99,
        mrp: 9.99,
        threshold: 8,
        category: 'Brand 3',
        stockQuantity: 15,
        vendorId: 3,
      },
      {
        id: 4,
        name: 'Product 4',
        unitPrice: 3.99,
        mrp: 5.99,
        threshold: 12,
        category: 'Brand 4',
        stockQuantity: 30,
        vendorId: 4,
      },
      {
        id: 5,
        name: 'Product 5',
        unitPrice: 9.99,
        mrp: 11.99,
        threshold: 10,
        category: 'Brand 1',
        stockQuantity: 25,
        vendorId: 1,
      },

      {
        id: 6,
        name: 'Rice',
        unitPrice: 1.99,
        mrp: 2.49,
        threshold: 10,
        brand: 'Uncle Ben',
        stockQuantity: 50,
        vendorId: 1,
        category: 'Grains',
      },
      {
        id: 7,
        name: 'Wheat Flour',
        unitPrice: 2.49,
        mrp: 2.99,
        threshold: 15,
        brand: 'King Arthur',
        stockQuantity: 30,
        vendorId: 2,
        category: 'Baking',
      },
      {
        id: 8,
        name: 'Sugar',
        unitPrice: 0.99,
        mrp: 1.49,
        threshold: 20,
        brand: 'Domino',
        stockQuantity: 40,
        vendorId: 3,
        category: 'Pantry',
      },
      {
        id: 9,
        name: 'Milk',
        unitPrice: 2.99,
        mrp: 3.49,
        threshold: 10,
        brand: 'Organic Valley',
        stockQuantity: 25,
        vendorId: 4,
        category: 'Dairy',
      },
      {
        id: 10,
        name: 'Eggs',
        unitPrice: 1.49,
        mrp: 1.99,
        threshold: 12,
        brand: 'Eggland',
        stockQuantity: 30,
        vendorId: 5,
        category: 'Dairy',
      },
      {
        id: 11,
        name: 'Bread',
        unitPrice: 2.99,
        mrp: 3.49,
        threshold: 15,
        brand: 'Wonder Bread',
        stockQuantity: 20,
        vendorId: 6,
        category: 'Bakery',
      },
      {
        id: 12,
        name: 'Apples',
        unitPrice: 1.99,
        mrp: 2.49,
        threshold: 10,
        brand: 'Gala',
        stockQuantity: 40,
        vendorId: 7,
        category: 'Produce',
      },
      {
        id: 13,
        name: 'Carrots',
        unitPrice: 0.99,
        mrp: 1.49,
        threshold: 15,
        brand: 'Dole',
        stockQuantity: 30,
        vendorId: 8,
        category: 'Produce',
      },
    ],
  });

  return (
    <>
    <Header/>
    {/* <Panel userType={userType}/> */}
      <header className='header-table-st'>
        <h1>Stock Details</h1>
      </header>
      <main>
        <table className="product-table-st">
          <thead>
            <tr>
              <th className="table-header-cell">Product ID</th>
              <th className="table-header-cell">Product Name</th>
              <th className="table-header-cell">Unit Price</th>
              <th className="table-header-cell">MRP</th>
              <th className="table-header-cell">Threshold</th>
              <th className="table-header-cell">Category</th>
              <th className="table-header-cell">Stock Quantity</th>
              <th className="table-header-cell">Vendor ID</th>
            </tr>
          </thead>
          <tbody>
            {stockData.products.map((product, index) => (
              <tr key={index} className={index % 2 === 0 ? "alternate-row" : ""}>
                <td className="table-data-cell">{product.id}</td>
                <td className="table-data-cell">{product.name}</td>
                <td className="table-data-cell">{product.unitPrice}</td>
                <td className="table-data-cell">{product.mrp}</td>
                <td className="table-data-cell">{product.threshold}</td>
                <td className="table-data-cell">{product.category}</td>
                <td className="table-data-cell">{product.stockQuantity}</td>
                <td className="table-data-cell">{product.vendorId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default StockDetails;