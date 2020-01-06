import { instances } from 'hapi-sequelizejs'
import { getObjectOr404 } from '../utils/database.utils';
import ProductsDAO from '../products/products.dao';
import Bomm from '@hapi/boom';

const productsDAO = new ProductsDAO();

const Cart = instances.getModel('cart');

export default class CartsDAO {

  async findAll(params) {
    return Cart.findAll({
      where: params
    });
  }

  async findByOrderId(params) {
    return Cart.findAll({
      where: params
    });
  }

  async findByID(id) {
    return getObjectOr404(Cart, {
      where: { id }
    });
  }

  async create(data) {
    return Cart.create(data);
  }

  async update(id, data) {
    const cart = await this.findByID(id);
    return cart.update(data);
  }

  async destroy(id) {
    const cart = await this.findByID(id);
    return cart.destroy({ force: true });
  }

  async processCart(cart, orderId) {

    if (!cart)
      throw Bomm.badData('Carrinho vazio');

    let total = 0;

    for (let item of cart) {

      let result = await productsDAO.findByID(item.productId);

      let product = result.dataValues;

      if (product.quantity < item.quantity) {
        throw Bomm.badData('Estoque insuficiente');
      }

      product.quantity -= item.quantity;

      await productsDAO.update(product.id, product);

      let cartItem = {
        orderId: orderId,
        productId: product.id,
        quantity: item.quantity
      }

      this.create(cartItem);

      total += (parseFloat(product.value) * parseFloat(item.quantity));

    }

    return total;
  }

  async returnProductsCart(id) {
    const cart = await this.findByOrderId({ orderId: id });
    for (let data of cart) {
      const item = data.dataValues;

      let resultProduct = await productsDAO.findByID(item.productId);
      const product = resultProduct.dataValues;

      product.quantity += item.quantity;

      await productsDAO.update(product.id, product);

      this.destroy(item.id);
    }
  }
}