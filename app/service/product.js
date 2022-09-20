const Service = require('egg').Service;

class Product extends Service {
  /**
     * 查询有权限的product
     * @param {*} workId workId
     */
  async getUserPermissionList(workId) {
    const permissions = await this.ctx.service.permission.findPermissionByUser(workId);
    console.log(111, permissions);
    const result = [];
    return result;
  }

  /**
   * 获取用户有admin权限的product
   * @param {*} workId workId
   */
  async getUserPermissionAdminList() {
    const result = [];
    return result;
  }
}

module.exports = Product;
