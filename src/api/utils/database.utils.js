import Boom from '@hapi/boom';

export async function getObjectOr404(model, options) {
  const object = await model.findOne(options);

  if (!object) {
    throw Boom.notFound('Objeto inexistente');
  }

  return object;
}