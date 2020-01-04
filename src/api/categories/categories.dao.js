import { instances } from 'hapi-sequelizejs'
import { getObjectOr404 } from '../utils/database.utils';

const Category = instances.getModel('category');

export default class CategoriesDAO {

  async findAll(params) {
    return Category.findAll({
      where: params
    });
  }

  async findByID(id) {
    return getObjectOr404(Category, {
      where: { id }
    });
  }

  async findOne(id) {
    return Category.findOne({ where: {id: id} });
  }

  async create(data) {
    return Category.create(data);
  }

  async update(id, data) {
    const category = await this.findByID(id);

    return category.update(data);
  }

  async destroy(id) {
    const category = await this.findByID(id);

    return category.destroy();
  }
}