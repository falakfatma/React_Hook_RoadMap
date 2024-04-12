import "./App.css";
import React, { useState, createContext } from "react";
import ComponentOne from "./component/componentOne";
export const userContext = React.createContext();
export const greetContext = React.createContext();
export default function App() {
  return (
    <main>
      <userContext.Provider value={"hello"}>
        <greetContext.Provider value={"Nice to meet you"}>
          <ComponentOne />
        </greetContext.Provider>
      </userContext.Provider>
    </main>
  );
}
