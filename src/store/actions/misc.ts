import {
  IS_LOADING,
  IS_NOT_LOADING,
  OPEN_DIALOG,
  CLOSE_DIALOG
} from "../action-types";

export const isLoading = (): Function => (dispatch: Function): void => {
  dispatch({ type: IS_LOADING });
};

export const isNotLoading = (): Function => (dispatch: Function): void => {
  dispatch({ type: IS_NOT_LOADING });
};

export const openDialog = (payload: any): Function => (
  dispatch: Function
): void => {
  dispatch({ type: OPEN_DIALOG, payload });
};

export const closeDialog = (): Function => (dispatch: Function): void => {
  dispatch({ type: CLOSE_DIALOG });
};
