import React from "react";
import BandContainer from "../BandContainer/BandContainer";
import Cart from "../Cart/Cart";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div className="container">
      <BandContainer></BandContainer>
      <Cart></Cart>
    </div>
  );
};

export default DashBoard;
