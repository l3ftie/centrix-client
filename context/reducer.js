import { CLEAR_ALERT, DISPLAY_ALERT, SELECTED_COUNTRY } from "./actions";

const reducer = (state, action) => {
  // display alert
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }

  //   clear alert
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  // selected country code
  if (action.type === SELECTED_COUNTRY) {
    return {
      ...state,
      country: action.payload.country,
    };
  }

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
