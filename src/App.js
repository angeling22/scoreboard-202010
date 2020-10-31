import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import CustomPlayer from "./components/CustomPlayer";
import _ from 'lodash';

let maxId = 4;

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK',score: 0, id: 4},
    ]
  }

  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer: ', id);
    // 로직 작성
    this.setState((prevState) => {
      // id를 제외한 상태를 업데이트해야 한다.
      const players = prevState.players.filter((player) => player.id !== id);
      // short hand property: key, value 가 같으면 한쪽 생략
      return { players };
    })
  }

  handleChangeScore = (delta, id) => {
    console.log('handleChangeScore:', delta, id);
    this.setState((prevState) => {
      const players = [ ...prevState.players ];
      players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      })
      return { players: players }
    })
  }

  handleAddPlayer = (name) => {
    console.log('handleAddPlayer: ', name);
    this.setState(prevState => {
      const players = [ ...prevState.players ];
      // 추가하는 로직
      players.push({name: name, score: 0, id: ++maxId});
      return {players};
    })
  }
  // 가자 높은 score를 리턴
  getHighScore() {
    const maxObj = _.maxBy(this.state.players, 'score');
    return maxObj.score ? maxObj.score : null;
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title='My Scoreboard' players={this.state.players} />

        {
          this.state.players.map(player => (
            <CustomPlayer name={player.name} key={player.id}
                          id={player.id}
                          score={player.score}
                          isHighScore={player.score === this.getHighScore()}
                          changeScore={this.handleChangeScore}
                          removePlayer={this.handleRemovePlayer} />
          ))
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
      </div>
    );
  }
}

export default App;