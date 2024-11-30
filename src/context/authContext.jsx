"use client"
import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, loading: false };
    case "LOGOUT":
      return { ...state, user: null, loading: false };
    case "LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null, loading: true });

  useEffect(() => {
    const token = Cookies.get('token');
    const user = Cookies.get('user');

    if (token && user) {
      dispatch({ type: "LOGIN", payload: user });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, []);

  const login = async (user) => {
    Cookies.set('user', JSON.stringify(user), { expires: 7 });
    Cookies.set('token', user.token, { expires: 7 });
    dispatch({ type: "LOGIN", payload: user });
  };

  const logoutUser = () => {
    Cookies.remove('user');
    Cookies.remove('token');
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
