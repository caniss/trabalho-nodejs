import { CREATED, NO_CONTENT } from 'http-status';

import CategoriesBusiness from './categories.business';

const categoriesBusiness = new CategoriesBusiness();

export default class PostsController {

  async list(request, h) {
    return await categoriesBusiness.list(request);
  }

  async detail(request, h) {
    return await categoriesBusiness.detail(request);
  }

  async create(request, h) {
    const category = await categoriesBusiness.create(request);

    return h.response(category).code(CREATED);
  }

  async update(request, h) {
    return await categoriesBusiness.update(request);
  }

  async destroy(request, h) {
    await categoriesBusiness.destroy(request);

    return h.response().code(NO_CONTENT);
  }
}