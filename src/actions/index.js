import {
  IMAGE_SELECTED,
  GOT_IMAGE_REF,
  IMAGE_ADDED,
  CURRENT_MONTH_REF,
} from "./types";

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

export const newImageAdded = (imageDataObj) => {
  return {
    type: IMAGE_ADDED,
    payload: { imageDataObj },
  };
};

export const currentMonthRefAct = (currentMonthNode) => {
  return {
    type: CURRENT_MONTH_REF,
    payload: currentMonthNode,
  };
};
