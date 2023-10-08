import React, { useState } from 'react';
import TodoList from '../src/components/TodoList';
import AddTodo from '../src/components/AddTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  }

  const handleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} handleComplete={handleComplete} handleDelete={handleDelete} />
    </div>
  );
}

export default App;


