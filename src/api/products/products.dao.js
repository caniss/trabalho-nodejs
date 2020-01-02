import { instances } from 'hapi-sequelizejs'
import { getObjectOr404 } from '../utils/database.utils';

const Product = instances.getModel('product');

export default class ProductsDAO {

  async findAll(params) {
    return Product.findAll({
      where: params,
      include: [ 'categories' ]
    });
  }

  async findByID(id) {
    return getObjectOr404(Product, {
      where: { id },
      include: [ 'categories' ]
    });
  }

  async create(data) {
    return Product.create(data);
  }

  async update(id, data) {
    const product = await this.findByID(id);

    return product.update(data);
  }

  async destroy(id) {
    const product = await this.findByID(id);

    return product.destroy();
  }
}