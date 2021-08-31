import React, { createContext, useEffect, useReducer, useState } from "react";
import { reducer, initialstate } from "./reducer";
import axios from "axios";
export const mycontext = createContext();

export default function DataProvider({ children }) {
  const [username, setUsername] = useState("");
  const [isEdit, setIsEdit] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialstate);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      dispatch({ type: "FETCHALL", payload: res.data });
    });
  }, []);

  // console.log(state.data);

  return (
    <mycontext.Provider
      value={{ state, dispatch, username, setUsername, isEdit, setIsEdit }}
    >
      {children}
    </mycontext.Provider>
  );
}
