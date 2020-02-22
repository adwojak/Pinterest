import { LOAD_IMAGES } from "src/store/action-types";

const initialState: Object = {
  images: []
};

export default (
  state: Object = initialState,
  action: { type: string; payload: Object }
) => {
  switch (action.type) {
    case LOAD_IMAGES:
      console.log(action.payload);
      return { ...state, images: action.payload };
    default:
      return state;
  }
};
