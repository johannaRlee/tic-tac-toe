import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import BoardGame from './components/BoardGame.js'
import 'bootstrap/dist/css/bootstrap.min.css';
// import GameStatus from './components/GameStatus.js'

// function Square(props) {
//   return (
//     <button className="square" onClick={prop.onClick}>
//     {prop.value}
//     </button>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tic Tac Toe</h1>
        </header>
   
      <BoardGame />
     </div>

    );
  }
}

export default App;
