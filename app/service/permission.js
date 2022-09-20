const Service = require('egg').Service;

class Permission extends Service {
  async findPermissionByUser(workId) {
    const permission = await this.ctx.model.ProductPermission.findAll({
      where: { userId: 1 },
    });
    return permission;
  }
}

module.exports = Permission;
