import React, { useState, useEffect } from "react";
import ImageRow from "./ImageRow";
import { imagePlaceholders, w } from "../../constants";
import "./ImageDashboard.scss";

export default () => {
  const [displayPhotos, setDisplayPhotos] = useState(true);
  const groupImages = () => {
    const groups = [];
    let singleGroup = [];
    let summary = 0;
    imagePlaceholders.map((image, i) => {
      summary += image.width;
      singleGroup.push(image);
      if (summary >= w) {
        groups.push(singleGroup);
        singleGroup = [];
        summary = 0;
      } else {
        if (i === imagePlaceholders.length - 1) {
          groups.push([image]);
        }
      }
      return null;
    });

    return groups;
  };

  useEffect(() => {
    !displayPhotos && reloadImages();
  }, [displayPhotos]);

  const reloadImages = () => {
    setDisplayPhotos(!displayPhotos);
  };

  return (
    <div className="ImageDashboardWrapper">
      <div className="ImageDashboardSide">
        <div className="Text">
          <p className="Script">
            <span>Full size</span>
          </p>
          <p className="Shadow text1">SCALING</p>
          <p className="Shadow text2">IMG</p>
          <p className="Shadow text3">FOR YOU</p>
          <p className="Shadow text3">VISUAL MEDIA</p>
          <p className="Script Clickable">
            <span onClick={reloadImages}>Reload images</span>
          </p>
        </div>
      </div>
      <div className="ImageDashboard" style={{ width: w }}>
        {displayPhotos &&
          groupImages().map((group, i) => <ImageRow key={i} group={group} />)}
      </div>
    </div>
  );
};
