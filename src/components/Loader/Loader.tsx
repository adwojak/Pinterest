import * as React from "react";
import classNames from "classnames";
import "src/components/Loader/Loader.scss";

export default ({ loadingOffset }: { loadingOffset: boolean }): JSX.Element => {
  return (
    <div
      className={classNames({
        LoaderWrapper: true,
        HideLoader: loadingOffset
      })}
    >
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
