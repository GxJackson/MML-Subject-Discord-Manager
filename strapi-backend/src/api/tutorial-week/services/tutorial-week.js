'use strict';

/**
 * tutorial-week service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tutorial-week.tutorial-week');
