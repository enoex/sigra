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
import _ from 'lodash';
import async from 'async';

import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

var reducers = {
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
const createStoreWithMiddleware = compose(
    applyMiddleware(logMiddleware, thunk),
    devTools(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers));

export default store;
