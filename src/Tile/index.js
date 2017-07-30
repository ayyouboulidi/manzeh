import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './Tile.css';

export default class Tiles extends Component {

    redirect = () => browserHistory.push(this.props.to)
    
    render () {
        return (
            <div onClick={this.redirect} className="square-bg clickable link" style={{backgroundImage:`url(${this.props.img})`, height: `${this.props.height}`}}>
                <div className="square-header">
                    {this.props.children[0]}
                </div>
                <div className="square-post-hover">
                    {this.props.children[1]}
                </div>
            </div>
        )
    }
}