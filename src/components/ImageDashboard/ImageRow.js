import React, { Fragment } from "react";
import { placeholderUrl, w, m } from "../../constants";
import "./ImageRow.scss";

export default ({ group }) => {
  if (group.length == 1) return <Image image={group[0]} />;
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
      {scaleToSameSize().map(image => (
        <Image image={image} />
      ))}
    </span>
  );
};

const Image = ({ image: { width, height } }) => {
  const url = `${placeholderUrl}${width}x${height}`;

  return <img style={{ marginBottom: m }} src={url} alt={url} />;
};
