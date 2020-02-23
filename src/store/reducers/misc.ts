import {
  IS_LOADING,
  IS_NOT_LOADING,
  LOADING_OFFSET_OFF,
  OPEN_DIALOG,
  CLOSE_DIALOG
} from "src/store/action-types";

export interface MiscState {
  isLoading: boolean;
  isDialogOpened: boolean;
  dialogImgUrl: string;
  loadingOffset: boolean;
}

const initialState: MiscState = {
  isLoading: false,
  isDialogOpened: false,
  dialogImgUrl: null,
  loadingOffset: false
};

export default (
  state: Object = initialState,
  action: { type: string; payload: Object }
): Object => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: true };
    case IS_NOT_LOADING:
      return { ...state, isLoading: false, loadingOffset: true };
    case LOADING_OFFSET_OFF:
      return { ...state, loadingOffset: false };
    case OPEN_DIALOG:
      return { ...state, isDialogOpened: true, dialogImgUrl: action.payload };
    case CLOSE_DIALOG:
      return { ...state, isDialogOpened: false, dialogImgUrl: null };
    default:
      return state;
  }
};
