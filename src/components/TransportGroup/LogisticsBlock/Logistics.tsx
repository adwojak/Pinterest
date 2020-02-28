import React from "react";
import SquareImage from "src/components/TransportGroup/components/SquareImage/SquareImage";
import Button from "src/components/TransportGroup/components/Button/Button";
import "src/components/TransportGroup/LogisticsBlock/Logistics.scss";

export default (): JSX.Element => {
  return (
    <div className="Logistics">
      <h3>TRANSPORT KRAJOWY I MIĘDZYNARODOWY, SPEDYCJA, LOGISTYKA</h3>
      <h2>KOMPLEKSOWE USŁUGI LOGISTYCZNE</h2>
      <div className="Images">
        <SquareImage image="World">TRANSPORT MIĘDZYNARODOWY</SquareImage>
        <SquareImage image="Truck">TRANSPORT KRAJOWY</SquareImage>
        <SquareImage image="Plants">TRANSPORT CHŁODNICZY</SquareImage>
        <SquareImage image="Human">LOGISTYKA KONTRAKTOWA</SquareImage>
      </div>
      <Button>ZOBACZ WSZYSTKIE USŁUGI GRUPY TRANSPORTOWEJ</Button>
    </div>
  );
};
