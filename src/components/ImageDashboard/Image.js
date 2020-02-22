import React from "react";
import { useDispatch } from "react-redux";
import { openDialog } from "../../store/actions/misc";
import { placeholderUrl, m } from "../../constants";
import "./Image.scss";

export default ({ image: { width, height } }) => {
  const dispatch = useDispatch();
  const url = `${placeholderUrl}${width}x${height}`;

  const dialogOpen = () => {
    dispatch(openDialog(url));
  };

  return (
    <img
      className="Image"
      onClick={dialogOpen}
      style={{ marginBottom: m }}
      src={url}
      alt={url}
    />
  );
};
