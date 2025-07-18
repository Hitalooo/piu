const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
            <p>Status:</p>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                {/* Vai filtrar o Array de objetos e retornar apenas os objetos que têm o status selecionado */}
                <option value="All">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Incomplete">Incompletas</option>
            </select>
        </div>
        <div>
            <p>Ordem Alfabética: </p>
            <button className="filter-button" onClick={() => setSort("Asc")}>Asc</button>
            <button className="filter-button" onClick={() => setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  )
}

export default Filter;
