import React, { Component } from 'react';
import { Link } from 'react-router';
import './Header.css';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuDisplay: false
        }
    }

    togglemenu = () => {
        this.setState({menuDisplay: !this.state.menuDisplay})
    }

    render () {
        return (
            <div>
                <div className=" hidden-md-up container">
                    <div className="row">
                        <div className="col-10">
                            <Link to="/"><img src="/img/logo.png" style={{width: "50px", height:"50px"}} alt="" /></Link>
                        </div>
                        <div className="col-2 clickable" onClick={this.togglemenu}>
                            <img src="/img/menu.png" style={{width: "50px", height:"50px"}} alt="menu"/>
                        </div>
                    </div>
                    {this.state.menuDisplay ?
                    <div className="row index">
                        <div className="container">
                            <div className="row height border-top">
                                <Link to="/" className="link col-12 clickable">
                                    <span>Accueil</span>
                                </Link>
                            </div>
                            <div className="row height border-top">
                                <Link to="/galerie-photo" className="link col-12 clickable">
                                    <span>Galerie</span>
                                </Link>
                            </div>
                            <div className="row height border-top">
                                <Link to="/le-resto" className="link col-12 clickable">
                                    <span>Restaurant</span>
                                </Link>
                            </div>
                            <div className="row height border-top">
                                <Link to="/la-carte" className="link col-12 clickable">
                                    <span>Carte</span>
                                </Link>
                            </div>
                            <div className="row height border-top">
                                <Link to="/piscine" className="link col-12 clickable">
                                    <span>Piscine</span>
                                </Link>
                            </div>
                            <div className="row height border-top border-bottom">
                                <Link to="/reservation" className="link col-12 clickable">
                                    <span>Réservation</span>
                                </Link>
                            </div>	
                        </div>
                    </div>: null}
                </div>
                <div className="hidden-sm-down container mt-3 borders">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-2 align-self-center">
                            <Link to="/" className="link"><span>Accueil</span></Link>
                        </div>
                        <div className="col-md-2 align-self-center">
                            <Link to="/le-resto" className="link"><span>Restaurant</span></Link>
                        </div>
                        <div className="col-md-1 align-self-center">
                            <Link to="/galerie-photo" className="link"><span>Galerie</span></Link>
                        </div>
                        <div className="col-md-1 align-self-center">
                            <Link to="/" className="link"><img src="/img/logo.png" style={{width: "50px", height:"50px"}} alt="" /></Link>
                        </div>
                        <div className="col-md-2 align-self-center">
                            <Link to="/la-carte" className="link"><span>Carte</span></Link>
                        </div>
                        <div className="col-md-2 align-self-center">
                            <Link to="/piscine" className="link"><span>Piscine</span></Link>
                        </div>
                        <div className="col-md-1 align-self-center">
                            <Link to="/reservation" className="link"><span>Réservation</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}