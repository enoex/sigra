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
            timer: 8
        },
        {
            name: 'Ranger',
            id: 'ranger',
            description: 'Fast firing archer, deals ([5][[x2]]) damage',
            timer: 3
        },
        {
            name: 'Wizard',
            id: 'wizard',
            description: 'Fires a magic missle, dealing ([30][[x2.5]]) damage immediately',
            timer: 10
        },
        {
            name: 'Cleric',
            id: 'cleric',
            description: 'Restores ([20][[x3]]) health immediately',
            timer: 12
        }
    ]
};

export default function classes ( state=defaultState, action ){
    switch(action.type){
        default:
            return state;
    }
}

