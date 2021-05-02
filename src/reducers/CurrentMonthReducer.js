import { CURRENT_MONTH_REF } from "../actions/types";

export const CurrentMonthReducer = (currentMonthNode = null, action) => {
  switch (action.type) {
    case CURRENT_MONTH_REF:
      return action.payload;

    default:
      return currentMonthNode;
  }
};
