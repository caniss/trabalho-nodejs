import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Order extends Model { }

  Order.init({
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    value: dataTypes.DECIMAL
  }, { sequelize, modelName: 'order', tableName: 'orders' });

  Order.associate = models => {
    Order.belongsTo(models.user);
    Order.belongsToMany(models.product,
      {
        through: 'cart',
        as: 'products',
        foreignKey: 'orderId',
        otherKey: 'productId',
        attributes: ['value']
      });
  };

  return Order;
}