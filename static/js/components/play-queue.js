/**
 * play-queue
 *      Queue for playing
 * @module components/play-queue
 */

// External Dependencies
import _ from 'lodash';
import React from 'react';
import {RouteHandler} from 'react-router';
import logger from 'bragi-browser';

import * as ACTIONS from '../actions.js';

/**
 *
 * Functionality
 *
 */
var PlayQueue = React.createClass({
    componentWillMount: function componentWillMount(){
        logger.log('components/play-queue:componentWillMount', 'called');
    },

    backClicked: function backClicked(){
        this.props.dispatch(ACTIONS.mainMenuShowParty());
    },

    /**
     * render it
     */
    render: function render(){
        logger.log('components/play-queue:render', 'called %j', this.props);
        const dispatch = this.props.dispatch;
        const party = this.props.account.parties[this.props.mainMenu.selectedPartyIndex];


        // Render it
        return (
            <div className='play-queue__wrapper'>
                <div className='play-queue__inner'>
                    Finding opponent ....
                </div>
            </div>
        );
    }
});

export default PlayQueue;
