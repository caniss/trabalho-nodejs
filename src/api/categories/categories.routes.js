import CategoriesController from './categories.controllers';
import * as Schemas from './categories.schemas';

const controller = new CategoriesController();

export default [
  {
    method: 'GET',
    path: '/categories',
    handler: controller.list,
    config: {
      tags: ['api', 'categories'],
    }
  },
  {
    method: 'GET',
    path: '/categories/{id}',
    handler: controller.detail,
    config: {
      tags: ['api', 'categories'],
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/categories',
    handler: controller.create,
    config: {
      tags: ['api', 'categories'],
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/categories/{id}',
    handler: controller.update,
    config: {
      tags: ['api', 'categories'],
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/categories/{id}',
    handler: controller.destroy,
    config: {
      tags: ['api', 'categories'],
      validate: Schemas.detail
    }
  }
];