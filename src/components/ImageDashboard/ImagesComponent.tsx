import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { MiscState } from "src/store/reducers/misc";
import Loader from "src/components/Loader/Loader";
import Dialog from "src/components/Dialog/Dialog";
import MainBlock from "src/components/MainBlock/MainBlock";
import Heading from "src/components/Heading/Heading";
import "src/components/ImageDashboard/ImagesComponent.scss";

export default (): JSX.Element => {
  const {
    isDialogOpened,
    isLoading,
    loadingOffset,
    dialogImgUrl
  }: MiscState = useSelector((state: any): MiscState => state.misc);

  return (
    <Fragment>
      {(isLoading || loadingOffset) && <Loader loadingOffset={loadingOffset} />}
      {isDialogOpened && <Dialog imgUrl={dialogImgUrl} />}
      <Heading />
      <MainBlock />
    </Fragment>
  );
};
