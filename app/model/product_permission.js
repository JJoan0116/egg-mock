'use strict';

// CREATE TABLE IF NOT EXISTS `product_permission` (
//   `id` int(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'primary key',
//   `product_id` varchar(100) NOT NULL COMMENT 'product id',
//   `user_id` varchar(100) NOT NULL COMMENT 'user id',
//   `type` varchar(20) NOT NULL COMMENT 'permission',
//   PRIMARY KEY (`id`)
//   UNIQUE KEY `permission_idx` (`product_id`, `user_id`)
//  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='product user permission';


module.exports = app => {
  const { STRING } = app.Sequelize;
  const ProductPermission = app.model.define('product_permission', {
    // productCode: STRING(50),
    // workId: STRING(100),
    // type: STRING(20),
    productId: STRING(50),
    userId: STRING(100),
    type: STRING(20),
  });

  return ProductPermission;
};
