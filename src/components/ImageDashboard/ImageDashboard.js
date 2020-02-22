import React, { useState, useEffect } from "react";
import ImageRow from "./ImageRow";
import Button from "../Button/Button";
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
    <div className="ImageDashboard" style={{ width: w }}>
      <Button onClick={reloadImages}>Reload images</Button>
      {displayPhotos &&
        groupImages().map((group, i) => <ImageRow key={i} group={group} />)}
    </div>
  );
};
