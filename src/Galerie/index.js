import React, { Component } from 'react';
import Header from '../Header';
import OwlCarousel from 'react-owl-carousel';
import Footer from '../Footer';
import MetaData from '../metadata';

export default class Galerie extends Component {
    render () {
        return (
           <div>
               <Header />
               <MetaData title="Galerie - Menzah Resto café - photothéque" meta={[{ name: "robots", content: "index,follow" }]}/>
               <div className="container my-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-md-offset-1 d-flex justify-content-center">
                            <h1>Un avant-goût sélectionné rien que pour vous</h1>
                        </div>
                    </div>
                   <div className="row">
                       <div className="hidden-sm-down col-12">
                            <OwlCarousel className="owl-theme" loop margin={10} autoplay items={2}>
                                <div className="owl-item"><img src="/img/2.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/3.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/6.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/7.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/12.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/1.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/5.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/8.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/4.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/9.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/10.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/13.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/14.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/15.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/11.jpg" alt="café intérieur Menzah"/></div>
                            </OwlCarousel>
                        </div>
                        <div className="hidden-md-up col-12">
                            <OwlCarousel className="owl-theme" loop margin={10} autoplay items={1}>
                                <div className="owl-item"><img src="/img/2.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/3.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/6.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/12.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/1.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/5.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/7.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/8.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/4.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/9.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/10.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/13.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/14.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/15.jpg" alt="café intérieur Menzah"/></div>
                                <div className="owl-item"><img src="/img/11.jpg" alt="café intérieur Menzah"/></div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}