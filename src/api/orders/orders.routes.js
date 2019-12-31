import OrdersController from './orders.controllers';
import * as Schemas from './orders.schemas';

const controller = new OrdersController();

export default [
  {
    method: 'GET',
    path: '/orders',
    handler: controller.list,
    config: {
      tags: ['api', 'orders'],
    }
  },
  {
    method: 'GET',
    path: '/orders/{id}',
    handler: controller.detail,
    config: {
      tags: ['api', 'orders'],
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/orders',
    handler: controller.create,
    config: {
      tags: ['api', 'orders'],
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/orders/{id}',
    handler: controller.update,
    config: {
      tags: ['api', 'orders'],
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/orders/{id}',
    handler: controller.destroy,
    config: {
      tags: ['api', 'orders'],
      validate: Schemas.detail
    }
  }
];