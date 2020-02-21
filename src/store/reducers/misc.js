import { IS_LOADING, IS_NOT_LOADING } from "../action-types";

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: true };
    case IS_NOT_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
