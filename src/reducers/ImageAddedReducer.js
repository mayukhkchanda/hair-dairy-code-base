import { IMAGE_ADDED } from "../actions/types";

export const ImageAddedReducer = (imageList = [], action) => {
  switch (action.type) {
    case IMAGE_ADDED:
      return [...imageList, action.payload.imageDataObj];

    default:
      return imageList;
  }
};
