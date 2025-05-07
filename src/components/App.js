import React, { useState, useMemo } from 'react';
import UseMemoExample from './UseMemo';
import ReactMemoExample from './ReactMemo';

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  return (
    <div>
      <h1>React.useMemo</h1>
      <h2>My todos</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>

      <div style={{ margin: "10px 0" }}>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <UseMemoExample />
      <hr />
      <ReactMemoExample />
    </div>
  );
}

export default App;
