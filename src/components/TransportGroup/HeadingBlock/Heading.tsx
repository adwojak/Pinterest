import React, { useState } from "react";
import classNames from "classnames";
import Button from "src/components/TransportGroup/components/Button/Button";
import "src/components/TransportGroup/HeadingBlock/Heading.scss";

export default (): JSX.Element => {
  const [isMouseOver, setMouseOver] = useState(false);

  return (
    <div className="Heading">
      <div
        className={classNames({
          HeadingImage: true,
          ApplyGrayscale: isMouseOver
        })}
      />
      <div className="Logo"></div>
      <span className="Menu">
        <span className="Language">
          PL<i className="ArrowDown"></i>
        </span>
        <span className="Search">&#128269;</span>
        <span className="Burger">
          <span className="BurgerButton">&#9776;</span>
          <p>MENU</p>
        </span>
      </span>
      <span className="SendMessage">
        <p>WYŚLIJ WIADOMOŚC</p>
        <span className="Message"></span>
      </span>
      <span className="Points">
        <span className="Point"></span>
        <span className="Point"></span>
        <span className="Point Selected"></span>
      </span>
      <div className="CenterBlock">
        <h3>COMMON</h3>
        <span className="OrangeBrush"></span>
        <h4>ROAD TO SUCCESS</h4>
        <p>Rozwiązania logistyczne szyte na miarę Twojego biznesu</p>
        <span className="Bullets">
          <Button
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            white
          >
            Kierunki transportu
          </Button>
          <Button
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            white
          >
            Logistyka kontraktowa
          </Button>
        </span>
      </div>
    </div>
  );
};
