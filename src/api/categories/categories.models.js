import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Category extends Model {}

  Category.init({
    id: { 
        type: dataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true  
    },
    description: dataTypes.STRING
  }, { sequelize, modelName: 'category', tableName: 'categories' });

  return Category;
}