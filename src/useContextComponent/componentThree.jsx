import React from "react";
import { userContext } from "../App";
import { greetContext } from "../App";

function ComponentThree() {
  return (
    <>
      <userContext.Consumer>
        {(context) => {
          return (
            <greetContext.Consumer>
              {(greet) => {
                return (
                  <h1>
                    component Three --- {context} EveryOne . {greet}
                  </h1>
                );
              }}
            </greetContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </>
  );
}

export default ComponentThree;
