'use strict';

const Controller = require('egg').Controller;

class ViewController extends Controller {
  async index(ctx) {
    const userInfo = ctx.user;

    const userPermissionList = await ctx.service.product.getUserPermissionList(userInfo?.workId);
    // const userPermissionAdminList = await ctx.service.product.getUserPermissionAdminList(userInfo.workId);

    // 字段名适配
    // function map(products) {
    //   products.forEach(product => {
    //     product.value = product.code;
    //     product.text = product.name;

    //     product.members.forEach(member => {
    //       member.nickName = member.userName;
    //     });
    //   });
    //   return products;
    // }

    await ctx.render('index.html', {
      // userPermissionList: JSON.stringify(map(userPermissionList)),
      // userPermissionAdminList: JSON.stringify(map(userPermissionAdminList)),
      userInfo: JSON.stringify(userInfo),
      domain: ctx.domain,
      host: ctx.origin,
      hostname: '',
      isPre: '',
      csrf: false,
      root: ctx.app.config.env === 'local' ? 'http://127.0.0.1:8001' : '/assets',
    });
  }

  async login(ctx) {
    await ctx.render('login.html');
  }
}

module.exports = ViewController;
