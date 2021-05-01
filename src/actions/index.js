import { IMAGE_SELECTED, GOT_IMAGE_REF } from "./types";

export const imageSelected = (imageObj) => {
  return {
    type: IMAGE_SELECTED,
    payload: imageObj,
  };
};

export const gotImageRef = (imageNode) => {
  return {
    type: GOT_IMAGE_REF,
    payload: { imageNode },
  };
};
