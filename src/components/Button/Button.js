import * as React from "react";
import "./Button.scss";

export default ({ children, ...props }) => {
  return (
    <div className="ButtonWrapper">
      <button className="Button" {...props}>
        {children}
      </button>
    </div>
  );
};
