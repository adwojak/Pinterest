import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeDialog } from "../../store/actions/misc";
import "./Dialog.scss";

const useOutsideClick = (ref, dialogClose) => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      dialogClose();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

export default ({ imgUrl }) => {
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
