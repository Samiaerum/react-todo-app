import React from 'react';

const TodoItem = ({ todo, handleComplete, handleDelete }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={() => handleComplete(todo.id)} />
      <span>{todo.text}</span>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
