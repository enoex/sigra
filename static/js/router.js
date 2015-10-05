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
import PageRoot from './components/page-root.js';
import NotFound from './components/not-found.js';

/**
 *
 * functionality
 *
 */
var routes = (
    <Route handler={App} >
        <Route name="nw" path="/index.html" handler={PageRoot} />
        <Route name="main" path="/" handler={PageRoot} />
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

export default create({
    routes: routes,
    location: HistoryLocation
});
