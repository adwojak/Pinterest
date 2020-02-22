import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { isLoading, isNotLoading } from "../store/actions/misc";
import ImageDashboard from "./ImageDashboard/ImageDashboard";
import Loader from "./Loader/Loader";
import Dialog from "./Dialog/Dialog";
import "./App.scss";

export default () => {
  const loading = useSelector(state => state.misc.isLoading);
  const { isDialogOpened, dialogImgUrl } = useSelector(state => state.misc);

  // useEffect(() => {
  //   dispatch(isLoading());
  //   setInterval(() => {
  //     dispatch(isNotLoading());
  //   }, 2000);
  // }, []);

  const gett = () => {
    // axios.get("https://picsum.photos/200/300").then(res => {
    //   console.log(res.request.responseURL);
    // });
  };

  return (
    <Fragment>
      {/* {isDialogOpened && <Dialog imgUrl={dialogImgUrl} />} */}
      {/* {loading ? <Loader /> : <ImageDashboard />} */}\
      <ImageDashboard />
    </Fragment>
  );
};
