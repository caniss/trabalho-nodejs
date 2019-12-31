import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Order extends Model {}

  Order.init({
    valor: dataTypes.DECIMAL
  }, { sequelize, modelName: 'order', tableName: 'orders' });

  Order.associate = models => {
    models.user.belongsTo(models.user);
    models.product.hasMany(models.product, { as: 'products' });
  };

  return Order;
}