import React from "react";
import { Hangman } from "./module";
import ContextWrapper from "./ContextWrapper";

function App() {
  return (
      <ContextWrapper>
        <Hangman />
      </ContextWrapper>
  );
}

export default App;
