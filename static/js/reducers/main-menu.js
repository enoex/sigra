/**
 * Reducer functions for main menu
 * @module reducers/main-menu
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
/**
 * Main menu reducer
 */
// TODO: Load / save state with localforage? Or set manually for testing
const defaultState = {
    page: 'home',
    // usually null, but if a party is selected it will be the index of the
    // selected party (accessible by index via the `account` reducer)
    selectedPartyIndex: null
};

export default function mainMenu ( state=defaultState, action ){
    switch(action.type){
        case ACTIONS.MAIN_MENU_SHOW_HOME:
            return { page: 'home' };
        case ACTIONS.MAIN_MENU_SHOW_PLAY:
            return { page: 'play' };

        case ACTIONS.MAIN_MENU_SHOW_PARTY:
            return { page: 'party' };

        case ACTIONS.MAIN_MENU_SHOW_PARTY_SELECT:
            return { page: 'party', selectedPartyIndex: action.index };
        case ACTIONS.MAIN_MENU_SHOW_PLAY_QUEUE:
            return { page: 'play-queue', selectedPartyIndex: action.index };

        case ACTIONS.MAIN_MENU_SHOW_PARTY_CREATE:
            return { page: 'party-create' };

        case ACTIONS.MAIN_MENU_SHOW_ACCOUNT:
            return { page: 'account' };
        case ACTIONS.MAIN_MENU_SHOW_LEADERBOARD:
            return { page: 'leaderboard' };

        default:
            return state;
    }
}

