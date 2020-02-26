import React from "react";
import Heading from "src/components/TransportGroup/HeadingBlock/Heading";
import Logistics from "src/components/TransportGroup/LogisticsBlock/Logistics";
import Transport from "src/components/TransportGroup/TransportBlock/Transport";
import News from "src/components/TransportGroup/NewsBlock/News";
import Footer from "src/components/TransportGroup/FooterBlock/Footer";
import "src/components/TransportGroup/TransportGroup.scss";

export default (): JSX.Element => {
  return (
    <div>
      <Heading />
      <Logistics />
      <Transport />
      <News />
      <Footer />
    </div>
  );
};
