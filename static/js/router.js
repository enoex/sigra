/**
 *
 * router
 *      sets up router for app
 * @module router
 */
import React from 'react';
import logger from 'bragi-browser';

import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import {create, HistoryLocation, HashLocation} from 'react-router';

import App from './components/app.js';
import PageMainMenu from './components/page-main-menu.js';
import PageParty from './components/page-party.js';
import NotFound from './components/not-found.js';

/**
 *
 * functionality
 *
 */
var routes = (
    <Route handler={App} >
        <Route name="mainMenu" path="/" handler={PageMainMenu} />
        <Route name="party" path="/party" handler={PageParty} />
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

export default create({
    routes: routes,
    location: HistoryLocation
});
