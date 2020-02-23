import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { openDialog } from "../../store/actions/misc";
import { errorPlaceholderUrl, m } from "../../constants";
import "./Image.scss";

export default ({ image }) => {
  const [errorUrl, setErrorUrl] = useState(null);
  const dispatch = useDispatch();

  const dialogOpen = () => {
    dispatch(openDialog(image));
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
          src={image}
          alt={image}
          onError={() => {
            setErrorUrl(errorPlaceholderUrl(400, 400));
          }}
        />
      )}
    </Fragment>
  );
};
