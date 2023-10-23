import React from "react";

const Counter = ({ sumar, onAdd, restar, contador }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button className="btn__counter" onClick={restar}>
        -
      </button>
      <span> {contador} </span>
      <button className="btn__counter" onClick={sumar}>
        +
      </button>
      <button className="counter__btn" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
