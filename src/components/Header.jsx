import React from 'react';
import Statistics from "./Statistics";
import Stopwatch from "./Stopwatch";

export const Header = (props) => {
  console.log(props);
  // destruct assignment
  const {title, totalPlayers} = props;
  return (
    <header className="header">
      <Statistics players={props.players}></Statistics>
      <h1 className="h1">{title}</h1>
      <Stopwatch></Stopwatch>
    </header>
  );
}