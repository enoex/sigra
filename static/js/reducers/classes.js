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
const defaultState = [
    {
        name: 'Warrior',
        icon: 'warrior',
        description: 'Increases your defense',
        timer: 8
    },
    {
        name: 'Ranger',
        icon: 'ranger',
        description: 'Fast firing archer',
        timer: 3
    },
    {
        name: 'Wizard',
        icon: 'wizard',
        description: 'Poweful arcane based spell caster',
        timer: 10
    },
    {
        name: 'Cleric',
        icon: 'cleric',
        description: 'Restores health',
        timer: 8
    }
];

export default function classes ( state=defaultState, action ){
    switch(action.type){
        default:
            return state;
    }
}

