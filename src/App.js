import { Route, Routes } from 'react-router-dom';
import './App.css';
import Panel from './components/Panel';
import Grievance from './components/Grievance';
import Header from './components/Header';
import Footer from './components/Footer';
import StockDetails from './components/StockDetails';
import ManagerDashboard from './components/ManagerDashboard';
import CashierDashboard from './components/CashierDashboard';
import VendorTable from './components/VendorDetails';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import AddVendor from './components/AddVendor';
import ContactUs from './components/ContactUs';
import BillingPage from './components/BillingPage';
import StaffDashboard from './components/StaffDashboard';
import { useState } from 'react';

function App() {
  const [userType, setUserType] = useState(1);

  return (
    <div className="App">
      <Panel userType={userType}/>
      <Header/>
      <div className='page-content'>
      <Routes>
        <Route path="/" element={<ManagerDashboard />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/add-vendor" element={<AddVendor />} />
        <Route path="/vendor-details" element={<VendorTable/>} />
        <Route path="/stock" element={<StockDetails/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/add-employee" element={<ContactUs />} />
        <Route path="/cashier" element={<CashierDashboard />} />
        <Route path="/staff" element={<StaffDashboard />} />
      </Routes>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
