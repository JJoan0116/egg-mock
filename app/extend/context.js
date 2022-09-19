// app 对象指的是 Koa 的全局应用对象，全局只有一个，在应用启动时被创建。 this.app 访问到 Application 对象，例如 this.app.config 访问配置对象。

// 这是 请求级别 的对象，每次请求生成一个 Context 实例，通常我们也简写成 ctx
'use strict';

const USER = Symbol('Context#user');
const USER_ID = Symbol('Context#userId');

module.exports = {
  get user() {
    if (this[USER]) {
      return this[USER];
    }

    return null;
  },

  set user(user) {
    this[USER] = user;
  },

  get userId() {
    if (this[USER_ID]) {
      return this[USER_ID];
    }

    return null;
  },

  set userId(userId) {
    this[USER] = userId;
  },
};
