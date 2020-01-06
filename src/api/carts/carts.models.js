import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
    class Cart extends Model { }

    Cart.init({
        id: { 
            type: dataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true  
        },
        quantity: dataTypes.INTEGER,
        productId: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'product',
                key: 'id'
            }
        },
        orderId: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'order',
                key: 'id'
            }
        }
    }, { sequelize, modelName: 'cart', tableName: 'carts', paranoid: false });

    return Cart;
}