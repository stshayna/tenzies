import './App.css'
import React from "react"
import Die from './Die'
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

function App() {
  const [dice, setDice] = React.useState(initialDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const allSameValue = dice.every(die => die.value === dice[0].value)
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice])

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
    if (tenzies) {
      setDice(initialDice())
      setTenzies(false)
    } else {
      setDice(prevDice => prevDice.map(die =>
        die.isHeld ? die : newDie()
      ))
    }
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
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same!</p>
      <p>Click each die to freeze it at its current value between rolls.</p>
      <p>Good luck \(^ヮ^)/	</p>
      <div className="dice">
        {diceComponents}
      </div>
      <h3 className="button" onClick={roll}>{tenzies ? "Restart" : "Roll"}</h3>
    </main>
  );
}

export default App;
