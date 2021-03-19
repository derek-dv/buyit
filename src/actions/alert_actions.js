import * as all from "./alert";

export const addAlert = (id, message, type) => (dispatch) => {
  dispatch({ type: all.ALERT_ADD, payload: { id, message, type } });

  setTimeout(() => {
    dispatch({ type: all.ALERT_REMOVE, payload: id });
  }, 5000);
};
