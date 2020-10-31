import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import Player from "./components/Player";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4},
    ]
  }

  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer: ', id);
    // 로직 작성
    this.setState((prevState) => {
      // id를 제외한 상태를 업데이트해야 한다.
      const players = prevState.players.filter((player) => player.id !== id);
      return { players };
    })
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title='My Scoreboard' totalPlayers={11}/>

        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id} id={player.id}
                    removePlayer={this.handleRemovePlayer} />
          ))
        }
      </div>
    );
  }
}

export default App;