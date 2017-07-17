import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    render(){
        return(
	<div className="home page page-id-7 page-template page-template-restaurant-template-php woocommerce">
		<div className="container full-bg visible-xs sm-navbar">
			<nav>
				<div className="row">
					<div className="navbar-inner">
						<ul className="main-menu nav">
							<li>
								<header className="small-logo">
									<a id="mobile-home" href="http://www.cepagegourmand.fr" title="">
                                        <img src="/img/logo.png" alt="Café restaurant menzah sidi harazem à Fès" />
                                    </a>
								</header>
							</li>
							<li className="reorder">
								<a href="#" title="" className="exclude" data-djax-exclude="true"><i className="fa fa-bars"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		<div id="mobile-nav" className="visible-xs">
			<div id="flyout-container">
                <ul id="menu-mobile" className="nav flyout-menu">
					<li id="menu-item-1459" className="home menu-item menu-item-type-custom menu-item-object-custom">
						<a  href="/">Accueil</a><span className="open-children"><i className="fa fa-angle-down"></i></span>
					</li>
                    <li id="menu-item-1655" className="menu-item menu-item-type-post_type menu-item-object-page">
						<a  href="/le-resto/">Le resto</a><span className="open-children"><i className="fa fa-angle-down"></i></span>
					</li>
                    <li id="menu-item-1652" className="menu-item menu-item-type-post_type menu-item-object-page">
						<a  href="/piscine/">Piscine</a><span className="open-children"><i className="fa fa-angle-down"></i></span>
					</li>
                    <li id="menu-item-1653" className="menu-item menu-item-type-post_type menu-item-object-page">
						<a  href="/la-carte/">La carte</a><span className="open-children"><i className="fa fa-angle-down"></i></span>
					</li>
                    <li id="menu-item-1461" className="menu-item menu-item-type-post_type menu-item-object-page">
						<a  href="/reservation/">Réservation</a><span className="open-children"><i className="fa fa-angle-down"></i></span>
					</li>
                    <li id="menu-item-1463" className="menu-item menu-item-type-post_type menu-item-object-page">
						<a  href="http://www.cepagegourmand.fr/contact/">Infos</a><span className="open-children"><i className="fa fa-angle-down"></i></span>
					</li>
                </ul>			
            </div>
		</div>		
		<div className="navbar hidden-xs">
			<div className="container">
				<div className="row">
					<nav className="col-md-12 clearfix">
						<ul id="menu-home" className="main-nav white-nav single-separator">
							<li id="menu-item-1672" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
								<div>
									<a className="content-link Accueil-wrapper" href="/"><span>Accueil</span><i style={{color:"#ad2727 !important;"}} className="fa fa-circle"></i></a>
								</div>
							</li>
                            <li id="menu-item-1561" className="menu-item menu-item-type-post_type menu-item-object-page">
								<div>
									<a className="content-link Le-resto-wrapper" href="/le-resto/"><span>Le resto</span><i style={{color:"#ad2727 !important;" }}className="fa fa-cutlery"></i></a>
								</div>
							</li>
                            <li id="menu-item-1462" className="menu-item menu-item-type-post_type menu-item-object-page">
								<div>
									<a className="content-link Infos-wrapper" href="/contact/"><span>Infos</span><i style={{color:"#ad2727 !important;"}} className="fa fa-envelope"></i></a>
								</div>
							</li>
                            <li id="menu-item-1458" className="menu-slide menu-image home menu-item menu-item-type-custom menu-item-object-custom">
								<div>
									<a className="content-link"  title="logo" href="/"><img src="/img/logo.png" alt="" /></a>
								</div>
							</li>
                            <li id="menu-item-1651" className="menu-item menu-item-type-post_type menu-item-object-page">
								<div>
									<a className="content-link La-carte-wrapper" href="/la-carte/"><span>La carte</span><i style={{color:"#ad2727 !important;"}} className="fa fa-cutlery"></i></a>
								</div>
							</li>
                            <li id="menu-item-1650" className="menu-item menu-item-type-post_type menu-item-object-page">
								<div>
									<a className="content-link Les-vins-wrapper" href="/piscine/"><span>Piscine</span><i style={{color:"#ad2727 !important;"}} className="fa fa-glass"></i></a>
								</div>
							</li>
                            <li id="menu-item-1460" className="menu-item menu-item-type-post_type menu-item-object-page">
								<div>
									<a className="content-link Réservation-wrapper" href="/reservation/"><span>Réservation</span><i style={{color:"#ad2727 !important;"}} className="fa fa-calendar"></i></a>
								</div>
							</li>
                        </ul>					
                    </nav>
				</div>
			</div>
		</div>
		<div className="loader-container">
			<div>
				<i></i>
			</div>
		</div>
		<div className="scroll-container">
			<div id="frame">
				<div id="content-wrapper">
                    <div className="dynamic-content Restaurant-wrapper" id="main-content">
	                    <div className="container">
		                    <div id="restaurant" className="padding-wrapper">
			                    <div className="row">
                                    <div className="col-md-6">
                                        <div className="square square-big">
                                            <img className="icon" src='http://cepagegourmand.fr/wp-content/uploads/2014/07/icone1-40x40.png' alt="" />
                                            <a href="/le-resto">
												<div className="square-bg" style={{backgroundImage:"url('/img/cafe.jpg')"}}/>
												<div className="square-header">
													<p className="title">Découvrez le restaurant</p>
													<p className="description">en famille, entre collègues, entre amis ...</p>
												</div>
												<div className="square-post-hover">
													<p className="title">Salle intérieure, terrasse et piscine</p>
													<p className="description">Découvrez un lieu de convivialité et de plaisir </p>
												</div>
											</a>
										</div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
											<div className="col-md-6">
                                                <div className="square">
													<img className="icon" src='http://www.cepagegourmand.fr/wp-content/uploads/2014/07/icone1-40x40.png' alt="" />
													<a href="/">
														<div className="square-bg" style={{backgroundImage:"url('/img/cafe-interieur.jpg')"}}/>
														<div className="square-header">
															<p className="title">Le restaurant</p>
															<p className="description">paysages</p>
														</div>
														<div className="square-post-hover">
															<p className="title">Découvrez</p>
															<p className="description">Les alentours </p>
														</div>
													</a>
												</div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="square">
													<img className="icon" src='http://www.cepagegourmand.fr/wp-content/uploads/2014/07/icone1-40x40.png' alt="" />
													<a href="/galerie-photo/">
														<div className="square-bg" style={{backgroundImage:"url('/img/cafe-interieur-2.jpg')"}}/>
														<div className="square-header">
															<p className="title">Photothèque</p>
															<p className="description">Quelques photos du restaurant</p>
														</div>
														<div className="square-post-hover">
															<p className="title">Quelques images</p>
															<p className="description">du restaurant </p>
														</div>
													</a>
												</div>
                                            </div>
										</div>
                                        <div className="row">
											<div className="col-md-12">
												{/* <div className="square">
													<i className="fa fa-filter"></i>
													<a href="http://www.mesvins.fr">
														<div className="square-bg" style={{backgroundImage:"url(http://www.cepagegourmand.fr/wp-content/uploads/2017/02/mesvins.gif)"}}/>
														<div className="square-header">
															<p className="description">Achetez vos bouteilles chez nous !</p>
														</div>
														<div className="square-post-hover">
															<p className="description">Cépage Gourmand fait aussi Cave à Vins </p>
														</div>
													</a>
												</div> */}
											</div>
										</div>
									</div>
								</div>
							<div className="row">
								<div className="col-md-3">
									<div className="square"><img className="icon" src='http://cepagegourmand.fr/wp-content/uploads/2014/07/icone1-40x40.png' alt="" />
										<a href="/la-carte">
											<div className="square-bg" style={{backgroundImage:"url(http://www.cepagegourmand.fr/wp-content/uploads/2014/08/IMG_1141.jpg)"}}/>
											<div className="square-header">
												<p className="title">La carte</p>
												<p className="description">Une cuisine de saison</p>
											</div>
											<div className="square-post-hover">
												<p className="title">Découvrez les plats de Notre chef cuisine</p>
												<p className="description">et profitez de nos menus </p>
											</div>
										</a>
									</div>
								</div>
								<div className="col-md-3">
									<div className="square">
										{/* <img className="icon" src='http://cepagegourmand.fr/wp-content/uploads/2014/07/icone1-40x40.png' alt="" />
										<a href="http://www.cepagegourmand.fr/les-vins">
											<div className="square-bg" style={{backgroundImage:"url(http://www.cepagegourmand.fr/wp-content/uploads/2014/08/IMG_1188.jpg)"}}/>
											<div className="square-header">
												<p className="title">La carte des vins</p><p className="description">d'ici et d'ailleurs</p>
											</div>
											<div className="square-post-hover">
												<p className="title">Grégoire vous fait découvrir</p><p className="description">de nouveaux arômes </p>
											</div>
										</a> */}
									</div>
								</div>
								<div className="col-md-6">
									<div className="square">
										<img className="icon" src='http://cepagegourmand.fr/wp-content/uploads/2014/07/icone1-40x40.png' alt="" />
										<a href="/reservation/">
											<div className="square-bg" style={{backgroundImage:"url(http://www.cepagegourmand.fr/wp-content/uploads/2014/08/IMG_1101.jpg)"}}/>
											<div className="square-header">
												<p className="title">Réservez votre table</p><p className="description">en un appel ou message</p>
											</div><div className="square-post-hover">
												<p className="title">Nom Prénom XX XX</p><p className="description">vous attendent </p>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div id="footer" className="">
							<div className="row">
									<div className="col-md-6">
										<div className="widget-wrapper">
											<h3 className="widget-title">Menzah Sidi Harazem</h3>			
											<div className="textwidget">Manzeh Sidi Harazem • Sidi Harazem Fès • Café restau : 0535690718 • Piscine : 0629239859 / 0666959077 </div>
										</div>
										<div className="widget-wrapper">			
											<div className="textwidget"> 
												<a href="http://www.github.com/ayyouboulidi"> Réalisation : Ayyoub oulidi </a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="menu-bg foodmenu-bg" id="menu-bg-foodmenu" style={{background: "#3a3836 url('http://cepagegourmand.fr/wp-content/uploads/2014/07/bg-menus2.jpg')"}}/>
		<div id="restaurant-bg" style={{background: "#ffffff url('http://cepagegourmand.fr/wp-content/uploads/2014/07/background-restaurant1.jpg')"}}/>
	</div>

        )
    }
}