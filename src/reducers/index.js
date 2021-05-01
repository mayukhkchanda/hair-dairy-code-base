import { combineReducers } from "redux";

import { ImageSelectionReducer } from "./ImageSelectionReducer";
import { ImageRefReducer } from "./ImageRefReducer";
import { ImageAddedReducer } from "./ImageAddedReducer";

const reducers = combineReducers({
  selectedImage: ImageSelectionReducer,
  imageNode: ImageRefReducer,
  imagesObjList: ImageAddedReducer,
});

export default reducers;
