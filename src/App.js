import './App.css';
import React from "react";
import Die from './Die';

function App() {
  const [dice, setDice] = React.useState(newDice())

  function newDice() {
    const diceArray = []
    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.ceil(Math.random() * 6))
    }
    return diceArray
  }

  function roll() {
    setDice(newDice())
  }

  const diceComponents = dice.map(die => <Die value={die} />)

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
