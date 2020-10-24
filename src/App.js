import React from 'react';
import './App.css';

const Header = (props) => {
  console.log(props);
  // destruct assignment
  const {title, totalPlayers} = props;
  return (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <span className='stats'>Players: {totalPlayers}</span>
    </header>
  );
}

// 3) 자식이 함수선언문에 되도록 애로우 함수 사용
const Player = (props) => (
  <div className='player'>
    <span className='player-name'>
      <button className='remove-player'
              onClick={(e) => props.removePlayer(props.id)}>x</button>
    </span>
    <span className='player-name'>{props.name}</span>
    <Counter/>
  </div>
);


class Counter extends React.Component {
  state = {
    score: 0,
    a: 3
  }

  constructor(props) {
    super(props);
    // 1) this.incrementScore = this.incrementScore.bind(this);
  }

  changeScore = (delta) => {
    // 2) arrow 펑션안의 this는 lexical this
    console.log(this);
    // 1. state를 변경하는 방법
    // this.state.score += 1;
    // this.setState({score: this.state.score + 1});
    // 2. merge 된다. : 기존 속성으 그대로 유지
    // 3. 비동기로 처리
    this.setState(prevState => ({
      score: prevState.score + delta
    }));
  }

  render() {
    return (
      <div className='counter'>
        <button className='counter-action decrement'
                onClick={() => this.changeScore(-1)}> - </button>
        <span className='counter-score'>{this.state.score}</span>
        <button className='counter-action increment'
                onClick={() => this.changeScore(1)}> + </button>
      </div>
    );
  }
}

// React.Component 상속받아야 한다
// render() 를 생성해야 한다
class App extends React.Component {

  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  }
  // 1) player 삭제 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer', id);

    // 로직 작성
    // 삭제 이므로 클릭하는 id 를 제외하고 필터함수를 사용하여 새로운 배열로 리턴
    // 리액트 함수 이전 상태인 prevState 사용
    this.setState(prevState => ({
      //const players = prevState.players.filter((player) => (player.id !== id))
      //return (players: players);

      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  // 2) removePlayer 키로 함수 실행
  render() {
    return (
      <div className='scoreboard'>
        <Header title='My Scoreboard' totalPlayers={11} />

        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id} id={player.id}
                    removePlayer={this.handleRemovePlayer}/>
          ))
        }
      </div>
    );
  }
}

export default App;
