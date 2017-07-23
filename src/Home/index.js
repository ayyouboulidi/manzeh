import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router';
import Tile from '../Tile';
import './Home.css';

export default class Home extends Component {
    render(){
        return(
		<div>
		<Header />
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-6">
					<Tile img="/img/cafe.jpg" to="/le-resto" height="400px">	
						<div>
							<p className="title">Découvrez le restaurant</p>
							<p className="description">en famille, entre collègues, entre amis ...</p>
						</div>
						<div>
							<p className="title">Salle intérieure, terrasse et piscine</p>
							<p className="description">Découvrez un lieu de convivialité et de plaisir </p>
						</div>
					</Tile>
				</div>
				 <div className="col-md-6">
					<div className="row pb-1">
						<div className="col-md-6">
							<Tile img="/img/cafe-interieur.jpg" to="/le-resto" height="200px">	
								<div>
									<p className="title">Le restaurant</p>
									<p className="description">paysages</p>
								</div>
								<div>
									<p className="title">Découvrez</p>
									<p className="description">Les alentours </p>
								</div>
							</Tile>
						</div>
						<div className="col-md-6">
							<Tile img="/img/paysage2.jpg" to="/galerie-photo" height="200px">	
								<div>
									<p className="title">Photothèque</p>
									<p className="description">Quelques photos</p>
								</div>
								<div>
									<p className="title">Quelques images</p>
									<p className="description">du restaurant </p>
								</div>
							</Tile>
						</div>
					</div>
					<div className="row mb-1">
						<div className="col-md-12">
							<Tile img="/img/piscine2.jpg" to="/piscine" height="200px">	
								<div>
									<p className="title">Piscine</p>
									<p className="description">Bronzez-vous!</p>
								</div>
								<div>
									<p className="description">.... </p>
								</div>
							</Tile>
						</div>
					</div>
				</div> 
			</div>
			  <div className="row">
				<div className="col-md-3">
					<Tile img="http://www.cepagegourmand.fr/wp-content/uploads/2014/08/IMG_1141.jpg" to="/la-carte" height="200px">	
						<div>
							<p className="title">La carte</p>
							<p className="description">Une cuisine de saison</p>
						</div>
						<div>
							<p className="title">Découvrez les plats de Notre chef cuisine</p>
							<p className="description">et profitez de nos menus </p>
						</div>
					</Tile>
				</div>
				<div className="col-md-3">
					<Tile img="http://www.cepagegourmand.fr/wp-content/uploads/2014/08/IMG_1188.jpg" to="/la-carte" height="200px">	
						<div>
							<p className="title">La carte</p>
							<p className="description">Une cuisine de saison</p>
						</div>
						<div>
							<p className="title">Découvrez les plats de Notre chef cuisine</p>
							<p className="description">et profitez de nos menus </p>
						</div>
					</Tile>
				</div>
				<div className="col-md-6">
					<Tile img="http://www.cepagegourmand.fr/wp-content/uploads/2014/08/IMG_1101.jpg" to="/reservation" height="200px">	
						<div>
							<p className="title">Réservez votre table</p>
							<p className="description">en un appel ou message</p>
						</div>
						<div>
							<p className="title">Nom Prénom XX XX</p>
							<p className="description">vous attendent </p>
						</div>
					</Tile>
				</div>
			</div>  
		</div>
		<div className="container">
			<div className="row mt-5">
				<div className="col-md-6">
					<div className="widget-wrapper">
						<h3 className="widget-title">Menzah Sidi Harazem</h3>			
						<div className="textwidget">Manzeh Sidi Harazem • Sidi Harazem Fès </div>
						<div className="textwidget"> • Café restau : 0535690718 </div>
						<div className="textwidget"> • Piscine : 0629239859 / 0666959077 </div>
					</div>
					<div className="widget-wrapper">			
						<div className="textwidget"> 
							<a href="http://www.github.com/ayyouboulidi" className="link"> Réalisation : Ayyoub oulidi </a>
						</div>
					</div>
				</div>
			</div> 
		</div>
	</div>

        )
    }
}