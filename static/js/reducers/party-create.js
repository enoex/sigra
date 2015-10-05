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
    logger.log('actions/party-create', 'called : %j', action);
    var newState;

    switch(action.type){
        case ACTIONS.PARTY_CREATE_ADD_MEMBER:
            if(state.members.length < state.maxMembers){
                let newMember = {
                    name: action.name,
                    classId: action.classObject.id,
                    className: action.classObject.name
                };

                newState = _.cloneDeep(state);
                newState.members.push(newMember);
                return newState;

            } else {
                return state;
            }
            break;

        case ACTIONS.PARTY_CREATE_REMOVE_MEMBER:
            if(state.members[action.index]){
                newState = _.cloneDeep(state);
                newState.members.splice(action.index, 1);
                return newState;

            } else {
                logger.log('actions/party-create', 'invalid index %j', action);
            }
            break;

        default:
            return state;
    }
}

