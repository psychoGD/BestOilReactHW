import React from 'react';
import './App.css';
import { useTotalPrice } from './TotalPriceContext'; // Import useTotalPrice from your TotalPriceContext

const TotalPriceOfAllComponent = () => {
  const { totalPriceOfAll } = useTotalPrice(); // Get the global data using the hook

function handleButtonClick(){
    alert("Total Price of All: $"+totalPriceOfAll.toFixed(2))
}
  
  // Now you can use `totalPriceOfAll` in your component
  return (
    <div>
      <button onClick={handleButtonClick} className='calculate-button'>Calculate All Total Price</button>
      {/* Other component content */}
    </div>
  );
};

export default TotalPriceOfAllComponent;
