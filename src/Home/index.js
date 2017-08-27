import React, { Component } from 'react';
import Header from '../Header';
import Tile from '../Tile';
import './Home.css';
import Footer from '../Footer';

export default class Home extends Component {
    render(){
        return(
		<div>
		<Header />
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-6 col-12 py-2">
					<Tile img="/img/cafe.jpg" to="/le-resto" height="410px">	
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
				 <div className="col-md-6 col-12 py-2">
					 <div className="container-fluid p-0">
						<div className="row">
							<div className="col" style={{marginBottom: "10px"}}>
								<Tile img="/img/paysage4.jpg" to="/galerie-photo" height="200px">	
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
						<div className="row">
							<div className="col">
								<Tile img="/img/piscine4.jpg" to="/piscine" height="200px">	
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
			</div>
			  <div className="row">
				<div className="col-md-6 col-12 py-2">
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
				<div className="col-md-6 col-12 py-2">
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
		<Footer />
	</div>

        )
    }
}