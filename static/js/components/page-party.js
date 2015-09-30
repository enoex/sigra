/**
 * party.js
 *      Main party component
 * @module components/party
 */
// External Dependencies
import React from 'react';
import {RouteHandler} from 'react-router';
import logger from 'bragi-browser';
import {connect} from 'react-redux';

/**
 *
 * Functionality
 *
 */
var Party = React.createClass({
    contextTypes: { router: React.PropTypes.func },

    componentWillMount: function componentWillMount(){
        logger.log('components/page-party:componentWillMount', 'called');
    },

    selectPlay: function selectPlay(){
        logger.log('components/page-party:selectPlay', 'called');
        // TODO: Go to play
    },
    selectAccount: function selectAccount(){
        logger.log('components/page-party:selectAccount', 'called');
        // TODO: Go to play
    },
    selectLeaderboard: function selectLeaderboard(){
        logger.log('components/page-party:selectLeaderboard', 'called');
        // TODO: Go to play
    },

    render: function render(){
        logger.log('components/page-party:render', 'called');

        return (
            <div className='page-party__wrapper'>
                Party
            </div>
        );
    }
});

export default Party;
