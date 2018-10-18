import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Square.css'; 

export default class Square extends Component {
    constructor(props) {
        super(props);

        // props has: currentPlayer, turnNumber, positionId

        this.onClick = this.onClick.bind(this);
    }
    
    onClick(event){
        if(this.props.player){
            return;
        }

        this.props.onClick(this.props.positionId);
    }

    render() {

        return (
            <div className="col-4 square">
                <button className={'btn btn-block' + (this.props.isWinningSquare ? ' bg-warning' : '')} onClick={this.onClick}>{this.props.player ? this.props.player : ''}</button>
            </div>
        );
    }
}