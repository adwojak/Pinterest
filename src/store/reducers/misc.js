import {
  IS_LOADING,
  IS_NOT_LOADING,
  OPEN_DIALOG,
  CLOSE_DIALOG
} from "../action-types";

const initialState = {
  isLoading: false,
  isDialogOpened: false,
  dialogImgUrl: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: true };
    case IS_NOT_LOADING:
      return { ...state, isLoading: false };
    case OPEN_DIALOG:
      return { ...state, isDialogOpened: true, dialogImgUrl: action.payload };
    case CLOSE_DIALOG:
      return { ...state, isDialogOpened: false, dialogImgUrl: null };
    default:
      return state;
  }
};
