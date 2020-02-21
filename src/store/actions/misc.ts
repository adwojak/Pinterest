import { IS_LOADING, IS_NOT_LOADING } from "../action-types";

export const isLoading = (): Function => (dispatch: Function): void => {
  dispatch({ type: IS_LOADING });
};

export const isNotLoading = (): Function => (dispatch: Function): void => {
  dispatch({ type: IS_NOT_LOADING });
};
