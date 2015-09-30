/**
 * main-menu.js
 *      Main main-menu component
 * @module components/main-menu
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
var MainMenu = React.createClass({
    contextTypes: { router: React.PropTypes.func },

    componentWillMount: function componentWillMount(){
        logger.log('components/page-main-menu:componentWillMount', 'called');
    },

    selectPlay: function selectPlay(){
        logger.log('components/page-main-menu:selectPlay', 'called');
        this.context.router.transitionTo('party');
    },
    selectAccount: function selectAccount(){
        logger.log('components/page-main-menu:selectAccount', 'called');
    },
    selectLeaderboard: function selectLeaderboard(){
        logger.log('components/page-main-menu:selectLeaderboard', 'called');
    },

    render: function render(){
        logger.log('components/page-main-menu:render', 'called');

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
