import { combineReducers } from "redux";
import misc from "src/store/reducers/misc";
import images from "src/store/reducers/images";

export default combineReducers({
  misc,
  images
});
