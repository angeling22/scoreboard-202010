// 3) 자식이 함수선언문에 되도록 애로우 함수 사용
import React from "react";
import Counter from "./Counter";

function Player(props) {
  return (
    <div className='player'>
    <span className='player-name'>
      <button className='remove-player'
              onClick={(e) => props.removePlayer(props.id)}>x</button>
    </span>
      <span className='player-name'>{props.name}</span>
      <Counter/>
    </div>
  );
}

export default Player;

