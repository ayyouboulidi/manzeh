import React, { Component } from 'react';
import Header from '../Header';
import './Carte.css';

export default class Carte extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="container my-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-md-offset-1">
                            <h1>La carte - Menzah Sidi Harazem - Restaurant &amp; Piscine à Fès</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h2 style={{color: "#ad2727 !important", fontSize: "20px !important"}}>
                                LES MENUS Petit déjeuner <i className="fa fa-cutlery"></i>
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Menzah</div>
                            <div className="description"> Assiette variée de Mellaoui - Harcha - Jus d'orange - Boisson chaude au choix - Yaourt </div>
                        </div>
                        <div className="col-2">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Fassi</div>
                            <div className="description"> Tajine Khlie - Panier de pain maison - Jus d'orange - Boisson chaude au choix - Yaourt </div>
                        </div>
                        <div className="col-2">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Parisien</div>
                            <div className="description"> Assortissement de viennoiserie - Jus d'orange - Boisson chaude au choix - Yaourt </div>
                        </div>
                        <div className="col-2">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Hollondais</div>
                            <div className="description"> Toast pressé fromage et dinde fumé - 2 oeufs au plat - Jus d'orange - Boisson chaude au choix - Yaourt </div>
                        </div>
                        <div className="col-2">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Accompagnements</div>
                            <div className="description"> Miel - Amlou - Confiture - Jban - Fromage - Huile d'olive - Olives noires </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Extra accompagnements</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-9">
                            <div className="title">Mellaoui</div>
                        </div>
                        <div className="col-2">
                            <div className="title">5 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-9">
                            <div className="title">Harcha</div>
                        </div>
                        <div className="col-2">
                            <div className="title">12 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-9">
                            <div className="title">Beurre - Miel - Olives - Huile d'olive - Confiture </div>
                        </div>
                        <div className="col-2">
                            <div className="title">5 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-9">
                            <div className="title">Fromage </div>
                        </div>
                        <div className="col-2">
                            <div className="title">2 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-9">
                            <div className="title">Harira </div>
                        </div>
                        <div className="col-2">
                            <div className="title">5 DH</div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h2 style={{color: "#ad2727 !important", fontSize: "20px !important"}}>
                                LES pizzas <i className="fa fa-cutlery"></i>
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Pizza Menzah</div>
                            <div className="description"> Sauce tomate - Mozzarella - Fromage rouge - Poulet - Viande hachée - Charcuterie - Crevettes - Champignons - Origan </div>
                        </div>
                        <div className="col-2">
                            <div className="title">70 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Pizza Fruits de mer</div>
                            <div className="description"> Sauce tomate - Mozzarella - Crevettes - Calamars - Champignons - Origan </div>
                        </div>
                        <div className="col-2">
                            <div className="title">70 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Pizza Bolognaine</div>
                            <div className="description"> Sauce Tomate - Mozzarella - Viande hachée - Origan </div>
                        </div>
                        <div className="col-2">
                            <div className="title">60 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Pizza Margarita</div>
                            <div className="description"> Sauce Tomate - Mozzarella - Tomate cerise - Olives noire - Origan </div>
                        </div>
                        <div className="col-2">
                            <div className="title">50 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Pizza Végétariaine</div>
                            <div className="description"> Sauce tomate - Mozzarella - Légumes grillés - Tomate cerise - Oignons - Origan </div>
                        </div>
                        <div className="col-2">
                            <div className="title">60 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Pizza 4 saisons</div>
                            <div className="description"> Sauce tomate - Mozzarella - Viande hachée - Dinde - Crevette - Calamar - Charcuterie - Origan </div>
                        </div>
                        <div className="col-2">
                            <div className="title">60 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Pizza 4 Fromages</div>
                        </div>
                        <div className="col-2">
                            <div className="title">60 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10">
                            <div className="title">Mini Pizzas</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-9">
                            <div className="title">Pizza Menzah</div>
                        </div>
                        <div className="col-2">
                            <div className="title">50 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-9">
                            <div className="title">Pizza Fruits de mer</div>
                        </div>
                        <div className="col-2">
                            <div className="title">50 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-9">
                            <div className="title">Pizza Bolognaise</div>
                        </div>
                        <div className="col-2">
                            <div className="title">40 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-9">
                            <div className="title">Pizza Margarita</div>
                        </div>
                        <div className="col-2">
                            <div className="title">30 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-9">
                            <div className="title">Pizza Végétariaine</div>
                        </div>
                        <div className="col-2">
                            <div className="title">40 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-9">
                            <div className="title">Pizza 4 Saisons</div>
                        </div>
                        <div className="col-2">
                            <div className="title">40 DH</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="offset-1 col-9">
                            <div className="title">Pizza 4 Fromages</div>
                        </div>
                        <div className="col-2">
                            <div className="title">40 DH</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}