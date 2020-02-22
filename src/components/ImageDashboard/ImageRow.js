import React from "react";
import { w, m } from "../../constants";
import Image from "./Image";
import "./ImageRow.scss";

export default ({ group }) => {
  if (group.length === 1) return <Image image={group[0]} />;
  let imagesToDisplay = [];
  const scaleToSameSize = () => {
    const smallestHeight = Math.min.apply(
      null,
      group.map(item => item.height)
    );
    const scaledToSameSize = group.map(image => {
      const scale = smallestHeight / image.height;
      return {
        scaledWidth: image.width * scale,
        scaledHeight: image.height * scale
      };
    });
    const finalScale =
      (w - m * (group.length - 1)) /
      scaledToSameSize.map(val => val.scaledWidth).reduce((a, b) => a + b);
    imagesToDisplay = scaledToSameSize.map(image => ({
      width: Math.round(image.scaledWidth * finalScale),
      height: Math.round(image.scaledHeight * finalScale)
    }));
    return imagesToDisplay;
  };
  return (
    <span className="ImageRow">
      {scaleToSameSize().map((image, i) => (
        <Image key={i} image={image} />
      ))}
    </span>
  );
};
