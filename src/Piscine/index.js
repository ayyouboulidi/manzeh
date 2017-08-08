import React, { Component } from 'react';
import Header from '../Header';
import './Piscine.css';
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
                        <div className="col-2">
                            <div className="title">50 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Piscine pour Enfants</div>
                            <div className="description"> Du Lundi au Dimanche 7h-18h </div>
                        </div>
                        <div className="col-2">
                            <div className="title">20 DH</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}