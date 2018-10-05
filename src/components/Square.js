import React, { Component } from 'react';
import styles from '../styles/Square.css'

export default class Square extends Component {

    constructor(props) {
        super(props)
    }

    getClassName() {
        return styles.emptysquare
    }

    play() {
        if ( this.props.value === '' )
            this.props.play(this.props.id)
    }

    render() {
        return (
            <div 
                onClick={this.play.bind(this)} 
                className={this.getClassName()}>
                    {this.props.value}
            </div>
        )
    }

}
export default Square;