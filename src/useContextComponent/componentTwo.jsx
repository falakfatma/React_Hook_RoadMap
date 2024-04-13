import React, { useContext } from "react";
import ComponentThree from "./componentThree";
import { userContext, greetContext } from "../App";

function Componenttwo() {
  const context = useContext(userContext);
  const greet = useContext(greetContext);

  return (
    <>
      <h1>
        Component Two --- {context} EveryOne . {greet}
      </h1>
      <ComponentThree />
    </>
  );
}

export default Componenttwo;
