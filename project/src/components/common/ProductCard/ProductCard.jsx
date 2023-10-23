import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="product__container">
      <a href="">
        <img className="item__img" src={item.image} alt="" />
      </a>
      <h4 className="item__name">{item.name} </h4>
      <p className="item__desc">{item.member} </p>
      <Link to={`/itemDetail/${item.id}`}>
        <button className="item__btn">
          <h5>Ver mas</h5>
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
