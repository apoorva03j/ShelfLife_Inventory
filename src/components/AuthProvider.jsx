import { createContext, useState, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children, onLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const login = useCallback((userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
    onLogin && onLogin(); // Call the provided callback
  }, [onLogin]);

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    navigate("/");
    
  };

  const value = {
    isLoggedIn,
    login,
    userId,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
