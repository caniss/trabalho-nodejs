import OrdersDAO from './orders.dao';

const ordersDAO = new OrdersDAO();

export default class OrdersBusiness {

  async list({ params }) {
    return ordersDAO.findAll(params);
  }

  async detail({ params }) {
    const { id } = params;

    return ordersDAO.findByID(id);
  }

  async create({ payload, auth }) {
    const { id: userId } = auth.credentials;

    return ordersDAO.create({ ...payload, userId });
  }

  async update({ params, payload }) {
    const { id } = params;

    return ordersDAO.update(id, payload);
  }

  async destroy({ params }) {
    const { id } = params;

    return ordersDAO.destroy(id);
  }
}