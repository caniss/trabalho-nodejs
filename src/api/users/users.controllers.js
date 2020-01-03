import { CREATED, NO_CONTENT } from 'http-status';
import { authenticate, getToken } from '../utils/auth.utils';
import UserBusiness from './users.business';

const usersBusiness = new UserBusiness();

export default class UsersController {

  async list(request, h) {
    return await usersBusiness.list(request);
  }

  async detail(request, h) {
    return await usersBusiness.detail(request);
  }

  async create(request, h) {
    const cliente = await usersBusiness.create(request);

    return h.response(cliente).code(CREATED);
  }

  async update(request, h) {
    return await usersBusiness.update(request);
  }

  async destroy(request, h) {
    await usersBusiness.destroy(request);

    return h.response().code(NO_CONTENT);
  }

  async login(request, h) {
    return await usersBusiness.login(request);
  }
}