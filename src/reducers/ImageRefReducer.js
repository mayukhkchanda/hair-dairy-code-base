import { GOT_IMAGE_REF } from "../actions/types";

export const ImageRefReducer = (imgNode = null, action) => {
  switch (action.type) {
    case GOT_IMAGE_REF:
      return action.payload.imageNode;

    default:
      return imgNode;
  }
};
