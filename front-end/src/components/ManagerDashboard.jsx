import React, { useState, useEffect, useContext } from 'react';
import { Line, Pie, Bar, Radar } from 'react-chartjs-2';
import '../assets/css/ManagerDashboard.css';
import Header from './Header';
import Panel from './Panel';
import Footer1 from './Footer1';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Dashboard = () => {
  // const [salesData] = useState({
  //   toBeDelivered: [
  //     { product: 'Product A', quantity: 100 },
  //     { product: 'Product B', quantity: 150 },
  //   ],
  //   bestSellingProducts: [
  //     { category: 'Fruits', product: 'Apple', quantity: 500 },
  //     { category: 'Vegetables', product: 'Carrot', quantity: 400 },
  //   ],
  //   monthlySales: [10000, 12000, 15000, 11000, 9000, 13000, 14000, 16000, 18000, 20000, 22000, 25000],
  //   yearlySales: [100000, 120000, 150000, 180000, 210000, 240000],
  //   productsAboutToExpire: [
  //     { product: 'Product E', expiryDate: '2024-12-31' },
  //   ],
  //   salesByCategory: [
  //     { label: 'Fruits', value: 30 },
  //     { label: 'Vegetables', value: 25 },
  //     { label: 'Dairy', value: 20 },
  //     { label: 'Grains', value: 15 },
  //     { label: 'Others', value: 10 },
  //   ],
  // });

  // const [financialData] = useState({
  //   yearlySales: [100000, 120000, 150000, 180000, 210000, 240000],
  // });

  const [employeeData, setEmployeeData] = useState({
    attendance: [
      { employee: 'Employee A', data: [85, 90, 88, 92, 87, 91, 89, 93, 86, 94, 85, 92] },
      { employee: 'Employee B', data: [90, 85, 92, 88, 91, 86, 93, 87, 90, 89, 92, 85] }
    ],
    employees: [
      { name: 'Employee A', role: 'Manager' },
      { name: 'Employee B', role: 'Cashier' },
    ],
  });
  const [salesData, setSalesData] = useState({
    monthlySales: [],
    yearlySales: [],
    salesByCategory: [],
  });
  const [financialData, setFinancialData] = useState({});
  // const [employeeData, setEmployeeData] = useState({});
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
      fetchSalesData();
      // fetchFinancialData();
      // fetchEmployeeData();
  }, [user]);

  const fetchSalesData = async () => {
    try {
      const currentYear = new Date().getFullYear();
      const monthlyResponse = await axios.get(`http://localhost:8080/sales/monthly/${currentYear}`);
      const yearlyResponse = await axios.get(`http://localhost:8080/sales/yearly`);
      const byCategory = await axios.get(`http://localhost:8080/sales/by-category`);


      console.log(monthlyResponse);
      console.log(yearlyResponse);
      console.log(byCategory);
      setSalesData({
        monthlySales: monthlyResponse.data,
        yearlySales: yearlyResponse.data,
        salesByCategory: byCategory.data,
      });

      setFinancialData({
        yearlySales: monthlyResponse.data,
      });

      console.log(financialData);

    } catch (error) {
      console.error('Error fetching sales data:', error);
    }
  };

  // const fetchFinancialData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8080/api/financial/yearly-sales');
  //     setFinancialData({
  //       yearlySales: response.data,
  //       // Fetch other financial-related data as needed
  //     });
  //   } catch (error) {
  //     console.error('Error fetching financial data:', error);
  //   }
  // };

  // const fetchEmployeeData = async () => {
  //   try {
  //     const attendanceResponse = await axios.get('http://localhost:8080/api/employees/attendance');
  //     const employeesResponse = await axios.get('http://localhost:8080/api/employees');
  //     setEmployeeData({
  //       attendance: attendanceResponse.data,
  //       employees: employeesResponse.data,
  //     });
  //   } catch (error) {
  //     console.error('Error fetching employee data:', error);
  //   }
  // };

  const [lowStockData, setLowStockData] = useState({
    pname: [],
    stockLevels: [],
  });

  const employeeColors = ['#63b3d0a2', '#d063a1a2'];

  useEffect(() => {
    if (user.id === null) {
      navigate("/login");
    } else {
      // fetchEmployeeData();
      fetchLowStockData();
    }
  }, [user]);


  const fetchLowStockData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/low-stock');
      const resp = response.data;
      setLowStockData({
        products: resp.map(item => item.pname),
        stockLevels: resp.map(item => item.quantity)
      });
      console.log(response);
    } catch (error) {
      console.error('Error fetching low stock data:', error);
    }
  };

  return (
    <>
      <Header />
      <Panel />
      <div className="dashboard">
        <div className='dash'>
          <div className="section-d-small">
            <h2>Bills Generated Today</h2>
            <div className='sub-section-d'>
              <h4>100</h4>
            </div>
          </div>
          <div className="section-d-small">
            <h2>Total Sales Today</h2>
            <div className='sub-section-d'>
              <h4>$7000</h4>
            </div>
          </div>
          <div className="section-d-small">
            <h2>Units Sold Today</h2>
            <div className='sub-section-d'>
              <h4>70</h4>
            </div>
          </div>
          <div className="section-d-small">
            <h2>Units Received Today</h2>
            <div className='sub-section-d'>
              <h4>140</h4>
            </div>
          </div>
        </div>

        <div className="section-d">
          <h2>Sales Overview</h2>
          <div className="chart-container">
            <Bar data={{
              labels: ['Current Month', 'Previous Month'],
              datasets: [{
                label: 'Sales',
                data: salesData.monthlySales || [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
              }]
            }} />
          </div>
        </div>

        <div className="section-d">
          <h2>Sales By Category</h2>
          <div className="chart-container">
            <Pie data={{
              labels: salesData.salesByCategory.map(item => item.label),
              datasets: [{
                label: 'Sales by Category',
                data: salesData.salesByCategory.map(item => item.value),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 153, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 153, 1)'
                ],
                borderWidth: 1
              }]
            }} />
          </div>
        </div>



        

        <div className="section-d">
          <h2>Low Stock Products</h2>
          <div className="chart-container">
            <Radar data={{
              labels: lowStockData.products,
              datasets: [{
                label: 'Stock Level',
                data: lowStockData.stockLevels,
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointRadius: 3
              }]
            }} />
          </div>
        </div>

        <div className="section-d">
          <h2>Financial Overview</h2>
          <div className="chart-container">
            <Line data={{
              labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              datasets: [
                {
                  label: 'Sales',
                  data: financialData.yearlySales || [],
                  fill: false,
                  borderColor: 'rgba(75, 192, 192, 1)',
                  tension: 0.1
                }
              ]
            }} />
          </div>
        </div>

        <div className="section-d">
          <h2>Employee Management</h2>
          <div className="chart-container">
            <Bar data={{
              labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              datasets: employeeData.attendance.map((employee, index) => ({
                label: employee.employee,
                data: employee.data,
                backgroundColor: employeeColors[index],
                borderColor: 'rgba(75, 190, 192, 1)',
                borderWidth: 1
              }))
            }}
            />
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Dashboard;

