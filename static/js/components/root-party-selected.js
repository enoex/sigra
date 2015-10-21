/**
 * root-party-selected
 *      Subcomponent for select party
 * @module components/root-party-selected
 */

// External Dependencies
import _ from 'lodash';
import React from 'react';
import {RouteHandler} from 'react-router';
import logger from 'bragi-browser';

import * as ACTIONS from '../actions.js';
import annotateDescription from '../util/annotate-description-string.js';

/**
 *
 * Functionality
 *
 */
var PartySelected = React.createClass({
    componentWillMount: function componentWillMount(){
        logger.log('components/root-party-selected:componentWillMount', 'called');
    },

    playClicked: function backClicked(){
        this.props.dispatch(ACTIONS.mainMenuShowPlayQueue(this.props.mainMenu.selectedPartyIndex));
    },


    /**
     * render it
     */
    render: function render(){
        logger.log('components/root-party-selected:render', 'called %j', this.props);
        const dispatch = this.props.dispatch;
        const party = this.props.party || [];
        const classes = this.props.classes;

        let partyHtml = party.map((member)=>{
            return (
                <div className='party-selected__party-member-wrapper' key={member.name}>
                    <div className='party-selected__member-image-wrapper'>
                        <img className='party-selected__member-image'
                            src={'/static/img/classes/' + member.classId + '.png'}
                            />
                    </div>

                    <div className='party-selected__member-info-wrapper'>
                        <div className='party-selected__member-name'>
                            {member.name}
                        </div>

                        <span className='party-selected__member-class'>
                            {member.className}
                        </span>

                        {member.types.map((d)=>{
                            return (
                                <img className='party-create__filter-icon'
                                    key={d}
                                    data-tip={d[0].toUpperCase() + d.substring(1)}
                                    src={'/static/img/classes/type-' + d + '.svg'} />
                            );
                        })}

                        <div className='party-selected__member-description'>
                            <span dangerouslySetInnerHTML={{__html: annotateDescription(classes.classesById[member.classId].description)}}></span>
                        </div>
                    </div>
                    <div className='clear'></div>
                </div>
            );
        });

        // Render it
        return (
            <div className='party-selected__wrapper'>
                <div className='party-selected__members-wrapper'>
                    {partyHtml}
                </div>

                <div className='party-selected__play-pane-wrapper'>
                    <div className='party-selected__play-pane'>
                        <div className='party-selected__play-pane-play-button'
                            onClick={this.playClicked} >
                            Play
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default PartySelected;
