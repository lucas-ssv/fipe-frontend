import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Fipe from './pages/Fipe';
import Modelo from './pages/Modelo';
import Buscar from './pages/Buscar';
import Anuncio from './pages/Anuncio';

const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/fipe" component={Fipe} />
                <Route path="/fipe/modelo" component={Modelo} />
                <Route exact path="/buscar" component={Buscar} />
                <Route path="/buscar/anuncios" component={Anuncio} />
            </Switch>
        </BrowserRouter>
    );
};

export default routes;
