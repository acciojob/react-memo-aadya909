import React, { useState, useMemo } from 'react';

function expensiveCalculation(num) {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {} // simulate heavy task
  return num;
}

function UseMemo() {
  const [number] = useState(10); // could be dynamic
  const result = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <div>{result}</div>
    </div>
  );
}

export default UseMemo
