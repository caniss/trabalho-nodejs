import { Model } from 'sequelize';
import Bcrypt from 'bcryptjs';

export default (sequelize, dataTypes) => {
  class User extends Model {}

  User.init({
    name: dataTypes.STRING,
    document: {  type: dataTypes.STRING, 
            unique: true,
            primaryKey: true
    },
    email: dataTypes.STRING,
    password: dataTypes.STRING
  }, { sequelize, modelName: 'user', tableName: 'users' });

  User.associate = models => {
    models.user.hasMany(models.order, { as: 'orders' });
  };

  User.addHook('beforeCreate', async (user) => {
    const hash = await Bcrypt.hash(user.password, 10);

    user.password = hash;
  });

  return User;
}