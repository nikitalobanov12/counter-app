'use client';

import { useState, useEffect } from 'react';
import CounterDisplay from '@/components/CounterDisplay';
import IncrementButton from '@/components/IncrementButton';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch initial count from the database
    fetch('/api/increment')
      .then(res => res.json())
      .then(data => setCount(data.value))
      .catch(error => console.error('Error fetching initial count:', error));
  }, []);

  const incrementCounter = async () => {
    try {
      const res = await fetch('/api/increment', { method: 'POST' });
      if (!res.ok) throw new Error('Failed to increment counter');
      const data = await res.json();
      setCount(data.value);
    } catch (error) {
      console.error('Error incrementing counter:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <CounterDisplay count={count} />
        <IncrementButton onIncrement={incrementCounter} />
      </main>
    </div>
  );
}