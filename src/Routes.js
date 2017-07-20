import React from 'react';
import { Router, Route } from 'react-router';
import Home from './Home';
import Carte from './Carte';


export default (props) => (
    <Router {...props}>
        <Route path="/" component={Home} />
        <Route path="/la-carte" component={Carte} />
        <Route path="*" component={Home} />
    </Router>
);
