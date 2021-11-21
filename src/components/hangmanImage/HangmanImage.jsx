import React from "react";

const HangmanImage = ({counterState}) => {
    return (
      <div>
        <img style={{height: '300px'}} src={`./images/${counterState}.png`} alt="..." />
      </div>
    );
  };

  export default HangmanImage