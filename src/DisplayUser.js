import axios from "axios";
import React, { useContext } from "react";
import { mycontext } from "./context";

export default function DisplayUser() {
  const { state, dispatch, setUsername, setIsEdit } = useContext(mycontext);
  const { data } = state;
  // console.log(data);

  const onDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        dispatch({ type: "ONDELETE", payload: id });
      });
  };

  const onEdit = (id) => {
    const findData = state.data.find((data) => data.id === id);
    setUsername(findData.username);
    setIsEdit(id);
  };

  return (
    <>
      <h1>{state.title}</h1>
      {data
        .sort((a, b) => (a.id < b.id ? 1 : -1))
        .map((data, i) => {
          return (
            <div key={data.id}>
              <h2>
                {i + 1}.{data.username}
              </h2>
              <button onClick={() => onEdit(data.id)}>Edit</button>
              <button onClick={() => onDelete(data.id)}>delete</button>
            </div>
          );
        })}
    </>
  );
}
