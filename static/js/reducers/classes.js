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
let defaultState = {
    // highest value of timer across all classes (calculated)
    maxTimer: 0,

    // stores id: ref to classes[i] (calulcate)
    classesById: {},

    // all classes
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

/**
 * takes in a state and mutates it, setting up classesById and maxTimer
 * NOTE: Any actions should call this function before returning state
 */
function prepareState(state){
    state.maxTimer = 0;
    state.classesById = {};

    var classesLength = state.classes.length;
    for(var i = 0; i < classesLength; i++){
        // stores REF
        state.classesById[state.classes[i].id] = state.classes[i];
        if(state.classes[i].timer > state.maxTimer){
            state.maxTimer = state.classes[i].timer;
        }
    }

    return state;
}
// setup state
defaultState = prepareState(defaultState);


export default function classes ( state=defaultState, action ){
    switch(action.type){
        // NOTE: Possible actions could be adding new classes when they are
        // discovered
        default:
            return state;
    }
}

