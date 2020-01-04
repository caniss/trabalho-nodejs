import CategoriesDAO from './categories.dao';

const categoriesDAO = new CategoriesDAO();

export default class CategoriesBusiness {

  async list({ params }) {
    return categoriesDAO.findAll(params);
  }

  async detail({ params }) {
    const { id } = params;

    return categoriesDAO.findByID(id);
  }

  async create({ payload, auth }) {
    
    return categoriesDAO.create(payload);
  }

  async update({ params, payload }) {
    const { id } = params;

    return categoriesDAO.update(id, payload);
  }

  async destroy({ params }) {
    const { id } = params;

    return categoriesDAO.destroy(id);
  }
}