import React from "react";
import ImageDashboard from "src/components/ImageDashboard/ImageDashboard";
import Content from "src/components/Content/Content";
import Gallery from "src/components/Gallery/Gallery";
import Question from "src/components/QuestionBox/Question";
import "src/components/MainBlock/MainBlock.scss";

export default (): JSX.Element => {
  return (
    <div className="MainBlock">
      <Content />
      <ImageDashboard />
      <Question />
      <Gallery />
    </div>
  );
};
