import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoading, isNotLoading } from "../store/actions/misc";
import ImageDashboard from "./ImageDashboard/ImageDashboard";
import Loader from "./Loader/Loader";
import Dialog from "./Dialog/Dialog";

export default () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.misc.isLoading);
  const { isDialogOpened, dialogImgUrl } = useSelector(state => state.misc);

  useEffect(() => {
    dispatch(isLoading());
    setInterval(() => {
      dispatch(isNotLoading());
    }, 2000);
  }, []);

  return (
    <Fragment>
      {isDialogOpened && <Dialog imgUrl={dialogImgUrl} />}
      {loading ? <Loader /> : <ImageDashboard />}
    </Fragment>
  );
};
