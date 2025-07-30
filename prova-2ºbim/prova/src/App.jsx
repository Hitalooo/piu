import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default App;