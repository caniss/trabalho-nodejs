import ProductsDAO from './products.dao';
import CategoriesDAO from './products.dao';

const productsDAO = new ProductsDAO();
const categoriesDAO = new CategoriesDAO();

export default class ProductsBusiness {

  async list({ params }) {
    return productsDAO.findAll(params);
  }

  async detail({ params }) {
    const { id } = params;

    return productsDAO.findByID(id);
  }

  async create({ payload }) {
    const { categoryId: id } = payload;

    
    const category = await categoriesDAO.findByID(id);
    if (!category) {
      throw Boom.notAcceptable('Category not found!');
    }

    return productsDAO.create(payload);
  }

  async update({ params, payload }) {
    const { id } = params;

    return productsDAO.update(id, payload);
  }

  async destroy({ params }) {
    const { id } = params;

    return productsDAO.destroy(id);
  }
}