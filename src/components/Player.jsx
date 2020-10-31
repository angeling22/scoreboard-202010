// 3) 자식이 함수선언문에 되도록 애로우 함수 사용
import React from 'react';
import Counter from "./Counter";

function Player({score, removePlayer, name, id, changeScore, children}) {
  return (
    <div className='player'>
      <span className='player-name' >
          <button className='remove-player' onClick={() => removePlayer(id)}>x</button>
        {children}
        {name}
      </span>
      <Counter
        score={score}
        id={id}
        changeScore={changeScore}/>
    </div>
  );
}

export default Player;

