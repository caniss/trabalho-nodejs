import { instances } from 'hapi-sequelizejs'
import { getObjectOr404 } from '../utils/database.utils';

const Order = instances.getModel('order');
const Product = instances.getModel('product');

export default class OrdersDAO {

  async findAll(params) { 
    return Order.findAll({
      params,
      include:[
        'user',
        {
          model: this.Product,
          as: 'products',
          through: { attributes: ['quantity'] },
          attributes: ['id', 'description', 'value'],
        },
      ],
    });
  }

  async findByID(id) {
    return getObjectOr404(Order, {
      where: { id },
      include: [
        'user',
        {
          model: this.Product,
          as: 'products',
          through: { attributes: ['quantity'] },
          attributes: ['id', 'description', 'value'],
        },
      ],
    });
  }

  async create(data) {
    const { products } = data;
    const order = await Order.create(data);

    if(products){
      for(const product of products){
        const { id, quantity } = product;
        await order.addProducts(id,{
          through: {
            quantity: quantity
          }
        });
      }
    }
    return await this.findByID(order.id);
  }

  async update(id, data) {
    const order = await this.findByID(id);

    return order.update(data);
  }

  async destroy(id) {
    const order = await this.findByID(id);

    return order.destroy();
  }
}