/**
 *
 * logger.js
 *      Logger instance
 * @module logger
 *
 */
import logger from 'bragi-browser';
logger.transports.get('console').property('showMeta', false);

// TODO: Log levels
logger.options.groupsEnabled = ['game'];

export default logger;
