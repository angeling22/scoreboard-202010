import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import CustomPlayer from "./components/CustomPlayer";
import _ from 'lodash';

let maxId = 4;

function App(props) {
  const [players, setPlayers] = useState([
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK',score: 0, id: 4},
  ]);

  const handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer: ', id);
    // 로직 작성
    // id를 제외한 상태를 업데이트해야 한다.
    const newPlayers = players.filter((player) => player.id !== id);
    // short hand property: key, value 가 같으면 한쪽 생략
    setPlayers(newPlayers); // 비동기 실행된다.
  }

  const handleChangeScore = (delta, id) => {
    console.log('handleChangeScore:', delta, id);

    const newPlayes = [ ...players ];
    newPlayes.forEach(player => {
      if (player.id === id) {
        player.score += delta;
      }
    })
    setPlayers(newPlayes);
  }

  const handleAddPlayer = (name) => {
    console.log('handleAddPlayer: ', name);
    const newPlayes = [ ...players ];
    // 추가하는 로직
    newPlayes.push({name: name, score: 0, id: ++maxId});
    setPlayers(newPlayes);
  }
  // 가자 높은 score를 리턴
  const getHighScore = () => {
    const maxObj = _.maxBy(players, 'score');
    return maxObj.score ? maxObj.score : null;
  }

  return (
    <div className='scoreboard'>
      <Header title='My Scoreboard' players={players} />

      {
        players.map(player => (
          <CustomPlayer name={player.name} key={player.id}
                        id={player.id}
                        score={player.score}
                        isHighScore={player.score === getHighScore()}
                        changeScore={handleChangeScore}
                        removePlayer={handleRemovePlayer} />
        ))
      }
      <AddPlayerForm addPlayer={handleAddPlayer}></AddPlayerForm>
    </div>
  );
}

export default App;