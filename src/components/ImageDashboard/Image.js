import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { openDialog } from "../../store/actions/misc";
import { errorPlaceholderUrl, placeholderUrl, m } from "../../constants";
import "./Image.scss";

export default ({ image: { width, height } }) => {
  const [errorUrl, setErrorUrl] = useState(null);
  const dispatch = useDispatch();
  const url = placeholderUrl(width, height);

  const dialogOpen = () => {
    dispatch(openDialog(url));
  };

  return (
    <Fragment>
      {errorUrl ? (
        <img
          className="Image"
          style={{ marginBottom: m }}
          src={errorUrl}
          alt={errorUrl}
        />
      ) : (
        <img
          className="Image"
          onClick={dialogOpen}
          style={{ marginBottom: m }}
          src={url}
          alt={url}
          onError={() => {
            setErrorUrl(errorPlaceholderUrl(width, height));
          }}
        />
      )}
    </Fragment>
  );
};
