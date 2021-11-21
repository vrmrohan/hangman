import React, { useContext } from "react";
import { GuessContext } from "../../context";
import { Strings } from "../../utils/constant";
import styles from "./style";

const HangmanQuestion = (props) => {
  const { selectedChar = [], showHint, setShowHint } = props;
  const {
    mock: { name = "", hint = "" },
  } = useContext(GuessContext);
  return (
    <div>
      <div style={styles.alphaContainer}>
        {name
          .toUpperCase()
          .split("")
          .map((item, index) => {
            if (item === " ")
              return (
                <span style={styles.elemnt} key={index}>
                  /
                </span>
              );
            return selectedChar.includes(item) ? (
              <span style={styles.elemnt} key={index}>
                {item}
              </span>
            ) : (
              <span key={index} style={styles.elemnt}>
                __
              </span>
            );
          })}
      </div>
      {hint && (
        <>
          {!showHint && (
            <div style={styles.hintContsiner}>
              <button
                id="showHint"
                style={styles.hint}
                onClick={() => setShowHint(true)}
              >
                {Strings.showHint}
              </button>
            </div>
          )}
          {showHint && (
            <div style={styles.hintContsiner}>
              <div style={styles.hintHeader}>{Strings.hint}</div>
              <div style={styles.hint}>{hint}</div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HangmanQuestion;
