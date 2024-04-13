import "./App.css";
import React, { createContext } from "react";
import ComponentOne from "./useContextComponent/componentOne";
export const userContext = createContext();
export const greetContext = createContext();
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
