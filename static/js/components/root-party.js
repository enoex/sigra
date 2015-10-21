/**
 * root-party
 *      Main menu (home)
 * @module components/root-party
 */

// External Dependencies
import _ from 'lodash';
import React from 'react';
import {RouteHandler} from 'react-router';
import logger from 'bragi-browser';

import {connect} from 'react-redux';

import * as ACTIONS from '../actions.js';

import PartySelected from './root-party-selected.js';

/**
 *
 * Functionality
 *
 */
var Party = React.createClass({
    componentWillMount: function componentWillMount(){
        logger.log('components/root-party:componentWillMount', 'called');
    },

    backClicked: function backClicked(){
        this.props.dispatch(ACTIONS.mainMenuShowHome());
    },

    /**
     * when player clicks on a party item, take them to the 'play' screen OR
     * the create screen if no party exists
     */
    partyClicked: function partyClicked(party, index){
        logger.log('components/root-party:partyClicked', 'called (' + index + ')');
        if(party){
            // if same party was selected, de-select it
            if(index === this.props.mainMenu.selectedPartyIndex){
                return this.props.dispatch(ACTIONS.mainMenuShowPartySelect(null));

            } else {
                // show selected party
                this.props.dispatch(ACTIONS.mainMenuShowPartySelect(index));
            }

        } else {
            // Create if no party exists
            this.props.dispatch(ACTIONS.mainMenuShowPartyCreate());
        }
    },

    /**
     * render it
     */
    render: function render(){
        logger.log('components/root-party:render', 'called %j', this.props);
        const dispatch = this.props.dispatch;
        const parties = this.props.account.parties || [];

        let partyListHtml = (
            <ul className='root-party__current-party-list'>
                {_.range(this.props.account.maxNumParties).map((i)=>{
                    let partyItemHtml = 'Create Party';

                    // TODO: add images and icons and name
                    if(parties[i]){
                        partyItemHtml = [];
                        _.each(parties[i], (d)=>{ partyItemHtml.push(d.name); });
                        partyItemHtml = partyItemHtml.join(',');
                    }

                    return (
                        <li key={i}
                            className={'root-party__current-party-list-item ' +
                                (this.props.mainMenu.selectedPartyIndex === i ? 'root-party__current-party-list-item-active' : '') + ' ' +
                                (parties[i] ? '' : 'root-party__current-party-list-item-empty')
                            }
                            onClick={this.partyClicked.bind(this, parties[i], i)} >
                            {partyItemHtml}
                        </li>
                    );
                })}
            </ul>
        );

        /**
         * Right pane
         */
        // right panel HTML is determine by selected party
        let rightSidePartyHtml = '';

        if(isNaN(parseInt(this.props.mainMenu.selectedPartyIndex, 10))){
            rightSidePartyHtml = (
                <div className='root-party__right-panel'>
                    <div className='root-party__right-panel-background'>
                        <img src='/static/img/map-no-border.png' />
                    </div>
                </div>
            );
        } else {
            rightSidePartyHtml = (
                <PartySelected
                    dispatch={dispatch}
                    classes={this.props.classes}
                    mainMenu={this.props.mainMenu}
                    party={this.props.account.parties[this.props.mainMenu.selectedPartyIndex]} />
            );
        }

        // Render it
        return (
            <div className='root-party__wrapper'>
                <div className='root-party__inner'>
                    <div className='root-party__current-party-list-wrapper'>
                        <div className='root-party__current-party-list-header'>
                            <h2> Choose Party </h2>
                        </div>

                        {partyListHtml}

                        <div onClick={this.backClicked} className='root-party__current-party-list-back'>
                            <h3> ⬅︎  Back </h3>
                        </div>
                    </div>

                    <div className='root-party__right-panel-wrapper'>
                        {rightSidePartyHtml}
                    </div>
                </div>
            </div>
        );
    }
});

export default Party;
