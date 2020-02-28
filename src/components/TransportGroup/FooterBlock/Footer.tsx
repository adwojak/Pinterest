import React from "react";
import "src/components/TransportGroup/FooterBlock/Footer.scss";

export default (): JSX.Element => {
  return (
    <footer className="Footer">
      <div className="FooterNavi">
        <div className="FooterLogo"></div>
        <div className="Company">
          <h3>FIRMA</h3>
          <p>O nas</p>
          <p>Flota</p>
          <p>Certyfikaty i pozwolenia</p>
          <p>Referencje</p>
          <p>Technologie IT</p>
          <p>Odpowiedzialny biznes</p>
        </div>
        <div className="Services">
          <h3>USŁUGI</h3>
          <p>Transport międzynarodowy</p>
          <p>Transport krajowy</p>
          <p>Transport chłodniczy</p>
          <p>Transport ponadgabarytowy</p>
          <p>Logistyka kontraktowa</p>
          <p>Przeprawy promowe</p>
          <p>Kierunki transportu</p>
        </div>
        <div className="Clients">
          <h3>KLIENCI</h3>
          <h3>PRZEWOŹNICY</h3>
          <h3>AKTUALNOŚCI</h3>
          <h3>KONTAKT</h3>
          <p>Centrum operacyjne</p>
          <p>Nasze oddziały</p>
        </div>
        <div className="Career">
          <h3>KARIERA</h3>
          <p>Oferty pracy</p>
          <p>Praktyki</p>
          <p>Nasza kultura organizacyjna</p>
          <p>MAPA</p>
        </div>
        <div className="Contact">
          <h3>GRUPA TRANSPORTOWA SP. Z O.O.</h3>
          <p>Centrala Piotrków Trybunalski</p>
          <p>ul. Łódzka 30AB</p>
          <p>97-300 Piotrków Trybunalski</p>
          <br />
          <p>hello@grupatranspotowa.pl</p>
          <p>+48 555 333 222</p>
          <p>+48 777 666 555</p>
        </div>
      </div>
      <div className="FooterBottom">
        <div className="FooterText">
          <p>Polityka prywatności | Polityka Cookies</p>
          <p>Created with passion: agencja interaktywna VisualMedia</p>
        </div>
      </div>
    </footer>
  );
};
