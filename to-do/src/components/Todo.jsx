import React from 'react'

const Todo = ({ todo,removeTodo, completeTodo }) => {
  // Chamei o componente Todo, que recebe as props(já desestruturada, pois estão tudo entre chaves) todo(obj que tem as informações das tarefas), removeTodo e completeTodo

  return (
    <div 
      className="todo" 
      style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        {/* vai deixar todo o texto da tarefa tachado quando ela estiver sido completada */}
        <div className="content">
            <p>{todo.text}</p> 
            <p className="category">
            ({todo.category})
            </p>
        </div>
        <div>
            <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
            <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
        </div>
    </div>
  );
};

export default Todo;
