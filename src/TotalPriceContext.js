// TotalPriceContext.js
import React, { createContext, useContext, useState } from 'react';

const TotalPriceContext = createContext();

export const TotalPriceProvider = ({ children }) => {
  const [totalPriceOfAll, setTotalPriceOfAll] = useState(0);

  return (
    <TotalPriceContext.Provider value={{ totalPriceOfAll, setTotalPriceOfAll }}>
      {children}
    </TotalPriceContext.Provider>
  );
};

export const useTotalPrice = () => useContext(TotalPriceContext);