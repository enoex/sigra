/**
 * game
 *      Queue for playing
 * @module components/game
 */

// External Dependencies
import _ from 'lodash';
import React from 'react';
import logger from '../logger.js';
import {connect} from 'react-redux';
import {RouteHandler} from 'react-router';

import GameMain from '../game.js';
import * as ACTIONS from '../actions.js';

/**
 *
 * Functionality
 *
 */
var Game = React.createClass({

    backClicked: function backClicked(){
        this.props.dispatch(ACTIONS.mainMenuShowParty());
    },

    /**
     * Lifecycle events
     */
    componentDidMount: function componentDidMount(){
        var self = this;
        logger.log('components/game:componentDidMount', 'called');

        // Start the game
        GameMain.initialize(this.props.game);
    },

    /**
     * kill all game loop logic
     */
    componentWillUnmount: function componentWillUnmount(){
        logger.log('components/game:componentWillUnmount', 'called');
        GameMain.stop(this.props.game);
    },

    /**
     *
     * render it
     *
     */
    render: function render(){
        logger.log('components/game:render', 'called %j', this.props);
        const dispatch = this.props.dispatch;
        const party = this.props.account.parties[this.props.mainMenu.selectedPartyIndex];
        const game = this.props.game;

        // get height based on party member count
        let partyMemberStyle = {
            height: '30% !important'
        };

        // Render it
        return (
            <div className='game__wrapper'>
                <div className='game__inner'>

                    {/* Player health */}
                    <div className='game__health-wrapper-player'>
                        <div className='game__health-player'>
                            Health
                            {this.props.game.tick}
                            ||
                            {(this.props.game.tick || 0) / 60}
                            Game
                        </div>
                    </div>

                    <div className='game_play-wrapper'>
                        {/* Player pane */}
                        <div className='game__pane-wrapper-player'>
                            <div className='game__active-effects-wrapper-player'>
                            </div>

                            {/* PARTY MEMBERS */}
                            <div className='game__party-members-player-wrapper'>

                                {/* Individual member */}
                                { [1,2,3].map((d)=>{
                                    return (
                                        <div className='game__party-member-player-wrapper'
                                            key={d}
                                            style={partyMemberStyle} >
                                            <div className='game__abilities-wrapper-player'>
                                            </div>
                                            <div className='game__party-member-sprite'>
                                                {d}
                                            </div>
                                        </div>
                                    );
                                }) }
                            </div>
                        </div>

                        {/* Enemy pane */}
                        <div className='game__pane-wrapper-enemy'>

                        </div>

                    </div>

                    {/* Enemy Health */}
                    <div className='game__health-wrapper-enemy'>
                        <div className='game__health-enemy'>
                            Health
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

/**
 * configure select function and connect to redux
 */
function select(state) {
    logger.log('components/app:select', 'called: ', state);
    // TODO: use https://github.com/faassen/reselect
    return { game: state.game };
}
export default connect(select)(Game);
