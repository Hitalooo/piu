import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  useEffect(() => {
    // Gera uma cor baseada no valor do texto digitado
    const hash = [...inputValue].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const r = (hash * 37) % 256;
    const g = (hash * 59) % 256;
    const b = (hash * 83) % 256;
    const color = `rgb(${r}, ${g}, ${b})`;
    setBgColor(color);
  }, [inputValue]);

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <h1>Mude a cor digitando!</h1>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Digite algo..."
      />
    </div>
  );
}

export default App;
