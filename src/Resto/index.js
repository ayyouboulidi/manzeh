import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import OwlCarousel from 'react-owl-carousel';
import './Resto.css';

export default class Resto extends Component {
    render () {
        return (
           <div>
               <Header />
               <div className="container my-5">
                    <OwlCarousel className="owl-theme" loop margin={10} autoplay items={2}>
                        <div class="item"><img src="/img/cafe-interieur.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/cafe-interieur-2.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/paysage2.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/paysage3.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/piscine.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/cafe-interieur.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/cafe-interieur.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/cafe-interieur.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/cafe-interieur.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/cafe-interieur.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/cafe-interieur.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/cafe-interieur.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/cafe-interieur.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/cafe-interieur.jpg" alt="café intérieur Menzah"/></div>
                        <div class="item"><img src="/img/cafe-interieur.jpg" alt="café intérieur Menzah"/></div>
                    </OwlCarousel>
                </div>
                <Footer/>
            </div>
        )
    }
}