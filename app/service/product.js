const Service = require('egg').Service;

class Product extends Service {
  /**
     * 查询有权限的product
     * @param {*} workId workId
     */
  async getUserPermissionList() {
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
