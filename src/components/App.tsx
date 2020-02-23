import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ImageDashboard from "src/components/ImageDashboard/ImageDashboard";
import Loader from "src/components/Loader/Loader";
import Dialog from "src/components/Dialog/Dialog";
import "src/components/App.scss";
import { MiscState } from "src/store/reducers/misc";

export default () => {
  const loading = useSelector((state: any): boolean => state.misc.isLoading);
  const {
    isDialogOpened,
    dialogImgUrl
  }: { isDialogOpened: boolean; dialogImgUrl: string } = useSelector(
    (state: any): MiscState => state.misc
  );

  return (
    <Fragment>
      {loading && <Loader />}
      {isDialogOpened && <Dialog imgUrl={dialogImgUrl} />}
      <ImageDashboard />
    </Fragment>
  );
};
