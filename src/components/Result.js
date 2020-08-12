import React from "react";

const Result = ({score, playAgain}) => (
  <div className="score-board">
    {/* <div className="score">You scored {score} / 5 correct answers!</div> */}
    <div className ="score">It was a helpful insight about u</div>
    <button className="playBtn" onClick={playAgain}><p className="btntext">
      Click to know more</p>
    </button>
  </div>
);

export default Result;
