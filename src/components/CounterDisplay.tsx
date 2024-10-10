import { useState, useEffect } from 'react';

export default function CounterDisplay() {
  // State to store the count value, initially set to null
  const [count, setCount] = useState<number | null>(null);

  // Function to fetch and update the count from the API
  const fetchCount = async () => {
    try {
      // Send a request to the increment API endpoint
      const response = await fetch('/api/increment');
      if (!response.ok) {
        throw new Error('Failed to fetch count');
      }
      // Parse the JSON response
      const data = await response.json();
      // Update the count state with the new value
      setCount(data.value);
    } catch (error) {
      console.error('Error fetching count:', error);
    }
  };

  // Effect hook to fetch the count when the component mounts
  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div>
      {/* Display the current count or 'Loading...' if count is null */}
      <h2 className='text-4xl font-bold'>Current Count: {count !== null ? count : 'Loading...'}</h2>
      {/* Button to manually trigger count increment */}
      <button onClick={fetchCount} className="bg-sky-200 hover:bg-sky-800 transition-all active:scale-75 text-black hover:text-white text-2xl font-semibold py-2 px-4 rounded-lg mt-8">
        Increment
      </button>
    </div>
  );
}
