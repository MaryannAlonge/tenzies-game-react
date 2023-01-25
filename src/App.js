import { useState, useEffect } from 'react';
import './style.css';
import Die from "./Die"


function App() {
  const [dice, setDice] = useState(allNewDice())
  function allNewDice() {
    // new array to hold my numbers
    const newDice = []

    //loop through them 10 times
    for (let i = 0; i < 10; i++) {
      // push a random number from 1-6 to my array
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  function rollDice(){
    setDice(allNewDice())
  }

  const diceElements = dice.map(die => <Die value={die} />)

  return (
    <main>
      <div className="container">
        {diceElements}
      </div>
      <button className='roll-button' onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
