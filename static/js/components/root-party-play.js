/**
 * root-party-play
 *      Play menu with a selected party
 * @module components/root-party-play
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
var PartyPlay = React.createClass({
    componentWillMount: function componentWillMount(){
        logger.log('components/root-party-play:componentWillMount', 'called');
    },

    backClicked: function backClicked(){
        this.props.dispatch(ACTIONS.mainMenuShowHome());
    },


    /**
     * render it
     */
    render: function render(){
        logger.log('components/root-party-play:render', 'called %j', this.props);
        const dispatch = this.props.dispatch;
        const party = this.props.account.parties[this.props.mainMenu.selectedPartyIndex];

        let partyHtml = party.map((member)=>{
            return (
                <div>
                    {member}
                </div>
            );
        });

        // Render it
        return (
            <div className='root-party-play__wrapper'>
                <div className='root-party-play__inner'>
                    {partyHtml}

                    <div className='party-create__footer--wrapper'>
                        <div onClick={this.backClicked} className='party-create__current-party-list-back'>
                            <h3> ⬅︎  Back </h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default PartyPlay;
