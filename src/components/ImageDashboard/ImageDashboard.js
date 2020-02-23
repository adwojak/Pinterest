import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { w } from "../../constants";
import { loadImages } from "../../store/actions/images";
import Image from "./Image";
import "./ImageDashboard.scss";

export default () => {
  const dispatch = useDispatch();
  const imagesUrl = useSelector(state => state.images.images);

  useEffect(() => {
    dispatch(loadImages());
  }, []);

  return (
    <div className="ImageDashboardWrapper">
      <div className="ImageDashboard" style={{ width: w }}>
        {imagesUrl.map((image, key) => (
          <Image key={key} image={image} />
        ))}
      </div>
    </div>
  );
};
