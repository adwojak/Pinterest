import React from "react";
import "src/components/TransportGroup/components/SquareImage/SquareImage.scss";

export default ({
  children,
  image
}: {
  children: string;
  image: string;
}): JSX.Element => {
  return (
    <div className={`SquareImage ${image}`}>
      <p className="Title">
        <span className="Dash">-</span>
        {children}
      </p>
      <p className="OverlayText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};
