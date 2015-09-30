/**
 *
 * actions.js
 *      Action constants and action creators
 * @module actions
 *
 */
import logger from './logger.js';

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
export const MAIN_MENU_SHOW_PARTY_CREATE = 'MAIN_MENU_SHOW_PARTY_CREATE';
export const MAIN_MENU_SHOW_ACCOUNT = 'MAIN_MENU_SHOW_ACCOUNT';
export const MAIN_MENU_SHOW_LEADERBOARD = 'MAIN_MENU_SHOW_LEADERBOARD';

export function mainMenuShowHome ( ){ return { type: MAIN_MENU_SHOW_HOME }; }
/**
 * only show play menu if the player has a party selected
 */
export function mainMenuShowPlay() {
    return (dispatch, getState) => {
        if(getState().account.selectedParty){
            return dispatch(mainMenuShowPlay());
        } else {
            return dispatch(mainMenuShowParty());
        }
    };
}

export function mainMenuShowParty ( ){ return { type: MAIN_MENU_SHOW_PARTY }; }
export function mainMenuShowPartyCreate ( ){ return { type: MAIN_MENU_SHOW_PARTY_CREATE }; }
export function mainMenuShowAccount ( ){ return { type: MAIN_MENU_SHOW_ACCOUNT }; }
export function mainMenuShowLeaderboard ( ){ return { type: MAIN_MENU_SHOW_LEADERBOARD }; }

/**
 * Account
 */


/**
 *
 * In Game Actions
 *
 */
