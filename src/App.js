import { useState, useEffect } from 'react';
import './style.css';
import Die from "./Die"
import {nanoid} from "nanoid"


function App() {
  const [dice, setDice] = useState(allNewDice())
  function allNewDice() {
    // new array to hold my numbers
    const newDice = []

    //loop through them 10 times
    for (let i = 0; i < 10; i++) {
      // push a random number from 1-6 to my array
      newDice.push({
        value: Math.ceil(Math.random() * 6), isHeld: false,
        id: nanoid()
      })
    }
    return newDice
  }

 

  function rollDice(){
    setDice(allNewDice())
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
      {...die, isHeld: !die.isHeld} :
      die
    }))
  }

  const diceElements = dice.map(die => 
  <Die key={die.id}value={die.value} 
  isHeld={die.isHeld} 
  holdDice={() => holdDice(die.id)}/>)

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
