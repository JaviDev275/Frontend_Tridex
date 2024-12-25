import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); 
  //const [token, setToken] = useState(null); 

  const login = (/*token, */user) => {
    setIsAuthenticated(true);
    //setToken(token);
    setUser(user);
    //localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setIsAuthenticated(false);
    //setToken(null);
    setUser(null);
    //localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  useEffect(() => {
    // Cargar los datos desde localStorage al iniciar
    //const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (/*storedToken && */storedUser) {
      setIsAuthenticated(true);
      //setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, /*token, */login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
