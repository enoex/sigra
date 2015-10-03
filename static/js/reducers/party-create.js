/**
 * Reducer function for create party process
 * @module reducers/party-create
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
// TODO: get from server / local data file
const defaultState = {
    maxMembers: 5,
    members: []
};

export default function classes ( state=defaultState, action ){
    switch(action.type){
        default:
            return state;
    }
}

