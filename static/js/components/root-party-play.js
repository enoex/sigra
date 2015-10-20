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
        this.props.dispatch(ACTIONS.mainMenuShowParty());
    },
    playClicked: function backClicked(){
        this.props.dispatch(ACTIONS.mainMenuShowPlayQueue(this.props.mainMenu.selectedPartyIndex));
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
                <div className='party-play__party-member-wrapper'>
                    <div className='party-play__party-member-name'>
                    {member.types.map((d)=>{
                        return (
                            <img className='party-create__filter-icon'
                                data-tip={d[0].toUpperCase() + d.substring(1)}
                                src={'/static/img/classes/type-' + d + '.svg'} />
                        );
                    })}
                        {member.name}
                    </div>

                    <img className='party-play__member-image'
                        src={'/static/img/classes/' + member.classId + '.png'}
                        />
                    {member.className}

                    <div className='clear'></div>
                </div>
            );
        });

        // Render it
        return (
            <div className='party-play__wrapper'>
                <div className='party-play__inner'>
                    <div className='party-play__party-wrapper'>
                        {partyHtml}
                    </div>

                    <div className='party-play__play-pane-wrapper'>
                        <div className='party-play__play-pane-play'
                            onClick={this.playClicked}>
                            <div className='party-play__play-pane-play-button'>
                                Play
                            </div>
                        </div>
                    </div>

                    <div className='party-play__footer--wrapper'>
                        <div onClick={this.backClicked} className='party-play__back'>
                            <h3> ⬅︎  Back </h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default PartyPlay;
