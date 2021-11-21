import React from "react";
import { Numbers, Alphabet } from "../../utils/mocks/mock";
import styles from "./style";

const AlphabetsBoard = ({ selectedChar, gameStatus, guessHandler }) => {
  return (
    <div>
      <div style={styles.alphabetContainer}>
        {Alphabet.map((item) => (
          <button
            id={`alphabet_${item}`}
            key={item}
            disabled={selectedChar.includes(item)}
            onClick={() => !gameStatus.length && guessHandler(item)}
            style={styles.alphabet}
          >
            {item}
          </button>
        ))}
      </div>
      <div style={styles.alphabetContainer}>
        {Numbers.map((item) => (
          <button
            id={`number_${item}`}
            key={item}
            disabled={selectedChar.includes(item)}
            onClick={() => !gameStatus && guessHandler(item)}
            style={styles.alphabet}
          >
            {/* <span style={styles.element}> */}
            {item}
            {/* </span> */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlphabetsBoard;
