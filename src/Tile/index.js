import React, { Component } from 'react';
import { Link } from 'react-router';
import './Tile.css';

export default class Tiles extends Component {

    render () {

        return (
            <div className="square-bg clickable" style={{backgroundImage:`url(${this.props.img})`, height: `${this.props.height}`}}>
                <Link to={this.props.to} className="link">
                    <div className="square-header">
                        {this.props.children[0]}
                    </div>
                    <div className="square-post-hover">
                        {this.props.children[1]}
                    </div>
                </Link>
            </div>
        )
    }
}