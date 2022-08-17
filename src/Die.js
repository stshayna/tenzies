import React from "react";
import './App.css';

export default function Die(props) {
  return (
    <div
      className={props.isHeld ? "die green" : "die"}
      onClick={props.holdDice}
    >
      <h1>{props.value}</h1>
    </div>
  )
}
