import './App.css';
import React from "react";
import Die from './Die';
import {nanoid} from "nanoid";

function App() {
  const [dice, setDice] = React.useState(initialDice())

  function newDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function initialDice() {
    const diceArray = []
    for (let i = 0; i < 10; i++) {
      diceArray.push(newDie())
    }
    return diceArray
  }

  function roll() {
    setDice(prevDice => prevDice.map(die =>
      die.isHeld ? die : newDie()
    ))
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die =>
      die.id === id ? {...die, isHeld: !die.isHeld} : die
    ))
  }

  const diceComponents = dice.map(die =>
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
  )

  return (
    <main>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same!</p>
      <p>Click each die to freeze it at its current value between rolls.</p>
      <p>Good luck \(^ヮ^)/	</p>
      <div className="dice">
        {diceComponents}
      </div>
      <h3 className="button" onClick={roll}>Roll</h3>
    </main>
  );
}

export default App;
