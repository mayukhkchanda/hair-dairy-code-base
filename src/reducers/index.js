import { combineReducers } from "redux";

import { ImageSelectionReducer } from "./ImageSelectionReducer";
import { ImageRefReducer } from "./ImageRefReducer";
import { ImageAddedReducer } from "./ImageAddedReducer";
import { CurrentMonthReducer } from "./CurrentMonthReducer";

const reducers = combineReducers({
  selectedImage: ImageSelectionReducer,
  imageNode: ImageRefReducer,
  imagesObjList: ImageAddedReducer,
  CurrentMonthNode: CurrentMonthReducer,
});

export default reducers;
