import { instances } from 'hapi-sequelizejs'
import { getObjectOr404 } from '../utils/database.utils';

const Order = instances.getModel('order');

export default class OrdersDAO {

  async findAll(params) {
    return Order.findAll();
  }

  async findByID(id) {
    return getObjectOr404(Order, {
      where: { id }
    });
  }

  async create(data) {
    return Order.create(data);
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