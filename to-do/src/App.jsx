import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import "./App.css";


function App() {
  const [todos, setTodos] = useState([
    // Quase que uma "variável global"/lista do Python,  que consegue se mutar, para armazenar as tarefas
    // poderia ser substituído por um banco de dados ou API mas como não temos, está em memória mesmo
    // o setTodos serve para atualizar o estado, e o useState para inicializar o estado
    // Não usei variável pois ela não renderiza novamente o componente quando é atualizada
    {
      id:1,
      text: "Criar tal funcionalidade no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")
  // useState para armazenar o texto pesquisado, o filtro e a ordenação
  const [darkMode, setDarkMode] = useState(false);
  // efeito para aplicar o modo escuro/claro ao carregar
  useEffect(() => {
  if (darkMode) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }
}, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addTodo = (text, category) => {
    // Função que adiciona a To-do à lista de tarefas
    // Recebe o texto e a categoria como parâmetros
    const newTodos = [
      ...todos, // aqui ele recebe o Array de objetos atuais e adiciona o novo objeto
      {
        id: Math.floor(Math.random() * 10000000000000), // vai gerar um id aleatório para o novo objeto
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos); // o React vai renderizar novamente o componente com o novo estado
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    // vai filtrar o array de objetos e remover o objeto que tem o id igual ao id passado como parâmetro, sem modificar a variável original
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    // diferente do filter, o map percorre o Array de objetos e modifica o objeto que tem o id igual ao id passado como parâmetro, invertendo o valor da propriedade isCompleted
    setTodos(newTodos);
  };

  return (
    <div className="app">
      {/* div "pai" do projeto */}
      <button className="theme-toggle" onClick={toggleDarkMode}>
      {darkMode ? '☀️' : '🌙'}
      </button>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      {/* Chamei o componente Search */}
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      {/* Chamei o componente dos Filtros */}
      <div className="todo-list">
        {/* Vai percorrer o Array de objetos e vai exibir cada tarefa lá*/}
        {todos
        .filter((todo) => 
          filter === "All" 
          ? true 
          : filter === "Completed" 
          ? todo.isCompleted 
          : !todo.isCompleted
        )
        .filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        // Vai filtrar o array de objetos e retornar apenas os objetos que há o texto pesquisado
        // toLocaleLowerCase() serve para deixar tudo em minúsculo, para não diferenciar maiúsculas de minúsculas na pesquisa
        // se o texto da tarefa contiver o texto pesquisado, ele será incluído no novo array filtrado e será exibido
      )
      .sort((a, b) => 
        sort === "Asc" 
          ? a.text.localeCompare(b.text) 
          : b.text.localeCompare(a.text))
        // Vai ordenar o Array de objetos em ordem alfabética, se o sort for "Asc" (crescente) ou "Desc" (decrescente)
      .map((todo) => (
        // Função map do JS percorre o Array de objetos e retorna um novo Array com os componentes Todo
        <Todo 
        key={todo.id} 
        // React exige que cada item do componente que se repete tenha uma chave que não se repita(key) que é uma prop, então usei o id como chave
        todo={todo} 
        removeTodo={removeTodo} 
        completeTodo={completeTodo} />
      ))}
      {/* Aqui é onde o componente Todo é chamado, passando as props */}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
