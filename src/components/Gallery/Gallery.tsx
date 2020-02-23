import React, { useState } from "react";
import classNames from "classnames";
import { axiosGet } from "src/api/baseApi";
import { galleryImageUrl } from "src/misc/constants";
import "src/components/Gallery/Gallery.scss";

export default (): JSX.Element => {
  const getPhoto: Function = async () => {
    setImageChanged(true);
    await axiosGet(galleryImageUrl).then((res: any) =>
      setSelectedPhoto(res.request.responseURL)
    );
    setImageChanged(false);
  };

  const [selectedPhoto, setSelectedPhoto] = useState(galleryImageUrl);
  const [imageChanged, setImageChanged] = useState(false);

  return (
    <div className="Gallery">
      <span className="Back" onClick={() => getPhoto()}></span>
      <img
        className={classNames({
          HideImage: imageChanged,
          ShowImage: !imageChanged
        })}
        src={selectedPhoto}
      />
      <span className="Forward" onClick={() => getPhoto()}></span>
    </div>
  );
};
