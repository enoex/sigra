/**
 * Reducer function for classes / class info
 * @module reducers/classes
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
    party: []
};

export default function classes ( state=defaultState, action ){
    switch(action.type){
        default:
            return state;
    }
}

