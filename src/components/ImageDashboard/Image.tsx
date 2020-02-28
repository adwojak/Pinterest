import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { openDialog } from "src/store/actions/misc";
import { errorPlaceholderUrl, m } from "src/misc/constants";
import "src/components/ImageDashboard/Image.scss";

export default ({ image }: { image: string }): JSX.Element => {
  const [errorUrl, setErrorUrl] = useState(null);
  const dispatch = useDispatch();

  const dialogOpen = () => {
    dispatch(openDialog(image));
  };

  return (
    <Fragment>
      {errorUrl ? (
        <img
          className="Image2"
          style={{ marginBottom: m }}
          src={errorUrl}
          alt={errorUrl}
        />
      ) : (
        <img
          className="Image2"
          onClick={dialogOpen}
          style={{ marginBottom: m }}
          src={image}
          alt={image}
          onError={(): void => {
            setErrorUrl(errorPlaceholderUrl(400, 400));
          }}
        />
      )}
    </Fragment>
  );
};
