import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";
const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div className="item__container">
      <img className="item__image" src={productSelected.image} alt="" />
      <section className="item__section">
        <h2 className="item__title">{productSelected.name}</h2>
        <p>{productSelected.description} </p>
        <div className="counter">
          <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
        </div>
      </section>
    </div>
  );
};

export default ItemDetail;
