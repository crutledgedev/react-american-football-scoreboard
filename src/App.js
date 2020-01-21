//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
// import BottomRow from "./BottomRow";

function App() {
  const [homeCount, setHomeCount] = useState(0);
  const [awayCount, setAwayCount] = useState(0);
  const [currentDown, setAdvanceDown] = useState(1);
  const [currentQuarter, setAdvanceQuarter] = useState(1);
  const [yards2go, advanceYards2go] = useState(10);
  // console.log(homeCount);
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const handleHomeTouchDown = () => {
    setHomeCount(homeCount + 7)
  };

  const handleHomeFieldGoal = () => {
    setHomeCount(homeCount + 3)
  };

  const handleAdvanceDown = () => {
    if(currentDown === 4){
      setAdvanceDown(currentDown - 3)
    } 
     else 
      {setAdvanceDown(currentDown + 1)}
  };

  const handleAdvanceQuarter = () => {
    if(currentQuarter === 4){
      setAdvanceQuarter(currentQuarter - 3)
    }    
     else 
      {setAdvanceQuarter(currentQuarter + 1)}

  }
  const handleAwayTouchDown = () => {
    setAwayCount(awayCount + 7)
  };

  const handleAwayFieldGoal = () => {
    setAwayCount(awayCount + 3)
  };

  const handleAdd2go = () => {
    advanceYards2go(yards2go + 1)
  }

  const handleSub2go = () => {
    advanceYards2go(yards2go - 1)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{ homeCount}</div>
          </div>
          <div className="timer">15:00</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{ awayCount }</div>
          </div>
        </div>
        <div className="bottomRow">

          <div className="down">
            <h3 className="down__title">Down</h3>
            <div className="down__value">{ currentDown }</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">To Go</h3>
            <div className="toGo__value">{ yards2go }</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">1st on</h3>
            <div className="ballOn__value">21</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{currentQuarter}</div>
          </div>
        </div>
      </section>
      <section className="buttons">      
          <div>
          <button className="allButtons" onClick={handleHomeTouchDown}>Home Touchdown</button>
          <button className="allButtons" onClick = {handleHomeFieldGoal}>Home Field Goal</button>
        </div>
        <div>
          <button className="allButtons"onClick={handleAdvanceDown}>Advance Down</button>
          <button className="allButtons"onClick={handleAdvanceQuarter}>Advance Quarter</button>   
        </div>
        <div>    
          <button className="allButtons" onClick={handleAdd2go}>+ Yards To Go +</button>
          <button className="allButtons" onClick={handleSub2go}>- Yards To Go -</button>
         </div>
         <div> 
          <button className="allButtons" onClick={handleAwayTouchDown}>Away Touchdown</button>
          <button className="allButtons" onClick={handleAwayFieldGoal}>Away Field Goal</button>
         </div> 
      </section>
    </div>
  );
}

export default App;
