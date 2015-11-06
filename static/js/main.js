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

// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import SliderMonitor from 'redux-slider-monitor';

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
        <div className='app'>
            <Provider store={store}>
                {()=> <Handler {...state} />}
            </Provider>

            <DebugPanel top right bottom>
                <DevTools store={store}
                    monitor={LogMonitor}
                />
            </DebugPanel>
        </div>,
        document.getElementById('app-wrapper')
    );
});
