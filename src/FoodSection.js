import React, { useState } from "react";
import "./FoodSection.css"; // Import your CSS file
import { Foods } from "./Foods";
import { useTotalPrice } from "./TotalPriceContext";

const FoodSection = () => {
  const [foods, setFoods] = useState(Foods);
  const [totalPrice, setTotalPrice] = useState(0);
  const { setTotalPriceOfAll } = useTotalPrice();

  const handleCountChange = (foodId, newCount) => {
    const updatedFoods = foods.map((food) =>
      food.id === foodId ? { ...food, count: newCount } : food
    );
    setFoods(updatedFoods);
  };

  const handleCalculateTotalPrice = () => {
    const total = foods.reduce((acc, food) => acc + food.price * food.count, 0);
    setTotalPrice(total.toFixed(2));
    setTotalPriceOfAll(
      (prevTotalPrice) => prevTotalPrice + parseFloat(total.toFixed(2))
    );
  };

  return (
    <div className="food-section">
      <h2>Food Menu</h2>
      <div className="food-list">
        {foods.map((food) => (
          <div key={food.id} className="food-item">
            <div className="food-info">
              <span className="food-name">{food.name}</span>
              <span className="food-price">${food.price.toFixed(2)}</span>
            </div>
            <div className="food-counter">
              <input
                type="number"
                id={`countInput-${food.id}`}
                value={food.count}
                onChange={(e) =>
                  handleCountChange(food.id, parseInt(e.target.value))
                }
              />
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <button className="calculate-button" onClick={handleCalculateTotalPrice}>
        Calculate Total Price
      </button>
      <div className="total-price">
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default FoodSection;
