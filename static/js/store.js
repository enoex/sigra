/**
 *
 * store.js
 *      App store
 * @module store
 *
 */
/**
 * dependencies
 */
import logger from './logger.js';
import config from './config.js';

import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

var reducers = {
    game: require('./reducers/game'),
    account: require('./reducers/account'),
    classes: require('./reducers/classes'),
    mainMenu: require('./reducers/main-menu'),
    partyCreate: require('./reducers/party-create')
};

/**
 *
 * middleware
 *
 */
function logMiddleware ({ dispatch, getState }) {
    logger.log('logMiddleware:setup', 'called', arguments);

    return function(next) {
        logger.log('logMiddleware:wrappedNext', 'called');

        return function (action) {
            logger.log('logMiddleware:wrappedAction',
                'called with %O', action);

            return next(action);
        };
    };
}

/**
 *
 * Setup store and reducer
 *
 */

// setup store with middleware
let createStoreWithMiddleware;
if (config.USE_DEV_TOOLS) {
    // persistState: enables ?debug_session=<name> in address bar to persist debug sessions
    createStoreWithMiddleware = compose(
        applyMiddleware(logMiddleware, thunk),
        devTools(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);
} else {
    createStoreWithMiddleware = compose(applyMiddleware(logMiddleware, thunk))(createStore);
}

const store = createStoreWithMiddleware(combineReducers(reducers));
export default store;


/**
 * SUPER JANKY - remove this
 *
 * Basic overview: If the window location is `http://localhost:8080/?debug_session=x`
 * then store the existing state and set it on window close to avoid state being
 * constantly updated (to help with game loop debugging)
 */
if (true) {
    setTimeout(function () {
        let key = 'ignoresave';
        let curState = localStorage.getItem('redux-dev-session-?debug_session=' + key + ',' + key);
        localStorage.removeItem('redux-dev-session-?debug_session=' + key + ',' + key);
        window.onbeforeunload = function () {
            console.log(">>>>>> Setting state");
            localStorage.setItem('redux-dev-session-?debug_session=' + key + ',' + key, curState);
        };
    }, 1000);
}
