/**
 *
 * Main game object. Handles main game loop behaviors. Dispatches actions to
 * have view components update.
 *
 * @module game
 */
import store from './store.js';
import logger from './logger.js';
import * as ACTIONS from './actions.js';

import GameLoopWorker from 'worker!./game-loop-worker.js';
const gameLoopTicker = new GameLoopWorker();

/**
 *
 * GAME
 *
 */
var GAME = {
    _loopStarted: false,
    tick: 0
};

/**
 * Called to setup the game. Note that is NOT a class, nor is an object factory,
 * it is just an object. We will have only ever a single game, so it is
 * essentially a singleton.
 *
 * @param {Object} [initialState] - optional initial store state (including tick)
 *      to start the game with
 */
GAME.initialize = function initialize (initialState) {
    var self = this;
    logger.log('game:initialize', 'called with ', initialState);

    if(!this._loopStarted){
        this._loopStarted = true;
        logger.log('game:initialize', 'starting loop');

        // When a message is sent from the web worker to this script,
        // call the game loop tick function
        gameLoopTicker.onmessage = function gotMessage (message){
            self.onGameTick(message.data.tick, message.data.timeStep);
        };

        // TODO: get initialTick from initialState
        let initialTick = ((initialState && initialState.tick) ? initialState.tick : 0);

        // startup the loop
        gameLoopTicker.postMessage({messageType: 'start', initialTick: initialTick});
    }
};

/**
 * Shuts down the game loop
 */
GAME.stop = function stop () {
    this._loopStarted = false;
    gameLoopTicker.postMessage({messageType: 'stop'});
};

/**
 * Main game loop tick function. Logic / physics happens here
 *
 * Note we can't really dispatch an action every tick, as it would be too
 * much. For timer bars, we can just dispatch when they reach some fraction
 * of a number, instead of every tick
 */
GAME.onGameTick = function onGameTick (tick, timeStep) {
    // Logic goes here
    // TODO: Could all logic for using abilities live here? E.g., checks
    // when an ability is active for the player? AI logic?
    //    Things to check:
    //      -Ability becomes usable (e.g., start at tick 0. At tick 100, the
    //      ability can be used. If tick >= 100, either setState or trigger
    //      redux action (state might be easiest, less overhead))
    //      -Enemy (AI) uses ability. (trigger action)
    //      -Buff expires (trigger action)
    //
    // Requirements: Should be able to take in entire game state and
    // state from any point in time (e.g., if player loses connection,
    // should be able to know on server and restart game at latest game
    // state) (ideally. might be ok to just have game be counted as a
    // disconnect for player that disconnected, and a win for the other
    // player)
    //
    // Idea 1) - This function handles all game loop logic. It reads in
    // global state and triggers actions when necessary (e.g., making
    // abilities active, handling AI, enabled / disabling buffs). Logic
    // lives here, redux is used simple to trigger actions that will
    // be used to update game UI. If a player uses an ability, how to
    // op
    // handle? a) within this logic function or 2) within reducer store
    // function.
    //      -use fire ball. can use? yes. render. send messag over websocket
    //
    //   BUFFS - specify a tick # that it will be removed at (and any effects)
    //
    //
    // GOAL - start game. 0 ticks. set all initial ticks which abilities
    // can be used. Player cannot use ability until that tick. When that
    // tick is reached, trigger action. When player uses ability, ensure
    // game tick is >= tick ability can be used at.
    // When ability is used, if it can be used, immediately trigger
    // ability's function.
    // Function should emit actions, which update global state, which this
    // loop knows about.
    // Reset when next usage of ability tick value
    //
    //
    //
    //
    // TODO: Sync game state from websocket
    this._start = this._start || new Date();

    // expose actual tick value
    this.tick = tick;

    // Dispatch action that game tick changed, but do it in intervals
    // so that we don't overload the browser
    if(tick % 99990 < 1){
        store.dispatch(ACTIONS.gameSetTick(tick));
    }
};


/**
 *
 * Export it
 *
 */
export default GAME;
