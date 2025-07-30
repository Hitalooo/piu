import { useEffect, useState } from 'react';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    // Faz o fetch dos dados da API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        // Exemplo de filtro: nomes com a letra "C"
        const filtrados = data.filter((user) => user.name.includes('C'));
        setFiltered(filtrados);
      })
      .catch((error) => console.error('Erro ao buscar usuários:', error));
  }, []);

  return (
    <div className="user-container">
      <h2>Usuários com a letra "C"</h2>
      <ul>
        {filtered.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
