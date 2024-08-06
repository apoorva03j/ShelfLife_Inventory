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
import { AuthProvider } from './components/AuthProvider';
import ManagerProfile from './components/ManagerProfile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    // Handle successful login, e.g., store token, set user data
    setIsLoggedIn(true);
  };



  return (
    <AuthProvider onLogin={handleLoginSuccess}>
    <div className="App">

  <div>
      <Routes>
        {/* <Route path="/main" element={<Main />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/manager-profile" element={<ManagerProfile />} />
        <Route path="/grievance" element={<Grievance/>} />
        <Route path="/add-vendor" element={<AddVendor />}/>
        <Route path="/vendor-details" element={<VendorTable />} />
        <Route path="/stock" element={<StockDetails  />} />
        <Route path="/stock-view" element={<StockCash />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/add-employee" element={<EmployeeDetail />} />
        <Route path="/cashier" element={<CashierDashboard />} />
        <Route path="/staff" element={<StaffDashboard />} />
      </Routes>
      {/* <Footer/> */}
      </div>
    </div>
    </AuthProvider>
  );
}

export default App;
