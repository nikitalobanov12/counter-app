import { useState, useEffect } from 'react';

export default function CounterDisplay() {
  const [count, setCount] = useState<number | null>(null);

  const fetchCount = async () => {
    try {
      const response = await fetch('/api/increment');
      if (!response.ok) {
        throw new Error('Failed to fetch count');
      }
      const data = await response.json();
      setCount(data.value);
    } catch (error) {
      console.error('Error fetching count:', error);
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div>
      <h2 className='text-4xl font-bold'>Current Count: {count !== null ? count : 'Loading...'}</h2>
      <button onClick={fetchCount} className="bg-sky-200 hover:bg-sky-800 transition-all active:scale-75 text-black hover:text-white text-2xl font-semibold py-2 px-4 rounded-lg mt-8">
        Increment
      </button>
    </div>
  );
}
