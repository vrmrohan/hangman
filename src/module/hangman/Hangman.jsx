import React, { useContext, useEffect, useState } from "react";
import AlphabetsBoard from "../../components/alphaNumericBoard/AlphaNumericBoard";
import HangmanImage from "../../components/hangmanImage/HangmanImage";
import HangmanQuestion from "../../components/hangmanQuestion/HangmanQuestion";
import { GuessContext } from "../../context";
import { Strings } from "../../utils/constant";
import styles from "./style";

const Hangman = () => {
  const [selectedChar, setSelectedChar] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [counterState, setCounterState] = useState(1);
  const [correctCharsL, setCorrectCharsL] = useState(0);
  const [selectedCorrectCharL, setSelectedCorrectCharL] = useState(0);
  const [gameStatus, setGameStatus] = useState("");
  const { mock, setMock } = useContext(GuessContext);

  const reset = () => {
    setMock();
    setSelectedChar([]);
    setShowHint(false);
    setCounterState(1);
    setCorrectCharsL(0);
    setSelectedCorrectCharL(0);
    setGameStatus("");
    correctCharhandler();
  };

  const correctCharhandler = () => {
    const correctChars = Array.from(
      new Set(...mock.name.toUpperCase().replace(/ /g, "").split(","))
    );
    setCorrectCharsL(correctChars.length);
  };
  useEffect(() => {
    correctCharhandler();
  }, []);

  useEffect(() => {
    if (correctCharsL > 0 && correctCharsL === selectedCorrectCharL) {
      setGameStatus("won");
    }
  }, [correctCharsL, selectedCorrectCharL]);

  const Header = () => (
    <div style={styles.header}>
      <h1>{Strings.pageTitle}</h1>
    </div>
  );

  const guessHandler = (val) => {
    if (!mock.name.toUpperCase().includes(val)) {
      if (counterState === 5) {
        setGameStatus("lost");
      }
      setCounterState(counterState + 1);
    } else {
      setSelectedCorrectCharL(selectedCorrectCharL + 1);
    }
    setSelectedChar([...selectedChar, val]);
  };

  return (
    <div style={styles.root}>
      {Header()}
      <div style={styles.container1}>
        <HangmanImage counterState={counterState} />
        <HangmanQuestion
          showHint={showHint}
          setShowHint={setShowHint}
          selectedChar={selectedChar}
        />
      </div>
      <AlphabetsBoard
        selectedChar={selectedChar}
        gameStatus={gameStatus}
        guessHandler={guessHandler}
      />
      {gameStatus === "lost" && <div style={styles.lost}>{Strings.lostTitle}</div>}
      {gameStatus === "won" && <div style={styles.won}>{Strings.wonTitle}</div>}
      <div style={styles.buttonContainer}>
        <button
          id="resetButton"
          style={styles.playAgainButton}
          onClick={() => reset()}
        >
          {Strings.playAgain}
        </button>
      </div>
    </div>
  );
};
export default Hangman;
