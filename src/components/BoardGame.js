import React, { Component } from 'react';

class BoardGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: new Array(9)
                .map(function(item,index) {
                    return {
                        isX: false,
                        isPlayed: false,
                        turnId: -1,
                        positionId: index
                    };
                }),
            currentPlayer: 'X',
            currentTurn: 0
        };

        this.onPlayTurn = this.onPlayTurn.bind(this);
    }

    onPlayTurn(positionId) {
        // find the position
        var foundSquare = this.state.squares[positionId];

        if(foundSquare.isPlayed){
            //error
        }

        // update foundSquare
        foundSquare.isPlayed = true;
        foundSquare.isX = this.state.currentPlayer == 'X';
        foundSquare.turnId = this.state.currentTurn;
        
        var newSquares = this.state.squares;
        newSquares[positionId] = foundSquare;
        
        this.setState({
            squares: newSquares,
            currentPlayer: this.state.currentPlayer == 'X' ? 'O' : 'X',
            currentTurn: this.state.currentTurn + 1
        });
    }

}