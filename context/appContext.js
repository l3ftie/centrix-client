import axios from "axios";
import { createContext, useContext, useReducer } from "react";

import reducer from "./reducer";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  PASSWORD_MATCH,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  SELECTED_COUNTRY,
  SELECTED_COVER_BEGIN,
  SELECTED_COVER_ERROR,
} from "./actions";

const getallData = async () => {
  const token = await AsyncStorage.getItem("token");
  const user = await AsyncStorage.getItem("user");
  const otp = await AsyncStorage.getItem("otp");
  console.log("token context", token);
  console.log("user context", user);
  console.log("otp context", otp);
  return { token, user, otp };
};

const { token } = getallData();
const { user } = getallData();
const { otp } = getallData();

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
  otp: otp || null,
  currentCover: null,
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

  const addUserToLocalStorage = ({ user, token, otp }) => {
    AsyncStorage.setItem("user", JSON.stringify(user));
    AsyncStorage.setItem("token", token);
    AsyncStorage.setItem("location", otp);
  };

  const removeUserToLocalStorage = async () => {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("location");
  };

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

  // register client
  const registerClient = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });

    try {
      const response = await axios.post(
        "https://centrix-32ep.onrender.com/api/v1/clients/register",
        currentUser
      );

      const { client, token, otp } = response.data;
      addUserToLocalStorage({ user, token, otp });

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          user: client,
          token: token,
          otp: otp,
        },
      });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: {
          message: error.response.data.msg,
        },
      });
    }
    clearAlert();
  };

  // login client
  const loginClient = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });

    try {
      const { data } = await axios.post(
        "https://centrix-32ep.onrender.com/api/v1/clients/login",
        currentUser
      );
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          user: data.client,
          token: data.token,
        },
      });

      console.log("response from loginClient", data);
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: {
          message: error.response.data.msg,
        },
      });
    }
    clearAlert();
  };

  const getCoverDesc = async (cover) => {
    // dispatch({ type: SELECTED_COVER_BEGIN });
    try {
      const { data } = await axios.get(
        `https://centrix-32ep.onrender.com/api/v1/clients/login`,
        {}
      );
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: SELECTED_COVER_ERROR,
        payload: {
          message: error.response.data.msg,
        },
      });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        selectedCountry,
        displayAlert,
        passwordMatching,
        registerClient,
        removeUserToLocalStorage,
        loginClient,
        getCoverDesc,
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
