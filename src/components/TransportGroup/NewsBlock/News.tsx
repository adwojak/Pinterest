import React from "react";
import NewsBox from "src/components/TransportGroup/components/NewsBox/NewsBox";
import Button from "src/components/TransportGroup/components/Button/Button";
import "src/components/TransportGroup/NewsBlock/News.scss";

export default (): JSX.Element => {
  return (
    <div className="News">
      <h2 className="NewsTitle">AKTUALNOŚCI</h2>
      <div className="NewsArea">
        <span className="Arrow ArrowLeft"></span>
        <NewsBox image="Pwa" date="06.11" title="Nowy serwis internetowy" />
        <NewsBox
          image="Handball"
          date="04.11"
          title="Grupa Transportowa sponsorem klubu"
        />
        <NewsBox
          image="Trucks"
          date="22.01"
          title="Zaczynamy nowy rozdział..."
        />
        <span className="Arrow ArrowRight"></span>
      </div>
      <Button>ZOBACZ INNE AKTUALNOŚCI</Button>
    </div>
  );
};
