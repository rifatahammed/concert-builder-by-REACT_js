import React from "react";
import "./Band.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Band = (props) => {
  const { img, name, genre, cost, handler } = props;
  return (
    <div className="band">
      <img className="band-img" src={img} alt="" />
      <h3>{name}</h3>
      <h4>{genre}</h4>
      <h5>{cost}</h5>
      <button
        onClick={() => {
          handler(props);
        }}
      >
        Book them
      </button>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};

export default Band;
