import { LOAD_IMAGES } from "src/store/action-types";

const initialState: Object = {
  images: []
};

export default (
  state: Object = initialState,
  action: { type: string; payload: Object }
): Object => {
  switch (action.type) {
    case LOAD_IMAGES:
      return { ...state, images: action.payload };
    default:
      return state;
  }
};
