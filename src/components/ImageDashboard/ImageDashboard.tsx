import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { w } from "src/misc/constants";
import { loadImages } from "src/store/actions/images";
import Image from "src/components/ImageDashboard/Image";
import "src/components/ImageDashboard/ImageDashboard.scss";

export default () => {
  const dispatch = useDispatch();
  const imagesUrl = useSelector(
    (state: any): Array<string> => state.images.images
  );

  useEffect(() => {
    dispatch(loadImages());
  }, []);

  return (
    <div className="ImageDashboard" style={{ width: w }}>
      {imagesUrl.map((image, key) => (
        <Image key={key} image={image} />
      ))}
    </div>
  );
};
