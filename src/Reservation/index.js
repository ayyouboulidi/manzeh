import React, { Component } from 'react';
import Header from '../Header';
import './Carte.css';

export default class Carte extends Component {
    render () {
        return (
            <div className="scroll-container">
			    <div id="frame">
				    <div id="content-wrapper">
                        <div className="dynamic-content Restaurant-wrapper" id="main-content">
                            <div className="slidee">
                                <div className="container">
                                    <Header />
                                    <div className="menu-container" style={{marginTop:'10rem'}}>
                                        <header className="row">
                                            <div className="col-md-10 col-md-offset-1">
                                                <h1 className="top-menu">La carte - Menzah Sidi Harazem - Restaurant &amp; Piscine à Fès</h1>
                                            </div>
                                        </header>
                                        <section className="row">
                                            {/* <div className="col-md-10 col-md-offset-1">
                                                <dl>
                                                    <dt>
                                                        <h2 style={{color: "#ad2727 !important", fontSize: "20px !important"}}>LE MENU Petit déjeuner <i className="fa fa-cutlery"></i></h2>
                                                    </dt>
                                                    <dd className="menu-list">
                                                        <section className="menu-item">
                                                            <p className="title" style={{color: "#ad2727", fontSize: "20px !important"}}>
                                                                <span>(Tous les jours du lundi au dimanche)</span>										
                                                            </p>
                                                            <div className="description" style={{color: "#a4a4a4", fontSize: "20px !important"}}>
                                                                Une entrée, un plat et un dessert différents chaque jour, avec un verre de vin ou sans alcool
                                                            </div>
                                                        </section>
                                                        <section className="price" style={{color: "#3a3836", fontSize: "20px !important"}}>
                                                            <span>20 €</span>
                                                        </section>
                                                    </dd>
                                                </dl>
                                            </div> */}
                                            <div className="col-md-10 col-md-offset-1">
                                                <dl>
                                                    <dt>
                                                        <h2 style={{color: "#ad2727 !important", fontSize: "20px !important"}}>
                                                            LES MENUS Petit déjeuner <i className="fa fa-cutlery"></i>
                                                        </h2>
                                                    </dt>
                                                    <dd className="menu-list">
                                                        <section className="menu-item">
                                                            <p className="title" style={{color: "#ad2727", fontSize: "20px !important"}}>
                                                                MENZAH
                                                            </p>
                                                            <div className="description" style={{color: "#a4a4a4", fontSize: "20px !important"}}></div>
                                                        </section>
                                                        <section className="price" style={{color: "#3a3836", fontSize: "20px !important"}}>
                                                            <span>3O DH</span>
                                                        </section>
                                                    </dd>
                                                    <dd className="menu-list">
                                                        <section className="menu-item">
                                                            <p className="title" style={{color: "#ad2727", fontSize: "20px !important"}}>
                                                                MENZAH
                                                            </p>
                                                            <div className="description" style={{color: "#a4a4a4", fontSize: "20px !important"}}>
                                                                (Assiettes variées Mellaoui-Harcha....)
                                                            </div>
                                                        </section>
                                                        <section className="price" style={{color: "#3a3836", fontSize: "20px !important"}}>
                                                            <span>3O DH</span>
                                                        </section>
                                                    </dd>
                                                    <dd className="menu-list">
                                                        <section className="menu-item">
                                                            <p className="title" style={{color: "#ad2727", fontSize: "20px !important"}}>
                                                                FASSI
                                                            </p>
                                                            <div className="description" style={{color: "#a4a4a4", fontSize: "20px !important"}}>
                                                                (Tajine Khlie....)
                                                            </div>
                                                        </section>
                                                        <section className="price" style={{color: "#3a3836", fontSize: "20px !important"}}>
                                                            <span>3O DH</span>
                                                        </section>
                                                    </dd>
                                                    <dd className="menu-list">
                                                        <section className="menu-item">
                                                            <p className="title" style={{color: "#ad2727", fontSize: "20px !important"}}>
                                                                Parisien
                                                            </p>
                                                            <div className="description" style={{color: "#a4a4a4", fontSize: "20px !important"}}>
                                                                (Assortissement vienoiseries....)
                                                            </div>
                                                        </section>
                                                        <section className="price" style={{color: "#3a3836", fontSize: "20px !important"}}>
                                                            <span>25 DH</span>
                                                        </section>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </section>
                                    </div>
                                </div>
	                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}