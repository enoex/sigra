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

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

var reducers = {
    account: require('./reducers/account'),
    mainMenu: require('./reducers/main-menu')
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
const createStoreWithMiddleware = applyMiddleware(logMiddleware, thunk)(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers));

export default store;
