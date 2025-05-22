import React from 'react';

const TodoList = ({ todos }) => {
  console.log('Rendering TodoList');
  return (
    <div>
      <h3>Todo List:</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoList);

