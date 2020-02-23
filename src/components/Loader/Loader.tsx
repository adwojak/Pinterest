import * as React from "react";
import "src/components/Loader/Loader.scss";

export default (): JSX.Element => {
  return (
    <div className="LoaderWrapper">
      <div className="Loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
