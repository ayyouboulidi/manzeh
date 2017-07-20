import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return (
            <div>
                <div className="container full-bg visible-xs sm-navbar">
                    <nav>
                        <div className="row">
                            <div className="navbar-inner">
                                <ul className="main-menu nav">
                                    <li>
                                        <header className="small-logo">
                                            <a id="mobile-home" href="/" title="">
                                                <img src="/img/logo.png" alt="Café restaurant menzah sidi harazem à Fès" />
                                            </a>
                                        </header>
                                    </li>
                                    <li className="reorder">
                                        <a href="#" title="" className="exclude" data-djax-exclude="true"><i className="fa fa-bars"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div id="mobile-nav" className="visible-xs">
                    <div id="flyout-container">
                        <ul id="menu-mobile" className="nav flyout-menu">
                            <li id="menu-item-1459" className="home menu-item menu-item-type-custom menu-item-object-custom">
                                <a  href="/">Accueil</a><span className="open-children"><i className="fa fa-angle-down"></i></span>
                            </li>
                            <li id="menu-item-1655" className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a  href="/le-resto/">Le resto</a><span className="open-children"><i className="fa fa-angle-down"></i></span>
                            </li>
                            <li id="menu-item-1652" className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a  href="/piscine/">Piscine</a><span className="open-children"><i className="fa fa-angle-down"></i></span>
                            </li>
                            <li id="menu-item-1653" className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a  href="/la-carte/">La carte</a><span className="open-children"><i className="fa fa-angle-down"></i></span>
                            </li>
                            <li id="menu-item-1461" className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a  href="/reservation/">Réservation</a><span className="open-children"><i className="fa fa-angle-down"></i></span>
                            </li>
                            <li id="menu-item-1463" className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a  href="http://www.cepagegourmand.fr/contact/">Infos</a><span className="open-children"><i className="fa fa-angle-down"></i></span>
                            </li>
                        </ul>			
                    </div>
                </div>		
                <div className="navbar hidden-xs">
                    <div className="container">
                        <div className="row">
                            <nav className="col-md-12 clearfix">
                                <ul id="menu-home" className="main-nav white-nav single-separator">
                                    <li id="menu-item-1672" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
                                        <div>
                                            <a className="content-link Accueil-wrapper" href="/"><span>Accueil</span><i style={{color:"#ad2727 !important"}} className="fa fa-circle"></i></a>
                                        </div>
                                    </li>
                                    <li id="menu-item-1561" className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <div>
                                            <a className="content-link Le-resto-wrapper" href="/le-resto/"><span>Le resto</span><i style={{color:"#ad2727 !important" }}className="fa fa-cutlery"></i></a>
                                        </div>
                                    </li>
                                    <li id="menu-item-1462" className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <div>
                                            <a className="content-link Infos-wrapper" href="/contact/"><span>Infos</span><i style={{color:"#ad2727 !important"}} className="fa fa-envelope"></i></a>
                                        </div>
                                    </li>
                                    <li id="menu-item-1458" className="menu-slide menu-image home menu-item menu-item-type-custom menu-item-object-custom">
                                        <div>
                                            <a className="content-link"  title="logo" href="/"><img src="/img/logo.png" alt="" /></a>
                                        </div>
                                    </li>
                                    <li id="menu-item-1651" className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <div>
                                            <a className="content-link La-carte-wrapper" href="/la-carte/"><span>La carte</span><i style={{color:"#ad2727 !important"}} className="fa fa-cutlery"></i></a>
                                        </div>
                                    </li>
                                    <li id="menu-item-1650" className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <div>
                                            <a className="content-link Les-vins-wrapper" href="/piscine/"><span>Piscine</span><i style={{color:"#ad2727 !important"}} className="fa fa-glass"></i></a>
                                        </div>
                                    </li>
                                    <li id="menu-item-1460" className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <div>
                                            <a className="content-link Réservation-wrapper" href="/reservation/"><span>Réservation</span><i style={{color:"#ad2727 !important"}} className="fa fa-calendar"></i></a>
                                        </div>
                                    </li>
                                </ul>					
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}