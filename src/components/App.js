import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoading, isNotLoading } from "../store/actions/misc";
import ImageDashboard from "./ImageDashboard/ImageDashboard";
import Loader from "./Loader/Loader";
import "./App.scss";

export default () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.misc.isLoading);

  useEffect(() => {
    dispatch(isLoading());
    setInterval(() => {
      console.log("Fake loading");
      dispatch(isNotLoading());
    }, 2000);
  }, []);

  return <Fragment>{loading ? <Loader /> : <ImageDashboard />}</Fragment>;
};
