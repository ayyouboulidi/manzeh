import React, { Component } from 'react';
import Header from '../Header';
import './Reservation.css';
import Footer from '../Footer';
import MetaData from '../metadata';

export default class Reservation extends Component {
    render () {
        return (
            <div>
                <Header />
                <MetaData 
                    title="Réservation -restaurant restau fès sidi harazem menzeh manzeh manzah menzah café piscine Resto - Réservez votre table" 
                    meta={[
                        { name: "robots", content: "index,follow" },
                        { name: "description", content: "Pour n'importe quel événement, vous pouvez réserver le restaurant ou la piscine en nous contactant sur nos numéros afficher sur la page." }
                    ]}/>
                <div className="container my-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-md-offset-1 d-flex justify-content-center">
                            <h1>Réservation- Menzah Sidi Harazem - Restaurant &amp; Piscine à Fès</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h2>
                                Pour vos événements, vos fêtes, ou juste pour manger : Réservez, c'est gratuit.
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-8">
                            <div className="title">Nous contacter : Réstaurant</div>
                            <div className="description"> Réservation du restaurant en appelant le 0535690718 </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-8">
                            <div className="title">Nous contacter : Piscine</div>
                            <div className="description"> Réservation de la piscine en appelant le 0629239859 ou 0666959077 </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}