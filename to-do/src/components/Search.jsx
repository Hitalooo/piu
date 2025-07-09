const Search = ({   search, setSearch   }) => {
  return (
    <div className="search">
      <h2>Pesquisar:</h2>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar uma tarefa..." />
      {/* capta o que o usuário insere e atualiza o estado do input */}
    </div>
  )
}

export default Search
