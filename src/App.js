import React from "react";
import FuelPricingForm from "./FuelPricingForm";
import FoodSection from "./FoodSection";
import TotalPriceOfAllComponent from "./TotalPriceOfAllComponent";
function App() {
  return (
    <div style={{display:"flex"}}>
      <div style={{textAlign:"center",margin:"40px"}}>
        <TotalPriceOfAllComponent></TotalPriceOfAllComponent>
      </div>
      <div style={{ width: "50%", float: "left" }}>
        <FuelPricingForm></FuelPricingForm>
      </div>

      <div style={{ width: "50%", float: "right" }}>
        <FoodSection></FoodSection>
      </div>
    </div>
  );
}

export default App;
