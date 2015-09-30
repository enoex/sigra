/**
 * Reducer function for the player's account. Contains party info, history,
 * stats, etc.
 * @module reducers/account
 *
 */
import logger from '../logger.js';
import _ from 'lodash';

import Immutable from 'immutable';
import * as ACTIONS from '../actions.js';

/**
 *
 * Reducers
 *
 */
export default function account ( state={}, action ){
    switch(action.type){
        default:
            return state;
    }
}

