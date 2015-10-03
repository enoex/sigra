/**
 * party-create
 *      Main menu (home)
 * @module components/party-create
 */

// External Dependencies
import _ from 'lodash';
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
var PartyCreate = React.createClass({
    componentWillMount: function componentWillMount(){
        logger.log('components/party-create:componentWillMount', 'called');
    },

    backClicked: function backClicked(){
        this.props.dispatch(ACTIONS.mainMenuShowParty());
    },

    render: function render(){
        logger.log('components/party-create:render', 'called %j', this.props);
        const dispatch = this.props.dispatch;
        const members = this.props.partyCreate.members;

        let partyListHtml = (
            <ul className='party-create__member-list-wrapper'>
                {_.range(this.props.partyCreate.maxMembers).map((i)=>{
                    return (
                        <li key={i}
                            className={'party-create__member-list-item ' + (members[i] ? '' : 'party-create__member-list-item--empty')}>
                            { members[i] ? members[i] : 'Empty' }
                        </li>
                    );
                })}
            </ul>
        );

        // Available classes. TODO: Filter based on filter
        let classesListHtml = this.props.classes.map((d)=>{
            return (
                <div className='party-create__class-item'>
                    <div className='party-create__class-item-name'>
                        {d.name}
                    </div>
                    <div className='party-create__class-item-description'>
                        {d.description}
                    </div>
                </div>
            );
        });

        // right panel HTML is determine by selected party
        let rightSidePartyHtml = '';
        rightSidePartyHtml = (
            <div className='party-create__right-panel'>
                <div className='party-create__class-items-wrapper'>
                    {classesListHtml}
                </div>
            </div>
        );

        // Render it
        return (
            <div className='party-create__wrapper'>
                <div className='party-create__inner'>

                    <div className='party-create__left-panel-wrapper'>
                        <div className='party-create__header-wrapper'>
                            <div className='party-create__title'>
                                <h2> Members </h2>
                            </div>
                        </div>

                        {partyListHtml}
                    </div>


                    <div className='party-create__right-panel-wrapper'>
                        <div className='party-create__right-panel-header'>

                            <div className='party-create__right-panel-header-item header-item-all header-item-active'>
                                <div className='party-create__right-panel-header-item-inner'>
                                    All Classes
                                </div>
                            </div>

                            <div className='party-create__right-panel-header-item header-item-tank'>
                                <div className='party-create__right-panel-header-item-inner'>
                                    Tank
                                </div>
                            </div>
                            <div className='party-create__right-panel-header-item header-item-heal'>
                                <div className='party-create__right-panel-header-item-inner'>
                                    Heal
                                </div>
                            </div>
                            <div className='party-create__right-panel-header-item header-item-damage'>
                                <div className='party-create__right-panel-header-item-inner'>
                                    Damage
                                </div>
                            </div>
                            <div className='party-create__right-panel-header-item header-item-utility'>
                                <div className='party-create__right-panel-header-item-inner'>
                                    Uility
                                </div>
                            </div>

                            <div className='clear'></div>
                        </div>

                        {rightSidePartyHtml}

                    </div>

                    <div className='party-create__footer--wrapper'>
                        <div onClick={this.backClicked} className='party-create__current-party-list-back'>
                            <h3> ⬅︎  Back </h3>
                        </div>
                        <div onClick={this.backClicked}
                            className='party-create__current-party-list-next'>
                            <h3> Create ➡︎</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default PartyCreate;
