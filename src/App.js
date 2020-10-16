import React, { useState, useEffect, useCallback } from 'react';

import TodoList from './Components/TodoList';
import AddNewTodoForm from './Components/AddNewTodoForm';

const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onNewTodoChange = useCallback((event) => {
    setNewTodo(event.target.value);
  }, []);

  const formSubmitted = useCallback(
    (event) => {
      event.preventDefault();
      if (!newTodo.trim()) return;
      setTodos([
        {
          // id: todos.length ? todos[0].id + 1 : 1,
          id: Math.random().toString(36).substr(2, 9),
          content: newTodo,
          priority: 2,
          done: false,
          dateCreated: Date.now(),
          dateModified: Date.now(),
        },
        ...todos,
      ]);
      setNewTodo('');
    },
    [newTodo, todos]
  );

  const onUpdateTodo = useCallback(
    (todo, index) => (event) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1, {
        ...todo,
        done: !todo.done,
        dateModified: Date.now(),
      });
      setTodos(newTodos);
    },
    [todos]
  );

  const onDeleteTodo = useCallback(
    (todo, index) => (event) => {
      setTodos(todos.filter(otherTodo => otherTodo !== todo));
    },
    [todos]
  );

  useEffect(() => {
    console.log('todos', todos);
  }, [todos]);

  return (
    <div>
      <AddNewTodoForm
        onFormSubmit={formSubmitted}
        onTodoChange={onNewTodoChange}
        text={newTodo}
      />
      <TodoList todos={todos} onUpdate={onUpdateTodo} onDelete={onDeleteTodo} />
    </div>
  );
};

export default App;
