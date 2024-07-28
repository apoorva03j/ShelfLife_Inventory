import { useEffect, useState } from "react";
import '../assets/css/Panel.css';
import logo from '../assets/images/logo.png';

const Panel = ({ userType }) => {
  const [menuItems, setMenuItems] = useState([]);

  const decide = () => {
    if (userType === 1) {
      setMenuItems([
        { label: 'Dashboard', link: '/stock' }, 
        // { label: 'Add Employee', link: '/add-employee'},
        { label: 'Stock Details', link: '/stock' }, 
        // { label: 'Add Vendor', link: '/add-vendor' },
        {label: 'Generate Bill', link: '/billing'},
        // { label: 'Vendor Details', link: '/vendor-details' },
        { label: 'Grievances', link: '/grievance' }
      ]);
    }
  };

  useEffect(() => {
    decide();
  }, []);

  return (
    <div className="side-panel">
      <div className="panel-top">
        <img src={logo} className="img-logo" alt="logo"/>
        <h1>ShelfLife</h1>
      </div>
      <h2> Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Panel;
