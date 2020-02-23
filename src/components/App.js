import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ImageDashboard from "./ImageDashboard/ImageDashboard";
import Loader from "./Loader/Loader";
import Dialog from "./Dialog/Dialog";
import "./App.scss";

export default () => {
  const loading = useSelector(state => state.misc.isLoading);
  const { isDialogOpened, dialogImgUrl } = useSelector(state => state.misc);

  return (
    <Fragment>
      {loading && <Loader />}
      {isDialogOpened && <Dialog imgUrl={dialogImgUrl} />}
      <ImageDashboard />
    </Fragment>
  );
};
