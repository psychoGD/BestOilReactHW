import React, { useState } from "react";
import { Fuels } from "./Fuels";
import "./App.css";
import { useTotalPrice } from "./TotalPriceContext";

const FuelPricingForm = () => {
  const [selectedFuel, setSelectedFuel] = useState("");
  const [quantity, setQuantity] = useState("");
  const [priceOfFuel, setPriceOfFuel] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { setTotalPriceOfAll } = useTotalPrice();

  const handleFuelChange = (event) => {
    const selectedFuelType = event.target.value;
    setSelectedFuel(selectedFuelType);
    const selectedFuelObj = Fuels.find((fuel) => fuel.type === selectedFuelType);
    if (selectedFuelObj) {
      setPriceOfFuel(selectedFuelObj.price);
    } else {
      setPriceOfFuel(0);
    }
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCalculateTotalPrice = () => {
    const selectedFuelObj = Fuels.find((fuel) => fuel.type === selectedFuel);
    if (selectedFuelObj && quantity !== "") {
      const pricePerLiter = selectedFuelObj.price;
      const total = pricePerLiter * quantity;
      setTotalPrice(total.toFixed(2));
      setTotalPriceOfAll(
        (prevTotalPrice) => prevTotalPrice + parseFloat(total.toFixed(2))
      );
    } else {
      setTotalPrice(0);
    }
  };

  return (
    <div className="fuel-pricing-form">
      <div className="header">
        <h1>Get Fueled Up!</h1>
        <p>Select your fuel type and quantity below.</p>
      </div>
      <div className="form">
        <div className="input-group">
          <label htmlFor="fuelSelect">Fuel Type</label>
          <select
            id="fuelSelect"
            value={selectedFuel}
            onChange={handleFuelChange}
          >
            <option value="">Select Fuel</option>
            {Fuels.map((f) => (
              <option key={f.id} value={f.type}>
                {f.type}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="quantityInput">Price Of Fuel</label>
          <input
            disabled
            type="number"
            id="quantityInput"
            value={priceOfFuel}
          />
        </div>
        <div className="input-group">
          <label htmlFor="quantityInput">Quantity (liters)</label>
          <input
            type="number"
            id="quantityInput"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <button className="calculate-button" onClick={handleCalculateTotalPrice}>
          Calculate Total Price
        </button>
      </div>
      <div className="total-price">
        <p>Total Price Of Fuel: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default FuelPricingForm;
