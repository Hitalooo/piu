import React, { useState } from 'react';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [bgColor, setBgColor] = useState('white');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === 'correto') {
      setBgColor('green');
    } else {
      setBgColor('white');
    }
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Digite aqui" 
      />
    </div>
  );
};

export default Home;