import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Square.css'; 

export default class Square extends Component {
    constructor(props) {
        super(props);

        // props has: currentPlayer, turnNumber, positionId

        this.state = {
            player: null
        };

        this.onClick = this.onClick.bind(this);
    }
    
    onClick(event){
        if(this.state.player){
            return;
        }

        this.setState({
            player: this.props.currentPlayer
        });

        this.props.onClick(this.props.positionId,this.props.currentPlayer);
    }

    render() {
        return (
            <div className="col-4">
                <button className="btn" onClick={this.onClick}>{this.state.player ? this.state.player : ''}</button>
            </div>
        );
    }
}