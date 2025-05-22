import React, { useState, useCallback } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos(prev => [...prev, 'New todo']);
  };

  const increment = () => {
    setCounter(prev => prev + 1);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addCustomTodo = () => {
    if (input.length > 5) {
      setTodos(prev => [...prev, input]);
      setInput('');
    } else {
      alert('Todo must be more than 5 characters.');
    }
  };

  const memoizedAddTodo = useCallback(addTodo, []);

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>Todo App with useMemo & React.memo</h1>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={memoizedAddTodo}>Add Todo</button>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter custom todo"
        />
        <button onClick={addCustomTodo}>Submit</button>
      </div>

      <ReactMemo todos={todos} />
      <UseMemo counter={counter} />

      <button onClick={increment}>Increment Counter</button>
    </div>
  );
};

export default App;
