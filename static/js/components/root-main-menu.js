/**
 * root-main-menu
 *      Main menu (home)
 * @module components/root-main-menu
 */

// External Dependencies
import React from 'react';
import {RouteHandler} from 'react-router';
import logger from 'bragi-browser';

import {connect} from 'react-redux';

import * as ACTIONS from '../actions.js';

/**
 *
 * Functionality
 *
 */
var MainMenu = React.createClass({
    contextTypes: { router: React.PropTypes.func.isRequired },

    componentWillMount: function componentWillMount(){
        logger.log('components/root-main-menu:componentWillMount', 'called');
    },

    selectPlay: function selectPlay(){
        logger.log('components/root-main-menu:selectPlay', 'called');
        this.props.dispatch(ACTIONS.mainMenuShowPlay());
    },
    selectAccount: function selectAccount(){
        logger.log('components/root-main-menu:selectAccount', 'called');
    },
    selectLeaderboard: function selectLeaderboard(){
        logger.log('components/root-main-menu:selectLeaderboard', 'called');
    },

    render: function render(){
        logger.log('components/root-main-menu:render', 'called');
        const { dispatch } = this.props;

        return (
            <div className='main-menu__wrapper'>
                <div className='main-menu__background'> </div>
                <h1 className='main-menu__title'> Sigra </h1>

                <div className='main-menu__list-wrapper'>
                    <ul className='main-menu__list'>
                        <li className='main-menu__list-item'
                            onClick={this.selectPlay}>
                            Play
                        </li>
                        <li className='main-menu__list-item'
                            onClick={this.selectAccount}>
                            Account
                        </li>
                        <li className='main-menu__list-item'
                            onClick={this.selectLeaderboard}>
                            Leaderboard
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

export default MainMenu;
