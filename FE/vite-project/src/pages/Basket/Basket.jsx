import React, { useContext } from "react";
import { MainContext } from "../../context/MainProvider";

function Basket() {
  const { addBasket, basket, decreaseBasket , removeBasket} = useContext(MainContext);
  return (
    <>
      {basket.map((x) => (
        <div key={x._id}>
          <img src={x.image} alt="" />
          <h1>{x.name}</h1>
          <p>{x.price}</p>
          <button onClick={()=>removeBasket(x)}>DELETE</button>
          <button onClick={()=>decreaseBasket(x)}>-</button>
          <p>Count:{x.count}</p>
          <button  onClick={()=>addBasket(x)}>+</button>
        </div>
      ))}
    </>
  );
}

export default Basket;
