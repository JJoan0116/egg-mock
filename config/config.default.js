/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1662454959601_931';

  // add your middleware config here
  // config.middleware = [ 'robot' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    // host: 'rm-1hhj9an54wut4fj1j.mysql.rds.aliyuncs.com',
    host: 'localhost',
    username: 'root',
    password: '1qaz@WSX',
    port: 3306,
    database: 'mocks',
    define: {
      freezeTableName: true,
      timestamps: false,
      // createdAt: 'gmtCreate',
      // updatedAt: 'gmtModified',
      charset: 'utf8',
      underscored: true,
    },
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  return {
    ...config,
    ...userConfig,
  };
};
