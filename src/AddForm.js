import axios from "axios";
import React, { useContext } from "react";
import { mycontext } from "./context";

export default function AddForm() {
  const { dispatch, username, setUsername, isEdit } = useContext(mycontext);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (isEdit) {
      const myEditData = {
        id: isEdit,
        username
      };
      axios
        .put(`https://jsonplaceholder.typicode.com/users/${isEdit}`, myEditData)
        .then((res) => {
          dispatch({ type: "UPDATE", payload: res.data });
          setUsername("");
        });
    } else {
      const myData = {
        id: Math.floor(Math.random() * 1000),
        username
      };
      axios
        .post("https://jsonplaceholder.typicode.com/users", myData)
        .then((res) => {
          dispatch({ type: "ADDDATA", payload: res.data });
          setUsername("");
        });
    }
  };

  return (
    <>
      <form>
        <input
          onChange={handleChange}
          value={username}
          type="text"
          placeholder="username"
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </>
  );
}
