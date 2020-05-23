//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";

function App() {
  const [homeCount, setHomeCount] = useState(0);
  const [awayCount, setAwayCount] = useState(0);
  const [currentDown, setAdvanceDown] = useState(1);
  const [currentQuarter, setAdvanceQuarter] = useState(1);
  const [yards2go, advanceYards2go] = useState(10);
  // console.log(homeCount);
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const handleHomeTouchDown = () => {
    setHomeCount(homeCount + 7);
  };

  const handleHomeFieldGoal = () => {
    setHomeCount(homeCount + 3);
  };

  const handleAdvanceDown = () => {
    currentDown === 4 ? setAdvanceDown(1) : setAdvanceDown(currentDown + 1);
  };

  const handleAdvanceQuarter = () => {
    currentQuarter === 4
      ? setAdvanceQuarter(1)
      : setAdvanceQuarter(currentQuarter + 1);
  };

  const handleAwayTouchDown = () => {
    setAwayCount(awayCount + 7);
  };

  const handleAwayFieldGoal = () => {
    setAwayCount(awayCount + 3);
  };

  const handleAdd2go = () => {
    advanceYards2go(yards2go + 1);
  };

  const handleSub2go = () => {
    advanceYards2go(yards2go - 1);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeCount={homeCount} awayCount={awayCount} />
        <BottomRow
          currentDown={currentDown}
          yards2go={yards2go}
          currentQuarter={currentQuarter}
        />
      </section>
      <section className="buttons">
        <div>
          <button className="allButtons" onClick={handleHomeTouchDown}>
            Home Touchdown
          </button>
          <button className="allButtons" onClick={handleHomeFieldGoal}>
            Home Field Goal
          </button>
        </div>
        <div>
          <button className="allButtons" onClick={handleAdvanceDown}>
            Advance Down
          </button>
          <button className="allButtons" onClick={handleAdvanceQuarter}>
            Advance Quarter
          </button>
        </div>
        <div>
          <button className="allButtons" onClick={handleAdd2go}>
            + Yards To Go +
          </button>
          <button className="allButtons" onClick={handleSub2go}>
            - Yards To Go -
          </button>
        </div>
        <div>
          <button className="allButtons" onClick={handleAwayTouchDown}>
            Away Touchdown
          </button>
          <button className="allButtons" onClick={handleAwayFieldGoal}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
