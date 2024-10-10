import React from 'react';

interface CounterDisplayProps {
  count: number;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => {
  return (
    <h1 className="text-6xl font-bold mb-8">
      Counter: {count}
    </h1>
  );
};

export default CounterDisplay;
