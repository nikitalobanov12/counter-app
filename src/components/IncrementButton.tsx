import React from 'react';

interface IncrementButtonProps {
  onIncrement: () => void;
}

const IncrementButton: React.FC<IncrementButtonProps> = ({ onIncrement }) => {
  return (
    <button 
      onClick={onIncrement}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Increment
    </button>
  );
};

export default IncrementButton;
