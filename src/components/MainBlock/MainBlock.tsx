import React from "react";
import ImageDashboard from "src/components/ImageDashboard/ImageDashboard";
import Content from "src/components/Content/Content";
import "src/components/MainBlock/MainBlock.scss";

export default (): JSX.Element => {
  return (
    <div className="MainBlock">
      <Content />
      <ImageDashboard />
      <div
        style={{ backgroundColor: "blue", width: "100%", height: "400px" }}
      ></div>
    </div>
  );
};
