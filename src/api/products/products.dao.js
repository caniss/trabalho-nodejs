import { instances } from 'hapi-sequelizejs'
import { getObjectOr404 } from '../utils/database.utils';
import Sequelize from 'sequelize';

const Product = instances.getModel('product');

const operator = Sequelize.Op;

export default class ProductsDAO {

  async findAll(params) {
    
    if(params.description){
        params.description = { [op.like]: `%${params.description}%`};
    }
    return Product.findAll({
      where: params,
      include: [ 'category' ]
    });
  }

  async findByID(id) {
    return getObjectOr404(Product, {
      where: { id },
      include: [ 'category' ]
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