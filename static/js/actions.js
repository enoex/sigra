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

export const MAIN_MENU_SHOW_PLAY = 'MAIN_MENU_SHOW_PLAY';
export const MAIN_MENU_SHOW_PARTY = 'MAIN_MENU_SHOW_PARTY';
export const MAIN_MENU_SHOW_ACCOUNT = 'MAIN_MENU_SHOW_ACCOUNT';
export const MAIN_MENU_SHOW_LEADERBOARD = 'MAIN_MENU_SHOW_LEADERBOARD';

export function mainMenuShowPlay ( ){ return { type: MAIN_MENU_SHOW_PLAY }; }
export function mainMenuShowParty ( ){ return { type: MAIN_MENU_SHOW_PARTY }; }
export function mainMenuShowAccount ( ){ return { type: MAIN_MENU_SHOW_ACCOUNT }; }
export function mainMenuShowLeaderboard ( ){ return { type: MAIN_MENU_SHOW_LEADERBOARD }; }

/**
 *
 * In Game Actions
 *
 */
