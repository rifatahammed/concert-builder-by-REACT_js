import React, { useState } from "react";
import Band from "../Band/Band";
import { bandInfo } from "../DummyData/DummyData";
import "./BandContainer.css";

const BandContainer = () => {
  const [cart, setCart] = useState([]);
  //   const [cost, setCost] = useState(0);
  let cost = 0;
  cart.map((band) => (cost = cost + band.cost));
  const bandHandler = (band) => {
    const newCart = [...cart, band];
    setCart(newCart);
  };
  return (
    <div className="container">
      <div className="band-container">
        {bandInfo.map((band) => (
          <Band
            img={band.img}
            name={band.name}
            genre={band.genre}
            cost={band.cost}
            handler={bandHandler}
          ></Band>
        ))}
      </div>
      <div className="cart">
        <h1>Cart</h1>
        <h4>Total Bands: {cart.length}</h4>
        <h5>Total Cost:{cost}</h5>
        <h6>bands:</h6>
        {cart.map((band) => (
          <h6>{band.name} </h6>
        ))}
      </div>
    </div>
  );
};

export default BandContainer;
