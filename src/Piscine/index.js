import React, { Component } from 'react';
import Header from '../Header';
import './Piscine.css';
import OwlCarousel from 'react-owl-carousel';
import Footer from '../Footer';

export default class Piscine extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="container my-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-md-offset-1 d-flex justify-content-center">
                            <h1>La piscine - Menzah Sidi Harazem - Restaurant &amp; Piscine à Fès</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h2>
                                Horaires d'ouverture & Prix
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Piscine pour Femmes</div>
                            <div className="description"> Du Lundi au Dimanche 7h-18h </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-1 col-9">
                            <div className="title">Adultes</div>
                        </div>
                        <div className="col-2">
                            <div className="title">50 DH</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-1 col-9">
                            <div className="title">Enfants</div>
                        </div>
                        <div className="col-2">
                            <div className="title">20 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Piscine pour Enfants</div>
                            <div className="description"> Du Lundi au Dimanche 7h-18h </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-1 col-9">
                            <div className="title">Enfants</div>
                        </div>
                        <div className="col-2">
                            <div className="title">20 DH</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-1 col-9">
                            <div className="title">Compagnant</div>
                        </div>
                        <div className="col-2">
                            <div className="title">10 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                       <div className="hidden-sm-down col-12">
                            <OwlCarousel className="owl-theme" loop margin={10} autoplay items={2}>
                                <div className="owl-item"><img src="/img/piscine 2.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/piscine3.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/piscine.jpg" alt="café intérieur Menzah"/></div>
                            </OwlCarousel>
                        </div>
                        <div className="hidden-md-up col-12">
                            <OwlCarousel className="owl-theme" loop margin={10} autoplay items={1}>
                                <div className="owl-item"><img src="/img/piscine 2.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/piscine3.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/piscine.jpg" alt="café intérieur Menzah"/></div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}