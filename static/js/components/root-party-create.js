/**
 * party-create
 *      Main menu (home)
 * @module components/party-create
 */

// External Dependencies
import _ from 'lodash';
import React from 'react';
import logger from 'bragi-browser';
import {connect} from 'react-redux';
import {RouteHandler} from 'react-router';

import * as ACTIONS from '../actions.js';
import annotateDescription from '../util/annotate-description-string.js';


/**
 *
 * Functionality
 *
 */
var PartyCreate = React.createClass({
    componentWillMount: function componentWillMount (){
        logger.log('components/party-create:componentWillMount', 'called');
    },
    shouldComponentUpdate: function ( nextProps, nextState ){
        if(nextProps === this.props){
            logger.log('components/party-create:shouldComponentUpdate', 'false');
            return false;
        } else {
            logger.log('components/party-create:shouldComponentUpdate', 'true');
            return true;
        }
    },

    /**
     * UI
     */
    classItemClicked: function classItemClicked ( d ){
        logger.log('components/party-create:classItemClicked', 'called, %j', d);
        this.props.dispatch(ACTIONS.partyCreateAddMemberFromClassObject(d));
    },
    removePartyMemberAtIndex: function removePartyMemberAtIndex ( i ){
        logger.log('components/party-create:removePartyMemberAtIndex', 'called: ' + i);
        this.props.dispatch(ACTIONS.partyCreateRemoveMemberAtIndex(i));
    },

    /**
     * Navigation
     */
    backClicked: function backClicked (){
        this.props.dispatch(ACTIONS.mainMenuShowParty());
    },
    createClicked: function createClicked (){
        this.props.dispatch(ACTIONS.partyCreateCreateParty(this.props.partyCreate.members));
    },

    /**
     * Render
     */
    render: function render(){
        logger.log('components/party-create:render', 'called %j', this.props);
        const dispatch = this.props.dispatch;
        const members = this.props.partyCreate.members;

        // PART List
        let partyListHtml = (
            <div className='party-create__member-list-wrapper'>
                {_.range(this.props.partyCreate.maxMembers).map((i)=>{
                    return (
                        <div key={i}
                            data-tip={(members[i] ? 'Click to remove ' + members[i].name : 'Select a class to add a party member')}
                            className={'party-create__member-list-item ' + (members[i] ? '' : 'party-create__member-list-item--empty')}>
                            { members[i] ? (
                                <div className='party-create__member-list-item-inner'
                                    onClick={()=>{ this.removePartyMemberAtIndex(i); }}>
                                    <img className='party-create__member-list-item-class-image' src='/static/img/classes/warrior.png' />
                                    <div className='party-create__member-list-item-names'>
                                        <div className='party-create__member-list-item-name'>
                                            {members[i].name}
                                        </div>
                                        <div className='party-create__member-list-item-className'>
                                            {members[i].className}
                                        </div>
                                    </div>
                                    <div className='clear'></div>
                                </div>
                            ) : 'Empty' }
                        </div>
                    );
                })}
            </div>
        );

        // Available classes. TODO: Filter based on filter
        let classesListHtml = this.props.classes.classes.map((d)=>{

            let descriptionHtml = (
                <span dangerouslySetInnerHTML={{__html: annotateDescription(d.description)}}></span>
            );

            // TODO: Class TYPE ICONS for filtering. Iterate over types
            return (
                <div className='party-create__class-item' key={d.id}>
                    <div className='party-create__class-item-name'
                        onClick={()=>{return this.classItemClicked(d); }}
                        data-tip={'Click to add a ' + d.name + ' to your party'}>
                        <span className='party-create__class-item-name-text'>
                            {d.name}

                            <span className='party-create__class-item-class-types'>
                                {d.types.map(function(type){
                                    return (<img
                                        className='party-create__class-item-class-type-icon'
                                        src={'/static/img/classes/type-' + type + '.svg'} />);
                                }) }
                                <div className='clear'></div>
                            </span>
                        </span>
                    </div>

                    <div className='party-create__class-item-class-image'>
                        <img src='/static/img/classes/warrior.png' />
                    </div>
                    <div className='party-create__class-item-description'>
                        {descriptionHtml}
                    </div>

                    <div className='clear'></div>

                    <div className='party-create__class-item-timer'
                        data-tip={d.timer + ' seconds required for critical hit'}>

                        <div className='party-create__class-item-timer-bar-wrapper'>
                            <div className='party-create__class-item-timer-bar' style={{width: ((d.timer / this.props.classes.maxTimer) * 100) + '%'}}> </div>
                        </div>
                        <div className='party-create__class-item-timer-label'>
                            {d.timer} seconds
                        </div>
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
                                <h2> Members
                                    <span className='party-create__title-members-length'>
                                        {members.length} / {this.props.partyCreate.maxMembers}
                                    </span>
                                </h2>
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
                                    <img className='party-create__filter-icon' src='/static/img/classes/type-tank.svg' />
                                </div>
                            </div>
                            <div className='party-create__right-panel-header-item header-item-heal'>
                                <div className='party-create__right-panel-header-item-inner'>
                                    Heal
                                    <img className='party-create__filter-icon' src='/static/img/classes/type-heal.svg' />
                                </div>
                            </div>
                            <div className='party-create__right-panel-header-item header-item-damage'>
                                <div className='party-create__right-panel-header-item-inner'>
                                    Damage
                                    <img className='party-create__filter-icon' src='/static/img/classes/type-dps.svg' />
                                </div>
                            </div>
                            <div className='party-create__right-panel-header-item header-item-utility'>
                                <div className='party-create__right-panel-header-item-inner'>
                                    Uility
                                    <img className='party-create__filter-icon' src='/static/img/classes/type-util.svg' />
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
                        <div onClick={this.createClicked}
                            className={'party-create__current-party-list-next ' + (this.props.partyCreate.members.length === this.props.partyCreate.maxMembers ? '' : 'disabled')}>
                            <h3> Create ➡︎</h3>
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
    logger.log('components/root-party-create:select', 'called: ', state);
    return {partyCreate: state.partyCreate};
}
export default connect(select)(PartyCreate);
//export default PartyCreate;
