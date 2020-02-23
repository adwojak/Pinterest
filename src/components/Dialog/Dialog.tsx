import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeDialog } from "src/store/actions/misc";
import "src/components/Dialog/Dialog.scss";

const useOutsideClick = (ref: any, dialogClose: Function) => {
  function handleClickOutside(event: Event): void {
    if (ref.current && !ref.current.contains(event.target)) {
      dialogClose();
    }
  }

  useEffect((): any => {
    document.addEventListener("mousedown", handleClickOutside);
    return (): void => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

export default ({ imgUrl }: { imgUrl: string }): JSX.Element => {
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const dialogClose = () => {
    dispatch(closeDialog());
  };
  useOutsideClick(wrapperRef, dialogClose);

  return (
    <div className="DialogWrapper">
      <div className="Dialog" ref={wrapperRef}>
        <p className="CloseButton" onClick={dialogClose}>
          &#10006;
        </p>
        <img src={imgUrl} alt="Alt" />
      </div>
    </div>
  );
};
