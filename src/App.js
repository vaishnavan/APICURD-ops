import React from "react";
import AddForm from "./AddForm";
import DataProvider from "./context";
import DisplayUser from "./DisplayUser";

export default function App() {
  return (
    <>
      <DataProvider>
        <AddForm />
        <DisplayUser />
      </DataProvider>
    </>
  );
}
