import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Order extends Model {}

  Order.init({
    id: { 
        type: dataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true  
    },
    value: dataTypes.DECIMAL
  }, { sequelize, modelName: 'order', tableName: 'orders' });

  Order.associate = models => {
    models.order.belongsTo(models.user);
  };

  return Order;
}