import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Product extends Model {}

  Product.init({
    id: { 
        type: dataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true  
    },
    value: dataTypes.DECIMAL,
    description: dataTypes.STRING,
    quantity: dataTypes.INTEGER
  }, { sequelize, modelName: 'product', tableName: 'products' });

  Product.associate = models => {
    models.product.belongsToMany(models.order, {through: 'cart'});
    models.product.belongsTo(models.category);
  };

  return Product;
}