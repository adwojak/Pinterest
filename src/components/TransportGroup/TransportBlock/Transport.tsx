import React from "react";
import Button from "src/components/TransportGroup/components/Button/Button";
import "src/components/TransportGroup/TransportBlock/Transport.scss";

export default (): JSX.Element => {
  return (
    <div className="Transport">
      <div className="TransportImage"></div>
      <div className="TransportText">
        <div className="TextWrapper">
          <h3>DOCENIANI PRZEZ KLIENTÓW Z WIELU BRANŻ</h3>
          <h2>GRUPA TRANSPORTOWA</h2>
          <div className="Paragraphs">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <Button>WIĘCEJ O FIRMIE GRUPA TRANSPORTOWA</Button>
        </div>
      </div>
    </div>
  );
};
