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
    maxNumParties: 3,
    selectedParty: null
};

export default function account ( state=defaultState, action ){
    var newState;

    switch(action.type){
        case ACTIONS.PARTY_CREATE_CREATE_PARTY:
            if(state.parties.length < state.maxNumParties){
                newState = _.cloneDeep(state);
                newState.parties.push(action.party);
                return newState;
            } else { return state; }
            break;

        default:
            return state;
    }
}

