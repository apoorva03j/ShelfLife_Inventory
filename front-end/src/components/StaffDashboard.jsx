import React, { useState, useEffect, useContext } from 'react';
import Chart from 'chart.js/auto';
import { Line, Pie, Bar, Radar } from 'react-chartjs-2';
import '../assets/css/ManagerDashboard.css';
import Header from './Header';
import Panelstaff from './Panelstaff';
import Footer from './Footer1';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import axios from 'axios';



const StaffDashboard = ({userType}) => {

    
      const [attendanceData, setAttendanceData] = useState({
        yearlySales: [900000, 850000, 750000, 900000, 1000000, 700000],
      });

      const [salesData, setSalesData] = useState({
        monthlySales: [],
        yearlySales: [],
        salesByCategory: [],
      });
      const { user } = useContext(UserContext);
      const navigate = useNavigate();
    
      useEffect(() => {
          fetchSalesData();
          fetchLowStockData();
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
    
    
        } catch (error) {
          console.error('Error fetching sales data:', error);
        }
      };
    
    
      const [lowStockData, setLowStockData] = useState({
        pname: [],
        stockLevels: [],
      });
    
    
    
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

    <Panelstaff userType={userType}/>
    <div className="dashboard">
    
    <div className='dash'>
        <div className="section-d-staff">
            <h2>Units To Be Delivered</h2>
            <div className='sub-section-d'>
                <h4>150</h4>
            </div>
        </div>
        <div className="section-d-staff">
            <h2>Units To Be Received</h2>
            <div className='sub-section-d'>
                <h4>50</h4>
            </div>
        </div>
        <div className="section-d-staff">
            <h2>Units About to Expire</h2>
            <div className='sub-section-d'>
                <h4>4</h4>
            </div>
        </div>
    </div>

    <div className='dash'>
        <div className="section-d">
        <h2>Sales Overview</h2>
        <div className="chart-container">
          <Bar data={{
            labels: ['Current Month', 'Previous Month'],
            datasets: [{
              label: 'Sales',
              data: salesData?.monthlySales || [], // Handle empty data
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
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
      <h2>Attendance Data</h2>
      <div className="chart-container">
        <Line data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Sales',
              data: attendanceData?.monthly || [], 
              fill: false,
              borderColor: 'rgba(75, 192, 192, 1)',
              tension: 0.1
            }
          ]
        }} />
      </div>
    </div>
    </div>

    
    </div>
        <Footer/>
    </>
  );
};

export default StaffDashboard;
