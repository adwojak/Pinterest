import {
  LOAD_IMAGES,
  IS_LOADING,
  IS_NOT_LOADING
} from "src/store/action-types";
import { axiosChain, axiosGet } from "src/api/baseApi";
import resizer, { Image } from "src/misc/resizer";
import { imageUrl } from "src/misc/constants";
import { AxiosPromise, AxiosResponse } from "axios";

export const loadImages = (): Function => async (dispatch: Function) => {
  await dispatch({ type: IS_LOADING });
  const images: Array<AxiosPromise> = resizer().map((image: Image) =>
    axiosGet(`${imageUrl}${image.width}/${image.height}`)
  );
  await axiosChain(images, (responses: Array<Object>) =>
    dispatch({
      type: LOAD_IMAGES,
      payload: responses.map((res: AxiosResponse) => res.request.responseURL)
    })
  );
  await dispatch({ type: IS_NOT_LOADING });
};
