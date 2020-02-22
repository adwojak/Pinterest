import {
  LOAD_IMAGES,
  IS_LOADING,
  IS_NOT_LOADING
} from "src/store/action-types";

export const loadImages = (): Function => (dispatch: Function): void => {
  dispatch({ type: IS_LOADING });
  dispatch({ type: LOAD_IMAGES, payload: "aa" });
  dispatch({ type: IS_NOT_LOADING });
};
