import React, { createContext, useState } from "react";
export const MainContext = createContext();


function MainProvider({ children }) {
  const [basket, setBasket] = useState([]);

  function addBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index !== -1) {
      setBasket([...basket]);
      basket[index].count++;
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  }
  function decreaseBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    const element = basket[index];
    if (element.count > 1) {
      basket[index].count--;
      setBasket([...basket]);
    }
  }

  function removeBasket(item) {
    setBasket(basket.filter(x=>x._id!==item._id))
  }
  return (
    <>
      <MainContext.Provider value={{ addBasket, basket, decreaseBasket , removeBasket}}>
        {children}
      </MainContext.Provider>
    </>
  );
}

export default MainProvider;
