import React, { useState } from "react";
import { GuessContext } from "./context";
import { MockData } from "./utils/mocks/mock";

const ContextWrapper = ({ children }) => {
  const [guessData, setGuessData] = useState(
    MockData[Math.floor(Math.random() * MockData.length)]
  );
  const randomGuessDataGenrator = () => {
    setGuessData(MockData[Math.floor(Math.random() * MockData.length)]);
  };
  return (
    <GuessContext.Provider
      value={{ mock: guessData, setMock: randomGuessDataGenrator }}
    >
      {children}
    </GuessContext.Provider>
  );
};

export default ContextWrapper;
