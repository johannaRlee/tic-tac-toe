import React, { Component } from 'react';
import Square from './Square';
// import GameStatus from './GameStatus';
import '../styles/BoardGame.css';

export default class BoardGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentPlayer: 'X',
          turnNumber: 0,
          squares: Array(9).fill(null),
          winner: null
        };

      this.updateSquare = this.updateSquare.bind(this);
      this.calculateWinner = this.calculateWinner.bind(this);
    }

    updateSquare(squarePosition, player){
      let updatedSquares = this.state.squares;

      updatedSquares[squarePosition] = player;

      let winner = this.calculateWinner(updatedSquares);

      this.setState({
        currentPlayer: this.state.currentPlayer == 'X' ? 'O' : 'X',
        turnNumber: this.state.turnNumber + 1,
        squares:updatedSquares,
        winner: winner
      });
    }

    calculateWinner(squares){ 

      let squaresToCheck = 
      [ [0,1,2], //Horizontal
        [3,4,5],
        [6,7,8],
        
        [0,4,8], // Diagonal
        [2,4,6],
        
        [1,4,7], // Vertical
        [2,5,8],
        [0,3,6],
      ];

      for(let i = 0; i < squaresToCheck.length; i++){
        let check = squaresToCheck[i];
        let isXWinner = check.every(function(squareIndex){
          return squares[squareIndex] == 'X'
        });

        if(isXWinner) return 'Winner is X!';

        let isOWinner = check.every(function(squareIndex){
          return squares[squareIndex] == 'O'
        });

        if(isOWinner) return 'Winner is O!';
      }

      return null;
    }

    makeSquare(squarePosition){
      return <Square positionId={squarePosition} onClick={this.updateSquare} currentPlayer={this.state.currentPlayer}/>
    }

    render(){
      return (
        <div>
          <div className="container">
            <div className="row">
              {this.makeSquare(0)}
              {this.makeSquare(1)}
              {this.makeSquare(2)}
            </div>
            <div className="row">
              {this.makeSquare(3)}
              {this.makeSquare(4)}
              {this.makeSquare(5)}
            </div>
            <div className="row">
              {this.makeSquare(6)}
              {this.makeSquare(7)}
              {this.makeSquare(8)}
            </div>
          </div>
          <div>{this.state.winner}</div>
        </div>
      );
    }
}