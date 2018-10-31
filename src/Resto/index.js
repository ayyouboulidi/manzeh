import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import OwlCarousel from 'react-owl-carousel';
import MetaData from '../metadata';
import './Resto.css';

export default class Resto extends Component {
    render () {
        return (
           <div>
                <Header />
                <MetaData 
                    title="Restaurant -restaurant restau fès sidi harazem menzeh manzeh manzah menzah café piscine Resto - le Resto" 
                    meta={[
                        { name: "robots", content: "index,follow" },
                        { name: "description", content: "Pour des repas faites par notre chef, venez diguster les meilleurs plats du restaurant Menzah Sidi harazem." }
                    ]}/>
                <div className="container my-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-md-offset-1 d-flex justify-content-center">
                            <h1>Un petit creux? rejoignez-nous...</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h2>
                                Horaires d'ouverture
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Restaurant & Café</div>
                            <div className="description"> Du Lundi au Dimanche 7h-00h </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-12">
                            <OwlCarousel className="owl-theme" loop margin={10} autoplay items={1}>
                                <div className="owl-item"><img src="/img/1.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/2.jpg" alt="café intérieur Menzah"/></div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}