import React from "react";
import "src/components/TransportGroup/components/NewsBox/NewsBox.scss";

export default ({
  image,
  date,
  title
}: {
  image: string;
  date: string;
  title: string;
}): JSX.Element => {
  return (
    <div className="NewsBox">
      <div className={`Image ${image}`}></div>
      <div className="Date">{date}</div>
      <div className="TextContent">
        <h3>{title}</h3>
        <p className="Description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};
