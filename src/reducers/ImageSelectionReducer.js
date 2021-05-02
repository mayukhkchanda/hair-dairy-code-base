import { IMAGE_SELECTED } from "../actions/types";

/* const __INIT_STATE = {
  date: null,
  month: null,
  url: null,
}; */

export const ImageSelectionReducer = (state = null, action) => {
  switch (action.type) {
    case IMAGE_SELECTED:
      return action.payload;

    default:
      return state;
  }
};
