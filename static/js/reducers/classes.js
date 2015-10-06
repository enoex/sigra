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
    maxTimer: 12,
    classes: [
        {
            name: 'Warrior',
            id: 'warrior',
            description: 'Increases defense by ([10][[x2]]) and absorbs the next ([20][[x2]]) damage for ([2][[x3]]) seconds.',
            types: ['tank'],
            timer: 8
        },
        {
            name: 'Ranger',
            id: 'ranger',
            description: 'Fast firing archer, deals ([5][[x2]]) damage',
            types: ['dps'],
            timer: 3
        },
        {
            name: 'Wizard',
            id: 'wizard',
            description: 'Fires a magic missle, dealing ([30][[x2.5]]) damage immediately',
            types: ['dps'],
            timer: 10
        },
        {
            name: 'Cleric',
            id: 'cleric',
            description: 'Restores ([20][[x3]]) health immediately',
            types: ['heal'],
            timer: 12
        },
        {
            name: 'Enchanter',
            id: 'enchanter',
            description: 'Incrases speed by ([10][[x2]]) percent',
            types: ['util'],
            timer: 10
        }
    ]
};

export default function classes ( state=defaultState, action ){
    switch(action.type){
        default:
            return state;
    }
}

