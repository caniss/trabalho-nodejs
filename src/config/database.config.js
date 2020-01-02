import { Sequelize } from 'sequelize';
import Env from './environment.config';

const DATABASES = {
  development: {
    default: new Sequelize(Env.DB_NAME, {
      logging: Env.DEBUG,
      define: {
        freezeTableName: true,
        paranoid: true
      }
    })
  },
  production: {
    default: new Sequelize(Env.DB_NAME, Env.DB_USERNAME, Env.DB_PASSWORD, {
      host: Env.DB_HOST,
      port: Env.DB_PORT,
      dialect: 'mysql',
      logging: Env.DEBUG,
      define: {
        freezeTableName: true,
        paranoid: true
      }
    })
  },
};

export default DATABASES[Env.ENV];