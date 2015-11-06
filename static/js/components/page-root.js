/**
 * root.js
 *      Main root component
 * @module components/root
 */
// External Dependencies
import React from 'react';
import {RouteHandler} from 'react-router';
import logger from 'bragi-browser';
import {connect} from 'react-redux';

import * as ACTIONS from '../actions.js';

import MainMenu from './root-main-menu.js';
import Game from './game.js';
import Party from './root-party.js';
import PlayQueue from './play-queue.js';
import PartyCreate from './root-party-create.js';

var ReactTooltip = require("react-tooltip");

/**
 *
 * Functionality
 *
 */
var Root = React.createClass({
    contextTypes: { router: React.PropTypes.func.isRequired },

    componentWillMount: function componentWillMount(){
        logger.log('components/page-root:componentWillMount', 'called');
    },
    shouldComponentUpdate: function(nextProps){
        if(nextProps.mainMenu === this.props.mainMenu){
            logger.log('components/page-root:shouldComponentUpdate', 'false');
            return false;
        } else {
            logger.log('components/page-root:shouldComponentUpdate', 'true');
            return true;
        }
    },

    render: function render(){
        logger.log('components/page-root:render:' + this.props.mainMenu.page,
        'called | %j', { props: this.props });

        const dispatch = this.props.dispatch;
        let rootHtml = '';

        switch(this.props.mainMenu.page){
            case 'home':
                rootHtml = (<MainMenu dispatch={dispatch}/>);
                break;

            case 'party':
                rootHtml = (<Party dispatch={dispatch}
                        classes={this.props.classes}
                        mainMenu={this.props.mainMenu}
                        account={this.props.account}/>
                );
                break;

            case 'play-queue':
                rootHtml = (<PlayQueue dispatch={dispatch}
                    mainMenu={this.props.mainMenu}
                    account={this.props.account} />
                );
                break;

            case 'party-create':
                //TODO : pass in possible classes / (races?)
                rootHtml = (
                    <PartyCreate dispatch={dispatch}
                        classes={this.props.classes}
                        partyCreate={this.props.partyCreate}
                        account={this.props.account} />
                );
                break;

            case 'game':
                rootHtml = (
                    <Game dispatch={dispatch}
                        mainMenu={this.props.mainMenu}
                        classes={this.props.classes}
                        partyCreate={this.props.partyCreate}
                        account={this.props.account} />
                );
                break;

            default:
                rootHtml = (<MainMenu dispatch={dispatch}/>);
        }

        return (
            <div className='root__wrapper'>
                {rootHtml}
                <ReactTooltip />
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
    return {
        mainMenu: state.mainMenu,
        classes: state.classes,
        partyCreate: state.partyCreate,
        account: state.account
    };
}
export default connect(select)(Root);
