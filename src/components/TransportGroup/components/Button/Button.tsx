import React from "react";
import classNames from "classnames";
import "src/components/TransportGroup/components/Button/Button.scss";

export default ({
  children,
  white,
  black,
  onMouseOver,
  onMouseOut
}: {
  children: string;
  white?: boolean;
  black?: boolean;
  onMouseOver?: any;
  onMouseOut?: any;
}): JSX.Element => {
  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={classNames({
        Button: true,
        White: white,
        Black: black
      })}
    >
      {children}
    </div>
  );
};
