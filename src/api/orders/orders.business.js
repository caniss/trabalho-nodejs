import OrdersDAO from './orders.dao';
import ProductsDAO from '../products/products.dao';
import  Boom from '@hapi/boom';

const ordersDAO = new OrdersDAO();
const productsDAO = new ProductsDAO();  

export default class OrdersBusiness {

  async list({ params }) {
    return ordersDAO.findAll(params);
  }

  async detail({ params }) {
    const { id } = params;

    return ordersDAO.findByID(id);
  }

  async create({ payload }) {
    let total = 0;  

    const { id: userId, cart } = payload;
    
    for(let product of cart){
      let resultProduct = await productsDAO.findByID(product.id);

      if(resultProduct.dataValues.quantity < product.quantity){
        throw Boom.notAcceptable('Quantidade não tem em estoque');
      }

      resultProduct.dataValues.quantity -= product.quantity;
      await productsDAO.update(product.id, resultProduct.dataValues);

      total = parseFloat(total) + (parseFloat(resultProduct.value)
              * parseFloat(product.quantity));
      
    }

    payload.value = total;
    return ordersDAO.create(payload);
  }

  async update({ params, payload }) {
    const { id } = params;
    const { userId, cart } = payload;

    if(cart){
      for(let product of cart){
        let resultProduct = await productsDAO.findByID(product.id);
        if(resultProduct.dataValues.quantity < product.quantity){
          throw Boom.notAcceptable('Quantidade não tem em estoque');
        }

        resultProduct.dataValues.quantity -= product.quantity;
        await productsDAO.update(product.id, resultProduct.dataValues);
      }
    }
    
    return ordersDAO.update(id, payload);
  }

  async destroy({ params }) {
    const { id } = params;

    return ordersDAO.destroy(id);
  }
}