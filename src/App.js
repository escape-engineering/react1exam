import React, { useState } from 'react';
import './App.css';

function Todos({ todo }) {
  return <div className="todos">{todo.title}</div>;
}

function App() {
  const [todos, setTodos] = useState([
    { title: '리액트를 배워봅시다.', id: 0 },
  ]);

  const [title, setTitle] = useState('');

  const addTitleHandler = () => {
    const lastid = todos[todos.length - 1].id;
    const newTodo = { title: title, id: lastid + 1 };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="layout">
      <div className="header">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={addTitleHandler}>추가하기</button>
        </div>
      </div>
      <div className="header">
        <h1>Todo List</h1>
      </div>
      <div className="todo-list">
        {todos.map((todo) => {
          return <Todos todo={todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
