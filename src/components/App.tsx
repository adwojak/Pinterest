import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { MiscState } from "src/store/reducers/misc";
import Loader from "src/components/Loader/Loader";
import Dialog from "src/components/Dialog/Dialog";
import MainBlock from "src/components/MainBlock/MainBlock";
import Heading from "src/components/Heading/Heading";
import "src/components/App.scss";

export default (): JSX.Element => {
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
      <Heading />
      <MainBlock />
    </Fragment>
  );
};
