import React, { useState, useMemo } from 'react';
import ReactMemo from './ReactMemo';

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, 'New Todo']);
  };

  const expensiveValue = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 1e7; i++) total += 1; // Reduced for faster demo
    return total;
  }, []);

  return (
    <div className="app" data-testid="app-root">
      <h1>React.useMemo</h1>

      <h2>My todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button data-testid="add-todo-btn" onClick={addTodo}>Add Todo</button>

      <div>
        Count: {count}
        <button data-testid="increment-btn" onClick={() => setCount(count + 1)}>+</button>
      </div>

      <h2>Expensive Calculation</h2>
      <p data-testid="expensive-result">{expensiveValue}</p>

      <hr />

      <ReactMemo /> {/* Make sure this is included */}
    </div>
  );
}

export default App;


