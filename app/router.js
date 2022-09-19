'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { view } = controller;
  // router.get('/', controller.home.index);

  // view
  router.get('/', view.index);
  router.get('/login', view.login);
  router.get('/news', controller.news.list);
  // router.get('/project/*', view.index);
};
