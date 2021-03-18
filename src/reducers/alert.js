import * as all from "../actions/alert";

export const alert = (state = [], action) => {
  switch (action.type) {
    case all.ALERT_ADD:
      return [...state, action.payload];
    case all.ALERT_REMOVE:
      return state.filter((x) => x.id !== action.payload);
    default:
      return state;
  }
};
