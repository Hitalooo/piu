import { useState, useEffect } from "react";

function AlbunsUserID() {
  const [userId, setUserId] = useState(1); 
  const [albuns, setAlbuns] = useState([]);
  const [inputValue, setInputValue] = useState(""); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        const filtrados = data.filter((album) => album.userId === Number(userId));
        setAlbuns(filtrados);
      })
  }, [userId]);

  const buscarAlbuns = () => {
    const valor = Number(inputValue);
    if (valor >= 1 && valor <= 10) {
      setUserId(valor);
    } else {
      alert("escolha um número de 1 a 10");
    }
  };

  return (
    <div>
      <h2>Álbuns por User ID</h2>
      <input
        type="number"
        min="1"
        max="10"
        placeholder="digite um userid (1 a 10)"
        value={inputValue}
        onInput={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={buscarAlbuns}>Buscar Álbuns</button>

      <ul>
        {albuns.map((album) => (
          <li key={album.id}>
            <strong>{album.title}</strong> (ID: {album.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbunsUserID;