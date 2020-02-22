import React from "react";
import ImageRow from "./ImageRow";
import { imagePlaceholders, w } from "../../constants";
import "./ImageDashboard.scss";

export default () => {
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

  return (
    <div className="ImageDashboard" style={{ width: w }}>
      {groupImages().map((group, i) => (
        <ImageRow key={i} group={group} />
      ))}
    </div>
  );
};
