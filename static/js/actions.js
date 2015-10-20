/**
 *
 * actions.js
 *      Action constants and action creators
 * @module actions
 *
 */
import logger from './logger.js';
import generateName from './util/generate-name.js';
import $ from 'jquery';

/**
 *
 * Messages
 *
 */

/**
 *
 * Out of Game - Main Menu
 *
 */

export const MAIN_MENU_SHOW_HOME = 'MAIN_MENU_SHOW_HOME';
export const MAIN_MENU_SHOW_PLAY = 'MAIN_MENU_SHOW_PLAY';
export const MAIN_MENU_SHOW_PARTY = 'MAIN_MENU_SHOW_PARTY';
export const MAIN_MENU_SHOW_PLAY_QUEUE = 'MAIN_MENU_SHOW_PLAY_QUEUE';
export const MAIN_MENU_SHOW_PARTY_PLAY = 'MAIN_MENU_SHOW_PARTY_PLAY';
export const MAIN_MENU_SHOW_PARTY_CREATE = 'MAIN_MENU_SHOW_PARTY_CREATE';
export const MAIN_MENU_SHOW_ACCOUNT = 'MAIN_MENU_SHOW_ACCOUNT';
export const MAIN_MENU_SHOW_LEADERBOARD = 'MAIN_MENU_SHOW_LEADERBOARD';

export function mainMenuShowHome ( ){ return { type: MAIN_MENU_SHOW_HOME }; }
/**
 * only show play menu if the player has a party selected
 */
export function mainMenuShowPlay () {
    return (dispatch, getState) => {
        if(getState().account.selectedParty){
            return dispatch(mainMenuShowPlay());
        } else {
            return dispatch(mainMenuShowParty());
        }
    };
}

export function mainMenuShowParty ( ){ return { type: MAIN_MENU_SHOW_PARTY }; }
export function mainMenuShowPartyPlay (index){
    return { type: MAIN_MENU_SHOW_PARTY_PLAY, index: index };
}

export function mainMenuShowPlayQueue (index){ return { type: MAIN_MENU_SHOW_PLAY_QUEUE, index: index }; }

export function mainMenuShowPartyCreate ( ){ return { type: MAIN_MENU_SHOW_PARTY_CREATE }; }
export function mainMenuShowAccount ( ){ return { type: MAIN_MENU_SHOW_ACCOUNT }; }
export function mainMenuShowLeaderboard ( ){ return { type: MAIN_MENU_SHOW_LEADERBOARD }; }

/**
 * Account
 */


/**
 * Party Creation
 */
export const PARTY_CREATE_ADD_MEMBER = 'PARTY_CREATE_ADD_MEMBER';
export function partyCreateAddMemberFromClassObject ( classObject ){
    return {
        type: PARTY_CREATE_ADD_MEMBER,
        classObject: classObject,
        // generate a name
        name: generateName()
    };
}

export const PARTY_CREATE_REMOVE_MEMBER = 'PARTY_CREATE_REMOVE_MEMBER';
export function partyCreateRemoveMemberAtIndex ( index ){
    return { type: PARTY_CREATE_REMOVE_MEMBER, index: index };
}

export const PARTY_CREATE_CREATE_PARTY = 'PARTY_CREATE_CREATE_PARTY';
export function partyCreateCreateParty ( party ){
    return (dispatch, getState) => {
        // update party
        dispatch({ type: PARTY_CREATE_CREATE_PARTY, party: party });
        // show party screen
        dispatch(mainMenuShowParty());
    };
}

/**
 *
 * In Game Actions
 *
 */
