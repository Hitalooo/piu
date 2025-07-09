import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    // String para armazenar o título da tarefa, iniciando vazia
    const [category, setCategory] = useState("");
    // String para armazenar a categoria da tarefa, iniciando vazia

    const handleSubmit = (e) => {
        e.preventDefault();
        //previne o comportamento padrão do formulário, que é recarregar a página
        if (!value || !category) return;
        // Se o valor do título ou da categoria estiver vazio, não faz nada
        addTodo(value, category);
        //
        setValue("");
        setCategory("");
        // Limpa os campos após o envio
    };
  return (
    <div className="todo-form">
        {/* Aqui estará os campos para preencher as tarefas */}
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            {/* onSubmit chama a função handleSubmit quando o formulário é enviado */}
            <input type="text" placeholder='Digite o título' value={value} onChange={(e) => setValue(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                {/* Está "invalidada", pois não se conswgue enviar o formulário sem escolher uma opção abaixo" */}
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm;
