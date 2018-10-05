import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import BoardGame from './components/BoardGame.js'
import GameStatus from './components/GameStatus.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tic Tac Toe</h1>
        </header>
     <BoardGame />
     <GameStatus />
     
    );
  }
}

export default App;
