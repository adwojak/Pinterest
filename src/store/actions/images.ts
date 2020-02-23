import { LOAD_IMAGES } from "src/store/action-types";
import { axiosChain, axiosGet } from "src/api/baseApi";
import resizer, { Image } from "src/misc/resizer";
import { imageUrl } from "src/misc/constants";
import { AxiosPromise, AxiosResponse } from "axios";
import { isLoading, isNotLoading } from "src/store/actions/misc";

export const loadImages = (): Function => async (
  dispatch: Function
): Promise<void> => {
  await dispatch(isLoading());
  const images: Array<AxiosPromise> = resizer().map((image: Image) =>
    axiosGet(`${imageUrl}${image.width}/${image.height}`)
  );
  await axiosChain(images, (responses: Array<Object>): void =>
    dispatch({
      type: LOAD_IMAGES,
      payload: responses.map((res: AxiosResponse) => res.request.responseURL)
    })
  );
  await dispatch(isNotLoading());
};
