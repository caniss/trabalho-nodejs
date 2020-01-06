import OrdersDAO from './orders.dao';
import ProductsDAO from '../products/products.dao';
import Boom from '@hapi/boom';
import CartsDAO from '../carts/carts.dao';

const ordersDAO = new OrdersDAO();
const productsDAO = new ProductsDAO();
const cartsDao = new CartsDAO();

export default class OrdersBusiness {

  async list({ params }) {
    return ordersDAO.findAll(params);
  }

  async detail({ params }) {
    const { id } = params;

    return ordersDAO.findByID(id);
  }

  async create({ payload }) {

    let order = await ordersDAO.create(payload);

    const { cart } = payload;    

    payload.value = await cartsDao.processCart(cart, order.id);

    return ordersDAO.update(order.id, payload);

  }

  async update({ params, payload }) {
    const { id } = params;
    const { cart } = payload;

    await cartsDao.returnProductsCart(id);

    payload.value = await cartsDao.processCart(cart, id);

    return ordersDAO.update(id, payload);
  }

  async destroy({ params }) {
    const { id } = params;

    return ordersDAO.destroy(id);
  }
}