import { combineReducers } from "redux";

import { ImageSelectionReducer } from "./ImageSelectionReducer";
import { ImageRefReducer } from "./ImageRefReducer";

const reducers = combineReducers({
  selectedImage: ImageSelectionReducer,
  imageNode: ImageRefReducer,
});

export default reducers;
