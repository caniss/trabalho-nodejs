import { CREATED, NO_CONTENT } from 'http-status';

import OrderBusiness from './orders.business';

const ordersBusiness = new OrderBusiness();

export default class OrderController {

  async list(request, h) {
    return await ordersBusiness.list(request);
  }

  async detail(request, h) {
    return await ordersBusiness.detail(request);
  }

  async create(request, h) {
    const post = await ordersBusiness.create(request);

    return h.response(post).code(CREATED);
  }

  async update(request, h) {
    return await ordersBusiness.update(request);
  }

  async destroy(request, h) {
    await ordersBusiness.destroy(request);

    return h.response().code(NO_CONTENT);
  }
}