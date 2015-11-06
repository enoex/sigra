/**
 * Reducer function a single game
 * @module reducers/game
 *
 */
import logger from '../logger.js';
import _ from 'lodash';

import * as ACTIONS from '../actions.js';

/**
 *
 * Reducers
 *
 */
const defaultState = {
    player: {
    },
    opponent: {
    },
    tick: 0
};

export default function account ( state=defaultState, action ){
    var newState;

    switch(action.type){
        case ACTIONS.GAME_SET_TICK:
            // Normally we would clone the object, but a shallow copy is
            // fine in this case
            return Object.assign({}, state, {tick: action.tick});

        default:
            return state;
    }
}

