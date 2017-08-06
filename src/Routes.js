import React from 'react';
import { Router, Route } from 'react-router';
import Home from './Home';
import Carte from './Carte';
import Resto from './Resto';
import Piscine from './Piscine';
import Reservation from './Reservation';
import Galerie from './Galerie';


export default (props) => (
    <Router {...props}>
        <Route path="/" component={Home} />
        <Route path="/la-carte" component={Carte} />
        <Route path="/le-resto" component={Resto} />
        <Route path="/piscine" component={Piscine} />
        <Route path="/reservation" component={Reservation} />
        <Route path="/galerie-photo" component={Galerie} />
        <Route path="*" component={Home} />
    </Router>
);
