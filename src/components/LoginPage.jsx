import React, { useState } from 'react';
import '../assets/css/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import Header1 from './Header1';
import Footer from './Footer';

const LoginPage = ({setUserType}) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateData = () =>{
    if(formData.username==='manager' && formData.password==='manager01'){
      setUserType(1);
      navigate('/manager');
      // setIsLoggedIn(true);
    }
    else if(formData.username==='cashier' && formData.password==='cashier01'){
      setUserType(2);
      navigate('/cashier');
      // setIsLoggedIn(true);
    }
    else if(formData.username==='staff' && formData.password==='staff01'){
      setUserType(3);
      navigate('/staff');
      // setIsLoggedIn(true);
    }
    else{
      alert('Invalid username or password');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    validateData()

  };

  return (
    <>
    <Header1/>
    <div className="form-container-login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group-l">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-l">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-l full-width">
          <button type="submit" className='submit-login'>Login</button>
        </div>
        <div className="form-group-; full-width">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default LoginPage;
