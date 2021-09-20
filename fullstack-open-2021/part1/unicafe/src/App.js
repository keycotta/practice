import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const clickGood = () => {
    setGood(good + 1);
    setAll(allClicks.concat(1));
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1);
    setAll(allClicks.concat(0));
  }

  const clickBad = () => {
    setBad(bad + 1);
    setAll(allClicks.concat(-1));
  }

  const getAverage = (e) =>
    allClicks.reduce((total, num) => total + num) / allClicks.length;

  const getPositive = () =>
    good / allClicks.length * 100;

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={clickGood}>good</button>
      <button onClick={clickNeutral}>neutral</button>
      <button onClick={clickBad}>bad</button>

      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>average {allClicks.length ? getAverage() : 'N/A'}</p>
      <p>positive {getPositive() || 0}%</p>
    </div>
  )
}

export default App