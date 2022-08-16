import './App.css';
import React from "react";
import Die from './Die';
import {nanoid} from "nanoid";

function App() {
  const [dice, setDice] = React.useState(newDice())

  function newDice() {
    const diceArray = []
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      })
    }
    return diceArray
  }

  function roll() {
    setDice(newDice())
  }

  const diceComponents = dice.map(die => <Die key={die.id} value={die.value} />)

  return (
    <main>
      <div className="dice">
        {diceComponents}
      </div>
      <h3 className="button" onClick={roll}>Roll</h3>
    </main>
  );
}

export default App;
