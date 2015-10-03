/**
 * main.js
 *      main entrypoint into site homepage
 * @module main
 */
/**
 * css
 */
import '../css/main.scss';

/**
 * dependencies
 */
import logger from './logger.js'; window.logger = logger;

import d3 from 'd3'; window.d3 = d3;
import _ from 'lodash'; window._ = _;
import $ from 'jquery'; window.$ = $;

import React from 'react';
import router from './router.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from "./store.js";

/**
 *
 * functionality
 *
 */
logger.log('main', 'initializing');

router.run((Handler, state) => {
    logger.log('main:routerRun', 'preparing to render');

    React.render(
        <Provider store={store}>
            {()=> <Handler {...state} />}
        </Provider>,
        document.getElementById('app')
    );
});
