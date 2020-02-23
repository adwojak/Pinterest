import {
  IS_LOADING,
  IS_NOT_LOADING,
  LOADING_OFFSET_OFF,
  OPEN_DIALOG,
  CLOSE_DIALOG
} from "src/store/action-types";

export const isLoading = (): Function => (dispatch: Function): void => {
  document.body.style.overflow = "hidden";
  dispatch({ type: IS_LOADING });
};

export const isNotLoading = (): Function => async (
  dispatch: Function
): Promise<void> => {
  await dispatch({ type: IS_NOT_LOADING });
  document.body.style.overflow = "visible";
  setTimeout(() => {
    dispatch({ type: LOADING_OFFSET_OFF });
  }, 1000);
};

export const openDialog = (payload: any): Function => (
  dispatch: Function
): void => {
  dispatch({ type: OPEN_DIALOG, payload });
};

export const closeDialog = (): Function => (dispatch: Function): void => {
  dispatch({ type: CLOSE_DIALOG });
};
