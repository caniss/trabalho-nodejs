import { CREATED, NO_CONTENT } from 'http-status';

import ProductBusiness from './product.business';

const productsBusiness = new ProductBusiness();

export default class ProductController {

  async list(request, h) {
    return await productsBusiness.list(request);
  }

  async detail(request, h) {
    return await productsBusiness.detail(request);
  }

  async create(request, h) {
    const post = await productsBusiness.create(request);

    return h.response(post).code(CREATED);
  }

  async update(request, h) {
    return await productsBusiness.update(request);
  }

  async destroy(request, h) {
    await productsBusiness.destroy(request);

    return h.response().code(NO_CONTENT);
  }
}