import axios from "axios";
import { createContext, useContext, useReducer } from "react";

import reducer from "./reducer";

import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  PASSWORD_MATCH,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  SELECTED_COUNTRY,
} from "./actions";

const token = "";
const user = "";

const initialState = {
  isLoading: false,
  showAlert: false,
  country: "",
  code: "",
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token || null,
  planTypeOptions: ["traditional", "classical", "executive"],
  planType: "traditional",
  applicationTypeOptions: ["new application", "upgrade", "downgrade", "additional information"],
  applicationType: "new application",
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "https://centrix-32ep.onrender.com/api/v1",
  });

  // request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const selectedCountry = (details) => {
    dispatch({ type: SELECTED_COUNTRY, payload: { country: details.iso } });
  };

  const passwordMatching = () => {
    dispatch({ type: PASSWORD_MATCH });
    clearAlert();
  };

  const registerClient = async () => {
    dispatch({ type: REGISTER_USER_BEGIN });

    try {
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: {
          message: error,
        },
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        selectedCountry,
        displayAlert,
        passwordMatching,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
