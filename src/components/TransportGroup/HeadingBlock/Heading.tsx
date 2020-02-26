import React, { Fragment } from "react";
import logo from "src/static/images/logo.png";
import "src/components/TransportGroup/HeadingBlock/Heading.scss";

export default (): JSX.Element => {
  return (
    <div className="HeadingImage">
      <img src={logo} alt="logo" className="Logo" />
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
          <span className="Bullet">Kierunki transportu</span>
          <span className="Bullet">Logistyka kontraktowa</span>
        </span>
      </div>

      {/* <div className="Brush"></div> */}
      {/* <img src={whiteBrush} alt="whiteBrush" /> */}
    </div>
  );
};
