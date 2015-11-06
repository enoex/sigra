/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/build/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// Keep track if game loop should be running

	// timeout for current loop. Only one loop can be running at once
	'use strict';

	var CURRENT_LOOP_TIMEOUT;

	// keep an object around so we're not creating a new object each tick
	var RETURN_OBJECT = {};
	var GAME_TICK = 0;
	var IS_TIMER_ACTIVE = true;

	// Kick off loop
	// This is called to kicked off the game loop for the battle.
	// Store variables the tickFunc loop function will access
	//
	// Note: This is called as one of the last actions in the onShow()
	// method
	//
	// TODO: Sync tick and entire game state with server(?)

	// Initialize variables
	var timerNow = null;
	var TIMER_DT = 0;
	var TIMER_LAST = performance.now();

	var fps = 60;
	var timerStep = 1 / fps;

	var slow = 1;
	var slowStep = slow * timerStep;

	// game loop tick function
	function tickFunc() {
	    // This function is called each frame. Call render() to keep
	    // render state up to date, call update() on a fixed time
	    //
	    timerNow = performance.now();
	    TIMER_DT = TIMER_DT + Math.min(1, (timerNow - TIMER_LAST) / 1000);

	    while (TIMER_DT > timerStep) {
	        // Only call update when delta is greater than the timer step
	        // to maintain constant calls
	        TIMER_DT = TIMER_DT - timerStep;
	        GAME_TICK++;

	        // send message to main script
	        RETURN_OBJECT.tick = GAME_TICK;
	        RETURN_OBJECT.timerStep = timerStep;
	        postMessage(RETURN_OBJECT);
	    }

	    // always call render though, so we can draw things properly
	    TIMER_LAST = timerNow;

	    if (IS_TIMER_ACTIVE) {
	        //// if we can use requestAnimationFrame, then use it. But if
	        //// player has game backgrounded, it will pause the raf
	        //requestAnimationFrame(tickFunc);
	        CURRENT_LOOP_TIMEOUT = setTimeout(tickFunc, 4);
	    } else {
	        return false;
	    }
	}

	/**
	 * Start the game loop
	 */
	function startGameLoop() {
	    TIMER_LAST = performance.now();
	    TIMER_DT = 0;
	    IS_TIMER_ACTIVE = true;

	    // kick off the tick function
	    CURRENT_LOOP_TIMEOUT = setTimeout(tickFunc, 4);
	}

	/**
	 * Stop the loop
	 */
	function stopGameLoop() {
	    GAME_TICK = 0;
	    IS_TIMER_ACTIVE = false;
	}

	// TODO: add pause and resume

	/**
	 *
	 * Setup message listeners
	 *
	 */
	onmessage = function onMessage(message) {
	    // START game loop
	    if (message.data.messageType === 'start') {
	        // set initial tick value, if passed in
	        if (message.data.initialTick !== undefined) {
	            GAME_TICK = +message.data.initialTick;
	        } else {
	            GAME_TICK = 0;
	        }

	        startGameLoop();

	        // STOP game loop (quit it)
	    } else if (message.data.messageType === 'stop') {
	            stopGameLoop();
	        }
	};

/***/ }
/******/ ]);