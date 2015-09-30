/**
 *
 * app.js
 *      Main app handler component
 * @module components/app
 *
 */
/**
 * dependencies
 */
import React, {Component, PropTypes} from 'react';
import {RouteHandler} from 'react-router';
import logger from '../logger.js';
import {connect} from 'react-redux';

let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();

/**
 *
 * functionality
 *
 */
var App = React.createClass({
    contextTypes: { router: React.PropTypes.func.isRequired },

    /**
     * material ui
     */
    childContextTypes: { muiTheme: React.PropTypes.object },
    getChildContext() { return { muiTheme: ThemeManager.getCurrentTheme() }; },

    /**
     * lifecycle events
     */
    componentDidMount: function(){
        logger.log('components/app:componentDidMount', 'called');
    },

    /**
     * render
     */
    render: function render(){
        logger.log('components/app:render', 'called');

        return (
            <div id='site-wrapper'>
                <RouteHandler {...this.props} />
            </div>
        );
    }
});

export default App;
