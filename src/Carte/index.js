import React, { Component } from 'react';
import Header from '../Header';
import './Carte.css';
import Footer from '../Footer';

export default class Carte extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="container my-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-md-offset-1 d-flex justify-content-center">
                            <h1>La carte - Menzah Sidi Harazem - Restaurant &amp; Piscine à Fès</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h2>
                                Nos menus Petit-déjeuner <i className="fa fa-cutlery"></i>
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Menzah</div>
                            <div className="description"> Assiette variée de Mellaoui - Harcha - Jus d'orange - Boisson chaude au choix - Yaourt </div>
                        </div>
                        <div className="col-3">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Fassi</div>
                            <div className="description"> Tajine Khlie - Panier de pain maison - Jus d'orange - Boisson chaude au choix - Yaourt </div>
                        </div>
                        <div className="col-3">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Parisien</div>
                            <div className="description"> Assortissement de viennoiserie - Jus d'orange - Boisson chaude au choix - Yaourt </div>
                        </div>
                        <div className="col-3">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Hollondais</div>
                            <div className="description"> Toast pressé fromage et dinde fumé - 2 oeufs au plat - Jus d'orange - Boisson chaude au choix - Yaourt </div>
                        </div>
                        <div className="col-3">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Accompagnements</div>
                            <div className="description"> Miel - Amlou - Confiture - Jban - Fromage - Huile d'olive - Olives noires </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title italic">Extra accompagnements</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-8">
                            <div className="title">Mellaoui</div>
                        </div>
                        <div className="col-3">
                            <div className="title">5 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-8">
                            <div className="title">Harcha</div>
                        </div>
                        <div className="col-3">
                            <div className="title">12 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-8">
                            <div className="title">Beurre - Miel - Olives - Huile d'olive - Confiture </div>
                        </div>
                        <div className="col-3">
                            <div className="title">5 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-8">
                            <div className="title">Fromage </div>
                        </div>
                        <div className="col-3">
                            <div className="title">1,5 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-8">
                            <div className="title">Harira </div>
                        </div>
                        <div className="col-3">
                            <div className="title">5 DH</div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h2>
                                Nos Entrées <i className="fa fa-cutlery"></i>
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Salade Menzah</div>
                            <div className="description"> Laitue - Pomme de terre - Riz - Concombre - Fromage rouge - Pêche - Ananas - Coeur de palmier - Crabe - Maïs - Poulet - Charcuterie - Sauce Menzah </div>
                        </div>
                        <div className="col-3">
                            <div className="title">50 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Salade Riche</div>
                            <div className="description"> Mélange de salades - Tomate - Crevettes - Riz - Maïs - Ananas - Avocat - Fromage - Gruyère - Concombre - Carottes rapèes - Coeur de palmier  </div>
                        </div>
                        <div className="col-3">
                            <div className="title">50 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Salade Niçoise (grande)</div>
                            <div className="description"> Mélange de salades - Tomate - Carottes rapées - Concombre - Pomme de terre - Maïs - Thon </div>
                        </div>
                        <div className="col-3">
                            <div className="title">50 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Salade Niçoise (moyenne)</div>
                            <div className="description"> Mélange de salades - Tomate - Carottes rapées - Concombre - Pomme de terre - Maïs - Thon </div>
                        </div>
                        <div className="col-3">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Salade Niçoise (petite)</div>
                            <div className="description"> Mélange de salades - Tomate - Carottes rapées - Concombre - Pomme de terre - Maïs - Thon </div>
                        </div>
                        <div className="col-3">
                            <div className="title">20 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Salade Marocaine</div>
                            <div className="description"> Tomate -Oignons - Concombre </div>
                        </div>
                        <div className="col-3">
                            <div className="title">10 DH</div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h2>
                                Nos Tajines <i className="fa fa-cutlery"></i>
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Tajine Viande (moyen)</div>
                        </div>
                        <div className="col-3">
                            <div className="title">50 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Tajine Viande (grand)</div>
                        </div>
                        <div className="col-3">
                            <div className="title">70 DH</div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h2>
                                Nos Pizzas <i className="fa fa-cutlery"></i>
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Pizza Menzah</div>
                            <div className="description"> Sauce tomate - Mozzarella - Fromage rouge - Poulet - Viande hachée - Charcuterie - Crevettes - Champignons - Origan </div>
                        </div>
                        <div className="col-3">
                            <div className="title">70 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Pizza Fruits de mer</div>
                            <div className="description"> Sauce tomate - Mozzarella - Crevettes - Calamars - Champignons - Origan </div>
                        </div>
                        <div className="col-3">
                            <div className="title">70 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Pizza Bolognaine</div>
                            <div className="description"> Sauce Tomate - Mozzarella - Viande hachée - Origan </div>
                        </div>
                        <div className="col-3">
                            <div className="title">60 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Pizza Margarita</div>
                            <div className="description"> Sauce Tomate - Mozzarella - Tomate cerise - Olives noire - Origan </div>
                        </div>
                        <div className="col-3">
                            <div className="title">50 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Pizza Végétariaine</div>
                            <div className="description"> Sauce tomate - Mozzarella - Légumes grillés - Tomate cerise - Oignons - Origan </div>
                        </div>
                        <div className="col-3">
                            <div className="title">60 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Pizza 4 saisons</div>
                            <div className="description"> Sauce tomate - Mozzarella - Viande hachée - Dinde - Crevette - Calamar - Charcuterie - Origan </div>
                        </div>
                        <div className="col-3">
                            <div className="title">70 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Pizza 4 Fromages</div>
                        </div>
                        <div className="col-3">
                            <div className="title">60 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title italic">Mini Pizzas</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-8">
                            <div className="title">Pizza Menzah</div>
                        </div>
                        <div className="col-3">
                            <div className="title">50 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-8">
                            <div className="title">Pizza Fruits de mer</div>
                        </div>
                        <div className="col-3">
                            <div className="title">50 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-8">
                            <div className="title">Pizza Bolognaise</div>
                        </div>
                        <div className="col-3">
                            <div className="title">40 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-8">
                            <div className="title">Pizza Margarita</div>
                        </div>
                        <div className="col-3">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-8">
                            <div className="title">Pizza Végétariaine</div>
                        </div>
                        <div className="col-3">
                            <div className="title">40 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-8">
                            <div className="title">Pizza 4 Saisons</div>
                        </div>
                        <div className="col-3">
                            <div className="title">50 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-8">
                            <div className="title">Pizza 4 Fromages</div>
                        </div>
                        <div className="col-3">
                            <div className="title">40 DH</div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h2>
                                Nos Poissons <i className="fa fa-cutlery"></i>
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Friture mixte</div>
                            <div className="description"> Crevettes - Calamar - Sole - Mérlan </div>
                        </div>
                        <div className="col-3">
                            <div className="title">70 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Tajine PilPil</div>
                        </div>
                        <div className="col-3">
                            <div className="title">45 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Tajine Poissons</div>
                        </div>
                        <div className="col-3">
                            <div className="title">70 DH</div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h2>
                                Nos Paninis <i className="fa fa-cutlery"></i>
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Fruits de mer</div>
                            <div className="description"> Crevettes - Calamar - Champignons - Fromage </div>
                        </div>
                        <div className="col-3">
                            <div className="title">35 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Viande hachée</div>
                            <div className="description"> Viande hachée - Fromage </div>
                        </div>
                        <div className="col-3">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Poulet</div>
                            <div className="description"> Dinde - Fromage </div>
                        </div>
                        <div className="col-3">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Charcuterie</div>
                            <div className="description"> Charcuterie - Fromage </div>
                        </div>
                        <div className="col-3">
                            <div className="title">25 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">mixte</div>
                        </div>
                        <div className="col-3">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h2>
                                Nos Sandwichs <i className="fa fa-cutlery"></i>
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Panaché</div>
                        </div>
                        <div className="col-3">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Viande hachée</div>
                        </div>
                        <div className="col-3">
                            <div className="title">25 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="title">Dinde</div>
                        </div>
                        <div className="col-3">
                            <div className="title">25 DH</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}