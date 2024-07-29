import { Route, Routes } from 'react-router-dom';
import './App.css';
import Panel from './components/Panel';
import Grievance from './components/Grievance';
import Header from './components/Header';
import Footer from './components/Footer';
import StockDetails from './components/StockDetails';
import StockCash from './components/StockCash';
import ManagerDashboard from './components/ManagerDashboard';
import CashierDashboard from './components/CashierDashboard';
import VendorTable from './components/VendorDetails';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import AddVendor from './components/AddVendor';
import ContactUs from './components/ContactUs';
import BillingPage from './components/BillingPage';
import StaffDashboard from './components/StaffDashboard';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import Main from './components/Main';
import EmployeeDetail from './components/EmployeeDetail';

function App() {
  const [userType, setUserType] = useState(1);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const storedUserType = localStorage.getItem('userType');
//     if (storedUserType) {
//       setUserType(parseInt(storedUserType));
//     }
//   }, []);

//   useEffect(() => {
//     const storedIsLoggedIn   
//  = localStorage.getItem('isLoggedIn');
//     if (storedIsLoggedIn) {
//       setIsLoggedIn(JSON.parse(storedIsLoggedIn));   

//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
//   }, [isLoggedIn]);

  return (
    <div className="App">
      {/* <Header /> */}
      {/* {isLoggedIn && <Panel isLoggedIn={isLoggedIn} userType={userType} setIsLoggedIn={setIsLoggedIn}/>} */}
      {/* <Main isLoggedIn={isLoggedIn} userType={userType} setIsLoggedIn={setIsLoggedIn}/> */}
      {/* <Panel userType={userType} /> */}
  <div>
    {/* <HomePage/> */}
      <Routes>
        <Route path="/main" element={<Main  userType={userType} />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/grievance" element={<Grievance userType={userType}/>} />
        <Route path="/login" element={<LoginPage setUserType={setUserType}/>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/add-vendor" element={<AddVendor userType={userType}/>} />
        <Route path="/vendor-details" element={<VendorTable userType={userType}/>} />
        <Route path="/stock" element={<StockDetails userType={userType} />} />
        <Route path="/stock-view" element={<StockCash userType={userType}/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/add-employee" element={<EmployeeDetail userType={userType} />} />
        <Route path="/cashier" element={<CashierDashboard userType={userType}/>} />
        <Route path="/staff" element={<StaffDashboard userType={userType}/>} />
      </Routes>
      {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
