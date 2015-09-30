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
const defaultState = {
    parties: [],
    maxNumParties: 6,
    selectedParty: null
};

export default function account ( state=defaultState, action ){
    switch(action.type){
        default:
            return state;
    }
}

