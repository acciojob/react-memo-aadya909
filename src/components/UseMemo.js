import React, { useMemo } from 'react';

const UseMemo = ({ counter }) => {
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num;
    }
    return result;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(counter), [counter]);

  return (
    <div style={{ margin: '1rem 0' }}>
      <h3>Expensive Calculation Result:</h3>
      <p>{memoizedValue}</p>
    </div>
  );
};

export default UseMemo;

