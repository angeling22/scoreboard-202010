// 3) 자식이 함수선언문에 되도록 애로우 함수 사용
import React from "react";

export const Player = (props) => (
  <div className='player'>
    <span className='player-name'>
      <button className='remove-player'
              onClick={(e) => props.removePlayer(props.id)}>x</button>
    </span>
    <span className='player-name'>{props.name}</span>
    <Counter/>
  </div>
);