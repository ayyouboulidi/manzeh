import React, { Component } from 'react';
import Header from '../Header';
import OwlCarousel from 'react-owl-carousel';
import Footer from '../Footer';

export default class Galerie extends Component {
    render () {
        return (
           <div>
               <Header />
               <div className="container my-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-md-offset-1 d-flex justify-content-center">
                            <h1>Un avant-goût sélectionné rien que pour vous</h1>
                        </div>
                    </div>
                   <div className="row">
                       <div className="hidden-sm-down col-12">
                            <OwlCarousel className="owl-theme" loop margin={10} autoplay items={2}>
                                <div className="owl-item"><img src="/img/cafe-interieur.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/cafe-interieur-2.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage2.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage3.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/piscine.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/cafe.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage2.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage3.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage 4.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage 5.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/piscine.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/piscine2.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/piscine 2.jpg" alt="café intérieur Menzah"/></div>
                            </OwlCarousel>
                        </div>
                        <div className="hidden-md-up col-12">
                            <OwlCarousel className="owl-theme" loop margin={10} autoplay items={1}>
                                <div className="owl-item"><img src="/img/cafe-interieur.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/cafe-interieur-2.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage2.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage3.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/piscine.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/cafe.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage2.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage3.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage 4.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/paysage 5.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/piscine.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/piscine2.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/piscine 2.jpg" alt="café intérieur Menzah"/></div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}